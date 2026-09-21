import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8991;
const VIDEO_IN = path.join(__dirname, 'public', 'videos', 'gemini-user-video-3.mp4');
const WEBM_OUT = path.join(__dirname, 'public', 'videos', 'gemini-user-video-3.webm');
const POSTER_OUT = path.join(__dirname, 'public', 'images', 'story', 'gemini-video-3-poster.jpg');

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Render Video 3 HD</title>
  <style>body { margin: 0; background: #000; overflow: hidden; }</style>
</head>
<body>
  <video id="v" src="/video.mp4" muted playsinline></video>
  <canvas id="c" width="1280" height="720"></canvas>
  <script>
    const v = document.getElementById('v');
    const c = document.getElementById('c');
    const ctx = c.getContext('2d');

    v.onloadedmetadata = () => {
      console.log('Video 3 loaded: ' + v.videoWidth + 'x' + v.videoHeight + ', duration: ' + v.duration);
      c.width = v.videoWidth;
      c.height = v.videoHeight;
      startProcessing();
    };

    async function startProcessing() {
      // 1. Capture poster frame at 1.8s (creamer pitcher pouring milk into cup)
      v.currentTime = 1.8;
      await new Promise(r => v.onseeked = r);
      ctx.filter = 'contrast(1.06) saturate(1.08) brightness(1.02)';
      ctx.drawImage(v, 0, 0, c.width, c.height);
      const posterData = c.toDataURL('image/jpeg', 0.95);
      await fetch('/save-poster', { method: 'POST', body: posterData });

      // 2. Prepare MediaRecorder at 12 Mbps
      const stream = c.captureStream(30);
      let mimeType = 'video/webm;codecs=vp9';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm';
      }

      const recorder = new MediaRecorder(stream, {
        mimeType: mimeType,
        videoBitsPerSecond: 12000000 // 12 Mbps high quality
      });

      const chunks = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = async () => {
        console.log('Recorder stopped. Sending chunks...');
        const blob = new Blob(chunks, { type: 'video/webm' });
        const arrayBuf = await blob.arrayBuffer();
        await fetch('/save-webm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/octet-stream' },
          body: arrayBuf
        });
        fetch('/done');
      };

      v.currentTime = 0;
      await new Promise(r => v.onseeked = r);
      recorder.start(100);
      v.play();

      function drawLoop() {
        if (v.ended || v.currentTime >= v.duration - 0.1) {
          recorder.stop();
          return;
        }
        ctx.filter = 'contrast(1.06) saturate(1.08) brightness(1.02)';
        ctx.drawImage(v, 0, 0, c.width, c.height);
        requestAnimationFrame(drawLoop);
      }
      requestAnimationFrame(drawLoop);
    }
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url === '/video.mp4') {
    const stat = fs.statSync(VIDEO_IN);
    res.writeHead(200, { 'Content-Type': 'video/mp4', 'Content-Length': stat.size });
    fs.createReadStream(VIDEO_IN).pipe(res);
  } else if (req.url === '/save-poster') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      const b64 = body.replace(/^data:image\/jpeg;base64,/, '');
      fs.writeFileSync(POSTER_OUT, Buffer.from(b64, 'base64'));
      console.log('Saved poster to', POSTER_OUT);
      res.writeHead(200);
      res.end('ok');
    });
  } else if (req.url === '/save-webm') {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => {
      const buf = Buffer.concat(chunks);
      fs.writeFileSync(WEBM_OUT, buf);
      console.log('Saved HD WebM video to', WEBM_OUT, 'bytes:', buf.length);
      res.writeHead(200);
      res.end('ok');
    });
  } else if (req.url === '/done') {
    res.writeHead(200);
    res.end('ok');
    console.log('Finished rendering Video 3 HD!');
    setTimeout(() => {
      server.close();
      if (chromeProc) chromeProc.kill();
      process.exit(0);
    }, 1000);
  }
});

server.listen(PORT, () => console.log('Encoding server 3 listening on port', PORT));

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chromeProc = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--autoplay-policy=no-user-gesture-required',
  `http://localhost:${PORT}/`
]);
