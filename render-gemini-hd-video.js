import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8996;
const VIDEO_OUTPUT = path.join(__dirname, 'public', 'videos', 'gemini-coffee-hd.webm');

const imagePath = path.join(__dirname, 'public', 'images', 'story', 'gemini-coffee-hd-master.jpg');
if (!fs.existsSync(imagePath)) {
  console.error('HD Master image not found at', imagePath);
  process.exit(1);
}
const imgBase64 = fs.readFileSync(imagePath).toString('base64');
const imgSrc = `data:image/jpeg;base64,${imgBase64}`;

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>HD Slow Motion Coffee Video</title>
  <style>
    body { margin: 0; background: #000; overflow: hidden; }
    canvas { display: block; width: 1376px; height: 768px; }
  </style>
</head>
<body>
  <canvas id="c" width="1376" height="768"></canvas>
  <script>
    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = "${imgSrc}";

    const LOOP_DURATION = 10; // 10 seconds seamless slow-motion cycle

    // Hot steam wisps rising from cup
    // Cup center x ~ 688, y ~ 450
    const STEAM_COUNT = 50;
    const steams = [];
    for (let i = 0; i < STEAM_COUNT; i++) {
      steams.push({
        phase: (i / STEAM_COUNT),
        baseX: 630 + Math.random() * 110,
        driftAmp: 22 + Math.random() * 30,
        freq: 1 + Math.floor(Math.random() * 2),
        baseSize: 18 + Math.random() * 22,
        maxSize: 60 + Math.random() * 40,
        maxAlpha: 0.14 + Math.random() * 0.12,
        seed: Math.random() * 10
      });
    }

    // Micro ambient dust motes
    const MOTE_COUNT = 45;
    const motes = [];
    for (let i = 0; i < MOTE_COUNT; i++) {
      motes.push({
        x: Math.random() * 1376,
        y: Math.random() * 768,
        vy: -0.04 - Math.random() * 0.10,
        size: 0.9 + Math.random() * 2.0,
        baseAlpha: 0.2 + Math.random() * 0.45,
        freq: 1 + Math.floor(Math.random() * 2)
      });
    }

    // Leaf dewdrop specular glints
    const glints = [
      { x: 190, y: 550, size: 2.2, phase: 0.1 },
      { x: 135, y: 640, size: 2.0, phase: 0.4 },
      { x: 112, y: 780, size: 2.4, phase: 0.7 },
      { x: 820, y: 760, size: 2.5, phase: 0.2 },
      { x: 890, y: 540, size: 2.2, phase: 0.8 },
      { x: 670, y: 180, size: 2.6, phase: 0.5 },
      { x: 375, y: 450, size: 2.0, phase: 0.3 }
    ];

    img.onload = () => {
      console.log('HD Image loaded, rendering 10s Full-HD video...');
      startRecording();
    };

    let startTime = null;

    function render(timestamp) {
      if (!startTime) startTime = timestamp;
      const t = ((timestamp - startTime) / 1000) % LOOP_DURATION;
      const normalized = t / LOOP_DURATION;
      const loopAngle = normalized * Math.PI * 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Pristine Base Image with Subtle Cinema Float (Slow Ken Burns)
      const scale = 1.0 + 0.015 * (0.5 + 0.5 * Math.sin(loopAngle));
      const driftX = 3.0 * Math.sin(loopAngle);
      const driftY = 1.5 * Math.cos(loopAngle);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(scale, scale);
      ctx.translate(-canvas.width / 2 + driftX, -canvas.height / 2 + driftY);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.restore();

      // 2. Chiaroscuro Atmospheric Key Light Drift
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      const lightPulse = 0.5 + 0.5 * Math.sin(loopAngle);
      const keyLight = ctx.createRadialGradient(480, 280, 40, 480, 280, 680);
      keyLight.addColorStop(0, 'rgba(255, 240, 210, ' + (0.10 + lightPulse * 0.05) + ')');
      keyLight.addColorStop(0.5, 'rgba(230, 180, 120, ' + (0.04 + lightPulse * 0.03) + ')');
      keyLight.addColorStop(1, 'transparent');
      ctx.fillStyle = keyLight;
      ctx.beginPath();
      ctx.arc(480, 280, 680, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 3. Hot Coffee Steam Wisps in Slow Motion
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let st of steams) {
        const stProgress = ((normalized + st.phase) % 1);
        const stY = 440 - stProgress * 260;
        const sway = Math.sin(loopAngle * st.freq + st.seed) * st.driftAmp * stProgress;
        const stX = st.baseX + sway;

        const currentSize = st.baseSize + (st.maxSize - st.baseSize) * stProgress;
        const stAlpha = Math.sin(stProgress * Math.PI) * st.maxAlpha;

        const steamGrad = ctx.createRadialGradient(stX, stY, 2, stX, stY, currentSize);
        steamGrad.addColorStop(0, 'rgba(255, 248, 238, ' + stAlpha + ')');
        steamGrad.addColorStop(0.4, 'rgba(240, 232, 220, ' + (stAlpha * 0.5) + ')');
        steamGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = steamGrad;
        ctx.beginPath();
        ctx.arc(stX, stY, currentSize, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 4. Subtle Crema Liquid Shimmer (Inside Cup)
      // Cup opening: center (688, 440), rx ~ 110, ry ~ 40
      ctx.save();
      ctx.globalCompositeOperation = 'soft-light';
      const cremaShimmer = Math.sin(loopAngle * 3) * 0.12 + 0.15;
      const cremaGrad = ctx.createRadialGradient(690, 438, 5, 690, 438, 90);
      cremaGrad.addColorStop(0, 'rgba(255, 220, 160, ' + cremaShimmer + ')');
      cremaGrad.addColorStop(0.7, 'rgba(180, 120, 60, ' + (cremaShimmer * 0.5) + ')');
      cremaGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = cremaGrad;
      ctx.beginPath();
      ctx.ellipse(688, 440, 110, 40, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 5. Specular Dewdrop Glints
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let g of glints) {
        const glintCycle = (normalized + g.phase) % 1;
        const glintAlpha = Math.pow(Math.sin(glintCycle * Math.PI), 4) * 0.75;
        if (glintAlpha > 0.05) {
          ctx.fillStyle = 'rgba(255, 255, 255, ' + glintAlpha + ')';
          ctx.beginPath();
          ctx.arc(g.x, g.y, g.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // 6. Slow Floating Golden Motes
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let m of motes) {
        const my = (m.y + normalized * m.vy * 280 + 768) % 768;
        const mx = (m.x + Math.sin(loopAngle * m.freq) * 6 + 1376) % 1376;
        const twinkle = 0.6 + 0.4 * Math.sin(loopAngle * m.freq * 2);
        const mAlpha = m.baseAlpha * twinkle;

        const moteGrad = ctx.createRadialGradient(mx, my, 0, mx, my, m.size * 2);
        moteGrad.addColorStop(0, 'rgba(255, 245, 205, ' + mAlpha + ')');
        moteGrad.addColorStop(0.5, 'rgba(230, 185, 110, ' + (mAlpha * 0.3) + ')');
        moteGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = moteGrad;
        ctx.beginPath();
        ctx.arc(mx, my, m.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      requestAnimationFrame(render);
    }

    function startRecording() {
      requestAnimationFrame(render);

      // Record at 30fps with 12 Mbps ultra-high bitrate for crystal HD quality
      const stream = canvas.captureStream(30);
      const options = { mimeType: 'video/webm;codecs=vp9', videoBitsPerSecond: 12000000 };
      let recorder;
      try {
        recorder = new MediaRecorder(stream, options);
      } catch (e) {
        recorder = new MediaRecorder(stream, { mimeType: 'video/webm', videoBitsPerSecond: 8000000 });
      }

      const chunks = [];
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = async () => {
        console.log('HD recording completed, sending blob...');
        const blob = new Blob(chunks, { type: 'video/webm' });
        console.log('HD Blob size:', blob.size);

        const res = await fetch('/save-video', {
          method: 'POST',
          headers: { 'Content-Type': 'application/octet-stream' },
          body: blob
        });
        const msg = await res.text();
        console.log('Server response:', msg);
      };

      recorder.start();
      console.log('Recording 10s HD video...');
      setTimeout(() => {
        recorder.stop();
      }, (LOOP_DURATION + 0.2) * 1000);
    }
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.method === 'POST' && req.url === '/save-video') {
    const fileStream = fs.createWriteStream(VIDEO_OUTPUT);
    req.pipe(fileStream);
    fileStream.on('finish', () => {
      const stats = fs.statSync(VIDEO_OUTPUT);
      console.log(`Saved HD video to ${VIDEO_OUTPUT} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`SUCCESS: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
      setTimeout(() => {
        server.close();
        process.exit(0);
      }, 1000);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`HD Video Server listening on port ${PORT}...`);
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chromeArgs = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--autoplay-policy=no-user-gesture-required',
    `http://localhost:${PORT}`
  ];
  console.log(`Launching Chrome for HD video recording...`);
  const child = spawn(chromePath, chromeArgs);
  child.on('error', (err) => {
    console.error('Failed to start Chrome:', err);
    server.close();
    process.exit(1);
  });
});
