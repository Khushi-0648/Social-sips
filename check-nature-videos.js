import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8981;
const outDir = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a';
const list = [
  { file: 'nature-coffee-journey.webm', name: 'check-nature-journey.jpg' },
  { file: 'ai-coffee-natural-1.mp4', name: 'check-natural-1.jpg' },
  { file: 'ai-coffee-natural-2.mp4', name: 'check-natural-2.jpg' }
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
      c.width = v.videoWidth; c.height = v.videoHeight;
      v.currentTime = v.duration > 2 ? 1.5 : 0.5;
      await new Promise(r => v.onseeked = r);
      ctx.drawImage(v, 0, 0, c.width, c.height);
      await fetch('/s?name=' + item.name, { method: 'POST', body: c.toDataURL('image/jpeg', 0.88) });
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
    const p = path.join(__dirname, 'public', 'videos', req.url.slice(5));
    fs.createReadStream(p).pipe(res);
  } else if (req.url.startsWith('/s') && req.method === 'POST') {
    const name = new URL(req.url, 'http://localhost').searchParams.get('name');
    let b = '';
    req.on('data', c => b += c);
    req.on('end', () => {
      fs.writeFileSync(path.join(outDir, name), Buffer.from(b.replace(/^data:image\/jpeg;base64,/, ''), 'base64'));
      res.end('ok');
    });
  } else if (req.url === '/done') {
    res.end('ok');
    server.close();
    process.exit(0);
  }
});

server.listen(PORT, () => {
  spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new', '--disable-gpu', '--user-data-dir=C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-check-nature', `http://127.0.0.1:${PORT}/`
  ]);
});
