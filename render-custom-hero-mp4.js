import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8995;
const VIDEO_OUTPUT = path.join(__dirname, 'public', 'videos', 'custom-hero-coffee.mp4');

const f1Path = path.join(__dirname, 'public', 'images', 'story', 'custom-hero-frame-1.jpg');
const f2Path = path.join(__dirname, 'public', 'images', 'story', 'custom-hero-frame-2.jpg');
const f3Path = path.join(__dirname, 'public', 'images', 'story', 'custom-hero-frame-3.jpg');

const b64_1 = fs.readFileSync(f1Path).toString('base64');
const b64_2 = fs.readFileSync(f2Path).toString('base64');
const b64_3 = fs.readFileSync(f3Path).toString('base64');

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Render Custom Hero Video MP4</title>
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

    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    img1.src = "data:image/jpeg;base64,${b64_1}";
    img2.src = "data:image/jpeg;base64,${b64_2}";
    img3.src = "data:image/jpeg;base64,${b64_3}";

    const steamCount = 45;
    const steams = [];
    for (let i = 0; i < steamCount; i++) {
      steams.push({
        x: 650 + Math.random() * 140,
        y: 380 + Math.random() * 120,
        vy: -0.6 - Math.random() * 0.9,
        vx: (Math.random() - 0.5) * 0.35,
        size: 20 + Math.random() * 45,
        alpha: Math.random() * 0.18,
        life: Math.random(),
        spin: (Math.random() - 0.5) * 0.02,
        angle: Math.random() * Math.PI * 2,
        seed: Math.random() * 100
      });
    }

    const moteCount = 55;
    const motes = [];
    for (let i = 0; i < moteCount; i++) {
      motes.push({
        x: Math.random() * 1376,
        y: Math.random() * 768,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.35,
        size: 1.0 + Math.random() * 2.8,
        alpha: 0.2 + Math.random() * 0.6,
        seed: Math.random() * 50
      });
    }

    let loadedCount = 0;
    function checkLoaded() {
      loadedCount++;
      if (loadedCount === 3) {
        startRecording();
      }
    }
    img1.onload = checkLoaded;
    img2.onload = checkLoaded;
    img3.onload = checkLoaded;

    const LOOP_DURATION = 12.0;

    function getFrameBlend(t) {
      const p = (t % LOOP_DURATION);
      if (p < 3.5) {
        return { base: img1, overlay: null, alpha: 0 };
      } else if (p < 5.0) {
        const factor = (p - 3.5) / 1.5;
        const ease = factor * factor * (3 - 2 * factor);
        return { base: img1, overlay: img2, alpha: ease };
      } else if (p < 7.5) {
        return { base: img2, overlay: null, alpha: 0 };
      } else if (p < 9.0) {
        const factor = (p - 7.5) / 1.5;
        const ease = factor * factor * (3 - 2 * factor);
        return { base: img2, overlay: img3, alpha: ease };
      } else if (p < 10.8) {
        return { base: img3, overlay: null, alpha: 0 };
      } else {
        const factor = (p - 10.8) / 1.2;
        const ease = factor * factor * (3 - 2 * factor);
        return { base: img3, overlay: img1, alpha: ease };
      }
    }

    let startTime = null;
    function render(timestamp) {
      if (!startTime) startTime = timestamp;
      const t = (timestamp - startTime) / 1000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const loopPhase = (t % LOOP_DURATION) / LOOP_DURATION * Math.PI * 2;
      const scale = 1.0 + 0.020 * (0.5 + 0.5 * Math.sin(loopPhase));
      const driftX = 5 * Math.sin(loopPhase);
      const driftY = 2.5 * Math.cos(loopPhase);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(scale, scale);
      ctx.translate(-canvas.width / 2 + driftX, -canvas.height / 2 + driftY);

      const blend = getFrameBlend(t);
      ctx.drawImage(blend.base, 0, 0, canvas.width, canvas.height);
      if (blend.overlay && blend.alpha > 0) {
        ctx.save();
        ctx.globalAlpha = blend.alpha;
        ctx.drawImage(blend.overlay, 0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      const cupCenterX = 712;
      const cupCenterY = 490;

      for (let r = 0; r < 4; r++) {
        const ripplePhase = (t * 1.6 + r * 0.8) % 3.0;
        const radiusX = 15 + ripplePhase * 45;
        const radiusY = radiusX * 0.38;
        const rippleAlpha = Math.max(0, (1 - ripplePhase / 3.0) * 0.14);

        if (rippleAlpha > 0.005) {
          ctx.strokeStyle = 'rgba(255, 245, 220, ' + rippleAlpha + ')';
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.ellipse(cupCenterX, cupCenterY, radiusX, radiusY, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      ctx.restore();

      const isPouring = (t % LOOP_DURATION) < 9.0 || (t % LOOP_DURATION) > 11.2;
      if (isPouring) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        const streamFlow = (t * 320) % 400;
        const grad = ctx.createLinearGradient(705, streamFlow - 60, 715, streamFlow + 60);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.28)');
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.fillRect(706, 0, 10, 420);
        ctx.restore();
      }

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      steams.forEach(s => {
        s.y += s.vy;
        s.x += s.vx + Math.sin(t * 1.5 + s.seed) * 0.35;
        s.size += 0.22;
        s.angle += s.spin;

        const lifeSpan = 320;
        const progress = (450 - s.y) / lifeSpan;

        if (progress > 1.0 || s.y < 80) {
          s.y = 440 + Math.random() * 40;
          s.x = 660 + Math.random() * 110;
          s.size = 18 + Math.random() * 25;
          s.alpha = 0.08 + Math.random() * 0.14;
        }

        const currentAlpha = s.alpha * Math.sin(Math.min(1, Math.max(0, progress)) * Math.PI);
        if (currentAlpha > 0.005) {
          const steamGrad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size);
          steamGrad.addColorStop(0, 'rgba(255, 245, 230, ' + currentAlpha + ')');
          steamGrad.addColorStop(0.6, 'rgba(240, 220, 190, ' + (currentAlpha * 0.4) + ')');
          steamGrad.addColorStop(1, 'transparent');

          ctx.fillStyle = steamGrad;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.restore();

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      const sunPhase = Math.sin(t * 1.2) * 0.5 + 0.5;
      const sunGrad = ctx.createRadialGradient(280, 140, 20, 280, 140, 560);
      sunGrad.addColorStop(0, 'rgba(255, 235, 180, ' + (0.16 + sunPhase * 0.07) + ')');
      sunGrad.addColorStop(0.5, 'rgba(240, 185, 100, ' + (0.07 + sunPhase * 0.03) + ')');
      sunGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(280, 140, 560, 0, Math.PI * 2);
      ctx.fill();

      for (let s = 0; s < 3; s++) {
        const rayAlpha = 0.035 + 0.02 * Math.sin(t * 1.8 + s * 1.6);
        ctx.fillStyle = 'rgba(255, 245, 210, ' + rayAlpha + ')';
        ctx.beginPath();
        ctx.moveTo(220 + s * 70, 0);
        ctx.lineTo(340 + s * 90, 0);
        ctx.lineTo(820 + s * 120, 768);
        ctx.lineTo(660 + s * 100, 768);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      motes.forEach(m => {
        m.x += m.vx;
        m.y += m.vy;
        if (m.y < -10) m.y = 775;
        if (m.x < -10) m.x = 1380;
        if (m.x > 1380) m.x = -10;

        const pulse = Math.sin(t * 2.5 + m.seed) * 0.5 + 0.5;
        const moteAlpha = m.alpha * (0.6 + 0.4 * pulse);

        ctx.fillStyle = 'rgba(255, 235, 185, ' + moteAlpha + ')';
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      ctx.restore();
    }

    async function startRecording() {
      const stream = canvas.captureStream(30);
      let mimeType = 'video/mp4;codecs=avc1';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/mp4';
      }

      const recorder = new MediaRecorder(stream, {
        mimeType: mimeType,
        videoBitsPerSecond: 14000000
      });

      const chunks = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: mimeType });
        const reader = new FileReader();
        reader.onload = async () => {
          const buffer = reader.result;
          await fetch('/save-video', {
            method: 'POST',
            headers: { 'Content-Type': 'application/octet-stream' },
            body: buffer
          });
        };
        reader.readAsArrayBuffer(blob);
      };

      recorder.start();

      let animId;
      function animLoop(timestamp) {
        render(timestamp);
        animId = requestAnimationFrame(animLoop);
      }
      animId = requestAnimationFrame(animLoop);

      setTimeout(() => {
        recorder.stop();
        cancelAnimationFrame(animId);
      }, 12200);
    }
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url === '/save-video' && req.method === 'POST') {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      fs.writeFileSync(VIDEO_OUTPUT, buffer);
      console.log('Saved custom hero video MP4 to:', VIDEO_OUTPUT, '(' + (buffer.length / 1024 / 1024).toFixed(2) + ' MB)');
      res.writeHead(200);
      res.end('ok');
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

server.listen(PORT, async () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`);
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--disable-gpu',
    '--user-data-dir=C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-render-hero-mp4',
    '--window-size=1376,768',
    `http://127.0.0.1:${PORT}/`
  ]);

  chrome.on('exit', () => console.log('Chrome exited'));
});
