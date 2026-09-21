import fs from 'fs';
import path from 'path';
import http from 'http';
import { spawn } from 'child_process';

const PORT = 8997;
const VIDEO_PATH = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\social-sips-cafe\\public\\videos\\gemini-user-video-2.mp4';
const OUT_DIR = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a';

const html = `<!DOCTYPE html>
<html>
<body style="background:#000;">
  <video id="v" src="/video.mp4" muted playsinline></video>
  <canvas id="c" width="1280" height="720"></canvas>
  <script>
    const v = document.getElementById('v');
    const c = document.getElementById('c');
    const ctx = c.getContext('2d');

    v.onloadedmetadata = async () => {
      const times = [0.5, 2.0, 4.0, 6.0, 8.0, 9.8];
      for (let i = 0; i < times.length; i++) {
        v.currentTime = times[i];
        await new Promise(r => v.onseeked = r);
        ctx.drawImage(v, 0, 0);
        const data = c.toDataURL('image/jpeg', 0.9);
        await fetch('/save?idx=' + i + '&t=' + times[i], { method: 'POST', body: data });
      }
      fetch('/done');
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
    res.writeHead(200, { 'Content-Type': 'video/mp4', 'Content-Length': stat.size });
    fs.createReadStream(VIDEO_PATH).pipe(res);
  } else if (req.url.startsWith('/save')) {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const params = new URL('http://localhost' + req.url).searchParams;
      const idx = params.get('idx');
      const base64Data = body.replace(/^data:image\/jpeg;base64,/, '');
      fs.writeFileSync(path.join(OUT_DIR, `v2-motion-frame-${idx}.jpg`), Buffer.from(base64Data, 'base64'));
      res.writeHead(200);
      res.end('ok');
    });
  } else if (req.url === '/done') {
    res.writeHead(200);
    res.end('ok');
    setTimeout(() => {
      server.close();
      if (chromeProc) chromeProc.kill();
      process.exit(0);
    }, 1000);
  }
});

server.listen(PORT);
const chromeProc = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `http://localhost:${PORT}/`
]);
