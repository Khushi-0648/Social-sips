import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8992;
const VIDEO_OUTPUT = path.join(__dirname, 'public', 'videos', 'natural-coffee-pour-single.webm');

// Read master image as base64
const imagePath = path.join(__dirname, 'public', 'images', 'story', 'natural-coffee-pour-master.jpg');
if (!fs.existsSync(imagePath)) {
  console.error('Master image not found at', imagePath);
  process.exit(1);
}
const imgBase64 = fs.readFileSync(imagePath).toString('base64');
const imgSrc = `data:image/jpeg;base64,${imgBase64}`;

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Coffee Cinemagraph Generator</title>
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

    // Particles setup
    // Steam particles
    const steamCount = 35;
    const steams = [];
    for (let i = 0; i < steamCount; i++) {
      steams.push({
        x: 650 + Math.random() * 120,
        y: 200 + Math.random() * 220,
        vy: -0.6 - Math.random() * 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        size: 15 + Math.random() * 35,
        alpha: Math.random() * 0.2,
        life: Math.random(),
        seed: Math.random() * 100
      });
    }

    // Sun dust / pollen particles
    const moteCount = 50;
    const motes = [];
    for (let i = 0; i < moteCount; i++) {
      motes.push({
        x: Math.random() * 1376,
        y: Math.random() * 768,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.2 - Math.random() * 0.4,
        size: 1.2 + Math.random() * 2.5,
        alpha: 0.2 + Math.random() * 0.5,
        seed: Math.random() * 50
      });
    }

    // Cream swirl eddies in the coffee glass
    // Cup center ~ x: 720, y: 520, radius ~ 80
    const swirls = [];
    for (let i = 0; i < 25; i++) {
      swirls.push({
        angle: Math.random() * Math.PI * 2,
        radius: 10 + Math.random() * 65,
        speed: 0.01 + Math.random() * 0.02,
        size: 14 + Math.random() * 28,
        opacity: 0.15 + Math.random() * 0.25,
        color: Math.random() > 0.4 ? 'rgba(255, 248, 235, ' : 'rgba(235, 195, 150, '
      });
    }

    img.onload = () => {
      console.log('Image loaded, starting animation & recording...');
      startRecording();
    };

    let startTime = null;
    function render(timestamp) {
      if (!startTime) startTime = timestamp;
      const t = (timestamp - startTime) / 1000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Subtle cinematic Ken Burns drift (smooth loop over 8s)
      const loopDuration = 8;
      const loopPhase = (t % loopDuration) / loopDuration * Math.PI * 2;
      const scale = 1.0 + 0.022 * (0.5 + 0.5 * Math.sin(loopPhase));
      const driftX = 6 * Math.sin(loopPhase);
      const driftY = 3 * Math.cos(loopPhase);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(scale, scale);
      ctx.translate(-canvas.width / 2 + driftX, -canvas.height / 2 + driftY);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.restore();

      // 2. Sunlight Rays shimmer in top-left
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      const sunPhase = Math.sin(t * 1.5) * 0.5 + 0.5;
      const grad = ctx.createRadialGradient(260, 120, 20, 260, 120, 520);
      grad.addColorStop(0, 'rgba(255, 235, 180, ' + (0.18 + sunPhase * 0.08) + ')');
      grad.addColorStop(0.5, 'rgba(240, 190, 110, ' + (0.08 + sunPhase * 0.04) + ')');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(260, 120, 520, 0, Math.PI * 2);
      ctx.fill();

      // Sunbeam angled shafts
      for (let s = 0; s < 4; s++) {
        const rayAngle = 0.65 + s * 0.22 + Math.sin(t * 0.8 + s) * 0.03;
        const rayAlpha = 0.04 + 0.025 * Math.sin(t * 2 + s * 1.5);
        ctx.fillStyle = 'rgba(255, 245, 210, ' + rayAlpha + ')';
        ctx.beginPath();
        ctx.moveTo(260, 100);
        ctx.lineTo(260 + Math.cos(rayAngle - 0.08) * 900, 100 + Math.sin(rayAngle - 0.08) * 900);
        ctx.lineTo(260 + Math.cos(rayAngle + 0.08) * 900, 100 + Math.sin(rayAngle + 0.08) * 900);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // 3. Fluid Milk Pour Dynamics
      // Spout at (808, 115) -> enters cup around (733, 428)
      ctx.save();
      const pourT = t * 20;
      const streamStart = { x: 808, y: 115 };
      const streamEnd = { x: 733, y: 428 };
      const ctrlPoint = { x: 775, y: 250 };

      // Flowing milk highlight waves
      ctx.globalCompositeOperation = 'source-over';
      for (let i = 0; i < 6; i++) {
        const streamProgress = ((t * 2.5 + i / 6) % 1);
        // Quadratic bezier point
        const u = 1 - streamProgress;
        const px = u*u*streamStart.x + 2*u*streamProgress*ctrlPoint.x + streamProgress*streamProgress*streamEnd.x;
        const py = u*u*streamStart.y + 2*u*streamProgress*ctrlPoint.y + streamProgress*streamProgress*streamEnd.y;

        const flowGrad = ctx.createRadialGradient(px, py, 1, px, py, 12);
        flowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
        flowGrad.addColorStop(0.5, 'rgba(255, 250, 240, 0.2)');
        flowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = flowGrad;
        ctx.beginPath();
        ctx.arc(px, py, 12, 0, Math.PI * 2);
        ctx.fill();
      }

      // Milk impact ripples on coffee surface
      const impactX = 733;
      const impactY = 428;
      for (let r = 0; r < 3; r++) {
        const ripplePhase = (t * 2 + r * 0.33) % 1;
        const rx = 8 + ripplePhase * 26;
        const ry = 4 + ripplePhase * 11;
        const rippleAlpha = (1 - ripplePhase) * 0.5;

        ctx.strokeStyle = 'rgba(255, 250, 240, ' + rippleAlpha + ')';
        ctx.lineWidth = 1.8 * (1 - ripplePhase);
        ctx.beginPath();
        ctx.ellipse(impactX, impactY, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Micro splash droplets jumping at impact point
      for (let d = 0; d < 4; d++) {
        const dropCycle = (t * 3.5 + d * 0.25) % 1;
        const dropAngle = -Math.PI * 0.5 + (d - 1.5) * 0.55;
        const dropDist = Math.sin(dropCycle * Math.PI) * 16;
        const dx = impactX + Math.cos(dropAngle) * dropDist;
        const dy = impactY + Math.sin(dropAngle) * dropDist - 6 * dropCycle;
        const dAlpha = Math.sin(dropCycle * Math.PI) * 0.7;

        ctx.fillStyle = 'rgba(255, 255, 255, ' + dAlpha + ')';
        ctx.beginPath();
        ctx.arc(dx, dy, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 4. Swirling Cream Clouds inside the Glass
      ctx.save();
      // Clip inside the cup area approximately
      ctx.beginPath();
      ctx.ellipse(720, 520, 68, 95, 0, 0, Math.PI * 2);
      ctx.clip();

      for (let s of swirls) {
        s.angle += s.speed;
        const sx = 720 + Math.cos(s.angle) * s.radius;
        const sy = 515 + Math.sin(s.angle) * (s.radius * 0.95);
        const pulse = 0.8 + 0.2 * Math.sin(t * 3 + s.angle);

        const swirlGrad = ctx.createRadialGradient(sx, sy, 2, sx, sy, s.size * pulse);
        swirlGrad.addColorStop(0, s.color + (s.opacity * 1.2) + ')');
        swirlGrad.addColorStop(0.6, s.color + (s.opacity * 0.5) + ')');
        swirlGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = swirlGrad;
        ctx.beginPath();
        ctx.arc(sx, sy, s.size * pulse, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 5. Rising Hot Steam wisps
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let st of steams) {
        st.y += st.vy;
        st.x += st.vx + Math.sin(t * 2 + st.seed) * 0.35;
        st.life += 0.008;

        if (st.y < 120 || st.life > 1) {
          st.y = 410 + Math.random() * 20;
          st.x = 680 + Math.random() * 80;
          st.life = 0;
          st.size = 12 + Math.random() * 20;
        }

        const steamAlpha = Math.sin(st.life * Math.PI) * 0.16;
        const currentSize = st.size * (1 + st.life * 1.5);

        const steamGrad = ctx.createRadialGradient(st.x, st.y, 2, st.x, st.y, currentSize);
        steamGrad.addColorStop(0, 'rgba(255, 245, 235, ' + steamAlpha + ')');
        steamGrad.addColorStop(0.5, 'rgba(245, 235, 225, ' + (steamAlpha * 0.4) + ')');
        steamGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = steamGrad;
        ctx.beginPath();
        ctx.arc(st.x, st.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 6. Floating Golden Motes / Sunlit Pollen
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let m of motes) {
        m.y += m.vy;
        m.x += m.vx + Math.sin(t * 1.2 + m.seed) * 0.25;

        if (m.y < 0) {
          m.y = 768;
          m.x = Math.random() * 1376;
        }

        const flicker = 0.5 + 0.5 * Math.sin(t * 4 + m.seed);
        const mAlpha = m.alpha * flicker;

        const moteGrad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.size * 2);
        moteGrad.addColorStop(0, 'rgba(255, 245, 200, ' + mAlpha + ')');
        moteGrad.addColorStop(0.5, 'rgba(240, 192, 112, ' + (mAlpha * 0.4) + ')');
        moteGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = moteGrad;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      requestAnimationFrame(render);
    }

    function startRecording() {
      requestAnimationFrame(render);

      // Start stream recording
      const stream = canvas.captureStream(30);
      const options = { mimeType: 'video/webm;codecs=vp9', videoBitsPerSecond: 8000000 };
      let recorder;
      try {
        recorder = new MediaRecorder(stream, options);
      } catch (e) {
        console.warn('VP9 unsupported, fallback to default webm');
        recorder = new MediaRecorder(stream, { mimeType: 'video/webm', videoBitsPerSecond: 6000000 });
      }

      const chunks = [];
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = async () => {
        console.log('Recording stopped, assembling webm blob...');
        const blob = new Blob(chunks, { type: 'video/webm' });
        console.log('Blob size:', blob.size);

        // Upload to server
        const res = await fetch('/save-video', {
          method: 'POST',
          headers: { 'Content-Type': 'application/octet-stream' },
          body: blob
        });
        const msg = await res.text();
        console.log('Server response:', msg);
        document.body.innerHTML += '<h1 style="color:#0f0">' + msg + '</h1>';
      };

      recorder.start();
      console.log('Recording for 8 seconds...');
      setTimeout(() => {
        recorder.stop();
      }, 8200);
    }
  </script>
</body>
</html>`;

// Create HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.method === 'POST' && req.url === '/save-video') {
    const fileStream = fs.createWriteStream(VIDEO_OUTPUT);
    req.pipe(fileStream);
    fileStream.on('finish', () => {
      const stats = fs.statSync(VIDEO_OUTPUT);
      console.log(`Saved video to ${VIDEO_OUTPUT} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
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
  console.log(`Server listening on port ${PORT}...`);
  // Launch Chrome Headless
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chromeArgs = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--autoplay-policy=no-user-gesture-required',
    `http://localhost:${PORT}`
  ];
  console.log(`Launching Chrome: ${chromePath} ${chromeArgs.join(' ')}`);
  const child = spawn(chromePath, chromeArgs);

  child.on('error', (err) => {
    console.error('Failed to start Chrome:', err);
    server.close();
    process.exit(1);
  });
});
