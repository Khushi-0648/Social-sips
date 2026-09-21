import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8997;
const VIDEO_PATH = path.join(__dirname, 'public', 'videos', 'custom-hero-coffee.mp4');
const outDir = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a';

const html = `<!DOCTYPE html>
<html>
<body>
  <video id="v" src="/video.mp4" muted autoplay playsinline></video>
  <canvas id="c" width="1376" height="768"></canvas>
  <script>
    const v = document.getElementById('v');
    const c = document.getElementById('c');
    const ctx = c.getContext('2d');

    v.onplay = () => {
      console.log('Video started playing');
      const captureTimes = [1.0, 4.2, 6.5, 9.5];
      let currentIdx = 0;

      function check() {
        if (currentIdx < captureTimes.length) {
          if (v.currentTime >= captureTimes[currentIdx]) {
            ctx.drawImage(v, 0, 0, c.width, c.height);
            const data = c.toDataURL('image/jpeg', 0.9);
            fetch('/frame?idx=' + currentIdx, { method: 'POST', body: data });
            currentIdx++;
          }
          requestAnimationFrame(check);
        } else {
          fetch('/done');
        }
      }
      requestAnimationFrame(check);
    };
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url === '/video.mp4') {
    const stat = fs.statSync(VIDEO_PATH);
    res.writeHead(200, {
      'Content-Length': stat.size,
      'Content-Type': 'video/mp4'
    });
    fs.createReadStream(VIDEO_PATH).pipe(res);
  } else if (req.url.startsWith('/frame') && req.method === 'POST') {
    const idx = new URL(req.url, 'http://localhost').searchParams.get('idx');
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      const b64 = body.replace(/^data:image\/jpeg;base64,/, '');
      const outPath = path.join(outDir, `custom-play-frame-${idx}.jpg`);
      fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
      console.log('Saved play frame:', outPath);
      res.writeHead(200);
      res.end('ok');
    });
  } else if (req.url === '/done') {
    console.log('All frames captured during sequential playback');
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
    '--user-data-dir=C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-play-custom',
    `http://127.0.0.1:${PORT}/`
  ]);
});
