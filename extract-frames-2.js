import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8996;
const VIDEO_PATH = path.join(__dirname, 'public', 'videos', 'gemini-user-video-2.mp4');
const OUT_DIR = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a';

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Inspect Video 2 Frames</title>
</head>
<body style="background:#000; margin:0; display:flex; flex-direction:column; align-items:center;">
  <video id="v" src="/video.mp4" muted playsinline crossOrigin="anonymous"></video>
  <canvas id="c" width="1280" height="720"></canvas>
  <script>
    const v = document.getElementById('v');
    const c = document.getElementById('c');
    const ctx = c.getContext('2d');

    v.onloadedmetadata = async () => {
      console.log('Video loaded: ' + v.videoWidth + 'x' + v.videoHeight + ', duration: ' + v.duration);
      fetch('/log-info?w=' + v.videoWidth + '&h=' + v.videoHeight + '&d=' + v.duration);
      c.width = v.videoWidth;
      c.height = v.videoHeight;

      const timestamps = [1, 2.5, 5, 7.5, 9.5];
      for (let i = 0; i < timestamps.length; i++) {
        v.currentTime = timestamps[i];
        await new Promise(r => v.onseeked = r);
        ctx.drawImage(v, 0, 0);
        const data = c.toDataURL('image/jpeg', 0.95);
        await fetch('/save-frame?idx=' + i + '&t=' + timestamps[i], {
          method: 'POST',
          body: data
        });
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
  } else if (req.url.startsWith('/log-info')) {
    const params = new URL('http://localhost' + req.url).searchParams;
    console.log(`Video metadata: ${params.get('w')}x${params.get('h')}, duration: ${params.get('d')}s`);
    res.writeHead(200);
    res.end('ok');
  } else if (req.url.startsWith('/save-frame')) {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const params = new URL('http://localhost' + req.url).searchParams;
      const idx = params.get('idx');
      const base64Data = body.replace(/^data:image\/jpeg;base64,/, '');
      const outPath = path.join(OUT_DIR, `gemini-video-2-frame-${idx}.jpg`);
      fs.writeFileSync(outPath, Buffer.from(base64Data, 'base64'));
      console.log(`Saved frame ${idx} to ${outPath}`);
      res.writeHead(200);
      res.end('ok');
    });
  } else if (req.url === '/done') {
    res.writeHead(200);
    res.end('ok');
    console.log('Finished extracting frames.');
    setTimeout(() => {
      server.close();
      if (chromeProc) chromeProc.kill();
      process.exit(0);
    }, 1000);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log('Frame extraction server listening on port', PORT);
});

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chromeProc = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `http://localhost:${PORT}/`
]);
