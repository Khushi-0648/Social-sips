import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8998;
const outDir = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a';

const candidateVideos = [
  { id: 'real-milk-pour-1', file: 'coverr-milk-pour-1.mp4', title: 'Real Barista Velvet Milk Pour into Dark Cup', time: 2.5 },
  { id: 'real-milk-pour-2', file: 'coverr-milk-pour-2.mp4', title: 'Barista Pitcher Pouring Steamed Milk with Rich Crema', time: 3.0 },
  { id: 'real-latte-art-flower', file: 'latte-art-flower.mp4', title: 'Real Barista Crafting Tulip Latte Art', time: 2.0 },
  { id: 'real-latte-art-swirl', file: 'latte-art-swirl.mp4', title: 'Real Latte Art Heart & Rosette Swirl', time: 1.8 },
  { id: 'real-espresso-extraction', file: 'espresso-extraction.mp4', title: 'Real Bottomless Portafilter Golden Crema Extraction', time: 2.0 },
  { id: 'real-coffee-steam', file: 'coffee-natural-steam.mp4', title: 'Real Fresh Coffee Cup with Sunlit Swirling Steam', time: 2.5 },
  { id: 'real-coffee-beans', file: 'coffee-beans-falling.mp4', title: 'Real Roasted Coffee Beans Cascading in Slow Motion', time: 1.5 },
  { id: 'real-iced-coffee-drop', file: 'iced-coffee-ice-drop.mp4', title: 'Real Slow-Motion Ice Drop into Velvet Iced Coffee', time: 2.0 }
];

const html = `<!DOCTYPE html>
<html>
<body>
  <video id="v" muted playsinline></video>
  <canvas id="c"></canvas>
  <script>
    const candidates = ${JSON.stringify(candidateVideos)};
    const v = document.getElementById('v');
    const c = document.getElementById('c');
    const ctx = c.getContext('2d');

    async function processAll() {
      for (let i = 0; i < candidates.length; i++) {
        const item = candidates[i];
        console.log('Processing:', item.file);
        v.src = '/video/' + encodeURIComponent(item.file);
        await new Promise(r => v.onloadedmetadata = r);
        c.width = v.videoWidth;
        c.height = v.videoHeight;
        v.currentTime = Math.min(item.time, Math.max(0.5, v.duration / 2));
        await new Promise(r => v.onseeked = r);
        ctx.drawImage(v, 0, 0, c.width, c.height);
        const data = c.toDataURL('image/jpeg', 0.88);
        await fetch('/save?id=' + item.id + '&w=' + v.videoWidth + '&h=' + v.videoHeight, {
          method: 'POST',
          body: data
        });
      }
      fetch('/done');
    }
    processAll();
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url.startsWith('/video/')) {
    const fileName = decodeURIComponent(req.url.replace('/video/', ''));
    const filePath = path.join(__dirname, 'public', 'videos', fileName);
    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      return res.end();
    }
    const stat = fs.statSync(filePath);
    res.writeHead(200, {
      'Content-Length': stat.size,
      'Content-Type': fileName.endsWith('.webm') ? 'video/webm' : 'video/mp4'
    });
    fs.createReadStream(filePath).pipe(res);
  } else if (req.url.startsWith('/save') && req.method === 'POST') {
    const url = new URL(req.url, 'http://localhost');
    const id = url.searchParams.get('id');
    const w = url.searchParams.get('w');
    const h = url.searchParams.get('h');
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      const b64 = body.replace(/^data:image\/jpeg;base64,/, '');
      const outPath = path.join(outDir, `${id}.jpg`);
      fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
      console.log(`Saved ${id}.jpg (${w}x${h})`);
      res.writeHead(200);
      res.end('ok');
    });
  } else if (req.url === '/done') {
    console.log('All candidates processed');
    res.writeHead(200);
    res.end('ok');
    setTimeout(() => {
      server.close();
      process.exit(0);
    }, 500);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--disable-gpu',
    '--user-data-dir=C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-extract-real',
    `http://127.0.0.1:${PORT}/`
  ]);
});
