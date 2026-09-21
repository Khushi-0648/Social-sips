import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8990;
const storyDir = path.join(__dirname, 'public', 'images', 'story');

const list = [
  { file: 'espresso-extraction.mp4', poster: 'poster-espresso.jpg', t: 2.0 },
  { file: 'latte-art-flower.mp4', poster: 'poster-latte-art.jpg', t: 1.8 },
  { file: 'iced-coffee-pour.mp4', poster: 'poster-iced-coffee.jpg', t: 2.0 },
  { file: 'coffee-beans-falling.mp4', poster: 'poster-beans.jpg', t: 1.5 }
];

const html = `<!DOCTYPE html>
<html><body>
  <video id="v" muted playsinline></video><canvas id="c"></canvas>
  <script>
    const list = ${JSON.stringify(list)};
    const v = document.getElementById('v');
    const c = document.getElementById('c');
    const ctx = c.getContext('2d');
    async function run() {
      for (const item of list) {
        v.src = '/vid/' + item.file;
        await new Promise(r => v.onloadedmetadata = r);
        c.width = v.videoWidth;
        c.height = v.videoHeight;
        v.currentTime = item.t;
        await new Promise(r => v.onseeked = r);
        ctx.drawImage(v, 0, 0, c.width, c.height);
        await fetch('/save?name=' + item.poster, {
          method: 'POST',
          body: c.toDataURL('image/jpeg', 0.9)
        });
      }
      fetch('/done');
    }
    run();
  </script>
</body></html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url.startsWith('/vid/')) {
    const f = path.join(__dirname, 'public', 'videos', req.url.slice(5));
    fs.createReadStream(f).pipe(res);
  } else if (req.url.startsWith('/save') && req.method === 'POST') {
    const name = new URL(req.url, 'http://localhost').searchParams.get('name');
    let b = '';
    req.on('data', c => b += c);
    req.on('end', () => {
      const b64 = b.replace(/^data:image\/jpeg;base64,/, '');
      fs.writeFileSync(path.join(storyDir, name), Buffer.from(b64, 'base64'));
      console.log('Saved poster:', name);
      res.writeHead(200);
      res.end('ok');
    });
  } else if (req.url === '/done') {
    console.log('All posters generated');
    res.writeHead(200);
    res.end('ok');
    setTimeout(() => {
      server.close();
      process.exit(0);
    }, 500);
  }
});

server.listen(PORT, () => {
  spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--disable-gpu',
    '--user-data-dir=C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-posters',
    `http://127.0.0.1:${PORT}/`
  ]);
});
