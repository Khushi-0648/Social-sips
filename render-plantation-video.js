import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8976;
const WEBM_OUT = path.join(__dirname, 'public', 'videos', 'plantation-hills-loop.webm');
const MP4_OUT = path.join(__dirname, 'public', 'videos', 'plantation-hills-loop.mp4');
const bgPath = path.join(__dirname, 'public', 'images', 'story', 'plantation-hills-bg.jpg');

const b64 = fs.readFileSync(bgPath).toString('base64');

const html = `<!DOCTYPE html>
<html>
<head>
  <style>body { margin: 0; background: #000; overflow: hidden; } canvas { display: block; width: 1376px; height: 768px; }</style>
</head>
<body>
  <canvas id="c" width="1376" height="768"></canvas>
  <script>
    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = "data:image/jpeg;base64,${b64}";

    const mistLayers = [
      { y: 220, speed: 0.18, scaleY: 60, alpha: 0.14, seed: 1 },
      { y: 280, speed: -0.12, scaleY: 80, alpha: 0.18, seed: 2 },
      { y: 340, speed: 0.15, scaleY: 70, alpha: 0.12, seed: 3 }
    ];

    img.onload = () => {
      startRecording();
    };

    const LOOP_DURATION = 10.0;

    function render(timestamp, t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Ken burns subtle camera drift
      const loopPhase = (t % LOOP_DURATION) / LOOP_DURATION * Math.PI * 2;
      const scale = 1.0 + 0.022 * (0.5 + 0.5 * Math.sin(loopPhase));
      const driftX = 4 * Math.sin(loopPhase);
      const driftY = 2 * Math.cos(loopPhase);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(scale, scale);
      ctx.translate(-canvas.width / 2 + driftX, -canvas.height / 2 + driftY);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Drifting morning valley mist
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      mistLayers.forEach((m, idx) => {
        const flowX = (t * m.speed * 80) % 600;
        const grad = ctx.createLinearGradient(0, m.y - m.scaleY, 0, m.y + m.scaleY);
        const pulse = Math.sin(t * 0.8 + m.seed) * 0.04;
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.5, 'rgba(235, 245, 230, ' + (m.alpha + pulse) + ')');
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.fillRect(0, m.y - m.scaleY, canvas.width, m.scaleY * 2);
      });

      // Morning Sunbeams in top-right
      const sunPhase = Math.sin(t * 1.2) * 0.5 + 0.5;
      const sunGrad = ctx.createRadialGradient(1080, 160, 40, 1080, 160, 650);
      sunGrad.addColorStop(0, 'rgba(255, 245, 200, ' + (0.18 + sunPhase * 0.06) + ')');
      sunGrad.addColorStop(0.5, 'rgba(240, 220, 140, ' + (0.08 + sunPhase * 0.03) + ')');
      sunGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(1080, 160, 650, 0, Math.PI * 2);
      ctx.fill();

      // Angled light rays from top-right down to bottom-left
      for (let s = 0; s < 4; s++) {
        const rayAlpha = 0.03 + 0.02 * Math.sin(t * 1.5 + s * 1.4);
        ctx.fillStyle = 'rgba(255, 250, 225, ' + rayAlpha + ')';
        ctx.beginPath();
        ctx.moveTo(950 + s * 80, 0);
        ctx.lineTo(1150 + s * 90, 0);
        ctx.lineTo(650 + s * 100, 768);
        ctx.lineTo(450 + s * 80, 768);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      ctx.restore(); // end camera
    }

    async function startRecording() {
      const stream = canvas.captureStream(30);
      let mimeType = 'video/webm;codecs=vp9';
      if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = 'video/webm';

      const recorder = new MediaRecorder(stream, {
        mimeType: mimeType,
        videoBitsPerSecond: 12000000
      });

      const chunks = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: mimeType });
        const reader = new FileReader();
        reader.onload = async () => {
          await fetch('/save-webm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/octet-stream' },
            body: reader.result
          });
        };
        reader.readAsArrayBuffer(blob);
      };

      recorder.start();

      let startTime = performance.now();
      let animId;
      function anim(ts) {
        const t = (ts - startTime) / 1000;
        render(ts, t);
        animId = requestAnimationFrame(anim);
      }
      animId = requestAnimationFrame(anim);

      setTimeout(() => {
        recorder.stop();
        cancelAnimationFrame(animId);
      }, 10200);
    }
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url === '/save-webm' && req.method === 'POST') {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      fs.writeFileSync(WEBM_OUT, buffer);
      console.log('Saved plantation video WebM to:', WEBM_OUT, '(' + (buffer.length / 1024 / 1024).toFixed(2) + ' MB)');
      res.writeHead(200);
      res.end('ok');
      server.close();
      process.exit(0);
    });
  }
});

server.listen(PORT, () => {
  spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--disable-gpu',
    '--user-data-dir=C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-plantation-vid',
    `http://127.0.0.1:${PORT}/`
  ]);
});
