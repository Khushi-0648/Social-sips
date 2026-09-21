import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8993;
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
  <title>Slow Motion Coffee Cinemagraph</title>
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

    // --- 1. Realistic Slow-Motion Steam Particles ---
    const STEAM_COUNT = 45;
    const steams = [];
    for (let i = 0; i < STEAM_COUNT; i++) {
      steams.push({
        phase: (i / STEAM_COUNT), // Normalized 0..1 lifecycle offset
        baseX: 680 + (Math.random() * 80),
        driftAmp: 18 + Math.random() * 25,
        freq: 1 + Math.floor(Math.random() * 2),
        speed: 0.08 + Math.random() * 0.04, // Very slow vertical drift
        baseSize: 22 + Math.random() * 25,
        maxSize: 65 + Math.random() * 45,
        maxAlpha: 0.13 + Math.random() * 0.10,
        seed: Math.random() * 10
      });
    }

    // --- 2. Realistic Slow-Motion Cream Billow Vortexes (Inside Glass) ---
    // Glass coffee boundary: x ~ 640..810, y ~ 430..635
    const VORTEX_COUNT = 42;
    const vortices = [];
    for (let i = 0; i < VORTEX_COUNT; i++) {
      const isLeft = i % 2 === 0;
      vortices.push({
        isLeft: isLeft,
        phase: (i / VORTEX_COUNT),
        // Plume descends down center then curls to the left or right
        centerX: isLeft ? 685 : 765,
        centerY: 505 + (Math.random() * 85),
        radiusX: 18 + Math.random() * 45,
        radiusY: 12 + Math.random() * 32,
        rotSpeed: (isLeft ? -1 : 1) * (0.15 + Math.random() * 0.2), // Slow organic rotation
        size: 20 + Math.random() * 32,
        maxAlpha: 0.22 + Math.random() * 0.18,
        warmth: Math.random() // Mix of white cream & caramel espresso crema
      });
    }

    // --- 3. Slow-Motion Airborne Pollen & Sunlit Dust Motes ---
    const MOTE_COUNT = 55;
    const motes = [];
    for (let i = 0; i < MOTE_COUNT; i++) {
      motes.push({
        x: Math.random() * 1376,
        y: Math.random() * 768,
        vx: (Math.random() - 0.5) * 0.08, // Slow float
        vy: -0.05 - Math.random() * 0.12,
        size: 1.0 + Math.random() * 2.2,
        baseAlpha: 0.2 + Math.random() * 0.5,
        freq: 1 + Math.floor(Math.random() * 3)
      });
    }

    // --- 4. Slow-Motion Surface Waves on Coffee Surface ---
    const RIPPLE_COUNT = 4;

    img.onload = () => {
      console.log('Image loaded, starting slow-motion recording...');
      startRecording();
    };

    let startTime = null;

    function renderFrame(timestamp) {
      if (!startTime) startTime = timestamp;
      const t = ((timestamp - startTime) / 1000) % LOOP_DURATION;
      const normalizedLoop = t / LOOP_DURATION; // 0 to 1
      const loopAngle = normalizedLoop * Math.PI * 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- LAYER 1: Subtle Ultra-Smooth Cinematic Camera Float (Slow Ken Burns) ---
      // Barely perceptible slow breathing: scale 1.000 to 1.018, tiny float
      const slowScale = 1.0 + 0.016 * (0.5 + 0.5 * Math.sin(loopAngle));
      const driftX = 3.5 * Math.sin(loopAngle);
      const driftY = 2.0 * Math.cos(loopAngle);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(slowScale, slowScale);
      ctx.translate(-canvas.width / 2 + driftX, -canvas.height / 2 + driftY);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.restore();

      // --- LAYER 2: Slow-Breathing Sunbeams Through Tree Foliage (Top-Left) ---
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      // Slow breathing cycle
      const sunPulse = 0.5 + 0.5 * Math.sin(loopAngle);
      const sunCenterX = 250 + 8 * Math.sin(loopAngle);
      const sunCenterY = 110 + 5 * Math.cos(loopAngle);

      // Ambient warm radial sun halo
      const sunHalo = ctx.createRadialGradient(sunCenterX, sunCenterY, 30, sunCenterX, sunCenterY, 560);
      sunHalo.addColorStop(0, 'rgba(255, 235, 185, ' + (0.16 + sunPulse * 0.07) + ')');
      sunHalo.addColorStop(0.4, 'rgba(245, 195, 120, ' + (0.07 + sunPulse * 0.04) + ')');
      sunHalo.addColorStop(1, 'transparent');
      ctx.fillStyle = sunHalo;
      ctx.beginPath();
      ctx.arc(sunCenterX, sunCenterY, 560, 0, Math.PI * 2);
      ctx.fill();

      // Soft sun shafts drifting like morning breeze through leaves
      for (let s = 0; s < 5; s++) {
        const rayAngle = 0.60 + s * 0.18 + 0.02 * Math.sin(loopAngle + s * 1.2);
        const rayAlpha = 0.035 + 0.022 * Math.sin(loopAngle * 2 + s * 1.5);
        ctx.fillStyle = 'rgba(255, 245, 215, ' + rayAlpha + ')';
        ctx.beginPath();
        ctx.moveTo(sunCenterX, sunCenterY);
        ctx.lineTo(sunCenterX + Math.cos(rayAngle - 0.07) * 980, sunCenterY + Math.sin(rayAngle - 0.07) * 980);
        ctx.lineTo(sunCenterX + Math.cos(rayAngle + 0.07) * 980, sunCenterY + Math.sin(rayAngle + 0.07) * 980);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // --- LAYER 3: Photorealistic Slow-Motion Milk Stream Dynamics ---
      // Curve points: Spout (812, 115) -> Control1 (788, 235) -> Control2 (758, 340) -> Impact (734, 430)
      ctx.save();
      const p0 = { x: 812, y: 115 };
      const p1 = { x: 788, y: 235 };
      const p2 = { x: 758, y: 340 };
      const p3 = { x: 734, y: 430 };

      // Helper function for cubic Bezier point
      function getCubicBezier(u) {
        const oneMinusU = 1 - u;
        const u2 = u * u;
        const u3 = u2 * u;
        const o2 = oneMinusU * oneMinusU;
        const o3 = o2 * oneMinusU;
        return {
          x: o3 * p0.x + 3 * o2 * u * p1.x + 3 * oneMinusU * u2 * p2.x + u3 * p3.x,
          y: o3 * p0.y + 3 * o2 * u * p1.y + 3 * oneMinusU * u2 * p2.y + u3 * p3.y
        };
      }

      // Elongated slow-motion specular gloss bands flowing down the milk cylinder
      // Slow travel speed: completes full descent in 3.33 seconds (exact 3 cycles in 10s loop)
      const streamSpeedCycles = 3;
      ctx.globalCompositeOperation = 'source-over';
      for (let g = 0; g < 7; g++) {
        const progress = ((normalizedLoop * streamSpeedCycles + g / 7) % 1);
        const pt = getCubicBezier(progress);

        // Width tapers naturally from 22px at spout to 14px near cup
        const streamWidth = 20 - progress * 7;
        
        // Specular gloss pulse
        const glossGrad = ctx.createRadialGradient(pt.x, pt.y, 1, pt.x, pt.y, streamWidth * 0.9);
        glossGrad.addColorStop(0, 'rgba(255, 255, 255, 0.40)');
        glossGrad.addColorStop(0.4, 'rgba(255, 252, 245, 0.20)');
        glossGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = glossGrad;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, streamWidth * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }

      // Delicate micro capillary waves along the milk stream edges
      for (let w = 0; w < 12; w++) {
        const u = ((normalizedLoop * streamSpeedCycles + w / 12) % 1);
        const pt = getCubicBezier(u);
        const waveOsc = Math.sin(loopAngle * 3 + u * 15) * 1.2;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
        ctx.beginPath();
        ctx.arc(pt.x + waveOsc, pt.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // --- LAYER 4: Photorealistic Slow-Motion Surface Impact & Concentric Rings ---
      // Impact point: (734, 430) on coffee liquid surface
      ctx.save();
      const impactX = 734;
      const impactY = 430;

      // Slow-motion concentric ripples: 2 cycles across 10s loop (smooth and silky)
      const rippleCycles = 2;
      for (let r = 0; r < RIPPLE_COUNT; r++) {
        const rPhase = ((normalizedLoop * rippleCycles + r / RIPPLE_COUNT) % 1);
        const rx = 6 + rPhase * 36;
        const ry = 2.5 + rPhase * 13;
        const rAlpha = Math.sin(rPhase * Math.PI) * 0.42;

        // Soft milky ripple crest
        ctx.strokeStyle = 'rgba(255, 248, 235, ' + rAlpha + ')';
        ctx.lineWidth = 1.4 * (1 - rPhase * 0.5);
        ctx.beginPath();
        ctx.ellipse(impactX, impactY, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Subtle shaded trough behind ripple for 3D liquid depth
        ctx.strokeStyle = 'rgba(120, 70, 30, ' + (rAlpha * 0.25) + ')';
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.ellipse(impactX, impactY + 1.2, rx * 0.95, ry * 0.95, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Slow-motion milk crown micro-droplet suspension
      // 3 droplets moving in slow gravitational arcs
      for (let d = 0; d < 3; d++) {
        const dCycle = ((normalizedLoop * 3 + d * 0.333) % 1);
        // Parabolic slow-motion arc: rise then gentle fall
        const dAngle = -Math.PI * 0.5 + (d - 1) * 0.52;
        const arcProgress = Math.sin(dCycle * Math.PI);
        const dropDist = arcProgress * 14;
        const dx = impactX + Math.cos(dAngle) * dropDist;
        const dy = impactY + Math.sin(dAngle) * dropDist * 0.5 - 7 * arcProgress;
        const dropAlpha = arcProgress * 0.65;

        // Drop specular shine
        ctx.fillStyle = 'rgba(255, 255, 255, ' + dropAlpha + ')';
        ctx.beginPath();
        ctx.arc(dx, dy, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // --- LAYER 5: Hyper-Realistic Slow-Motion Cream Plumes & Swirls (Inside Cup) ---
      ctx.save();
      // Clip precisely to the inner coffee liquid volume inside the glass
      ctx.beginPath();
      // Coffee meniscus at top: (648, 428) to (805, 428)
      // Glass walls taper slightly down to (665, 630) and (785, 630)
      ctx.moveTo(648, 428);
      ctx.quadraticCurveTo(725, 432, 805, 428);
      ctx.quadraticCurveTo(800, 540, 785, 630);
      ctx.quadraticCurveTo(725, 636, 665, 630);
      ctx.quadraticCurveTo(650, 540, 648, 428);
      ctx.closePath();
      ctx.clip();

      // Slow descending central plume stream (Rayleigh-Taylor instability)
      const centralPlumeSpeed = 2; // 2 cycles in 10 seconds
      for (let cp = 0; cp < 6; cp++) {
        const cpProgress = ((normalizedLoop * centralPlumeSpeed + cp / 6) % 1);
        const cpx = impactX + Math.sin(loopAngle * 2 + cp) * 4;
        const cpy = impactY + 10 + cpProgress * 140;
        const cpSize = 12 + cpProgress * 22;
        const cpAlpha = Math.sin(cpProgress * Math.PI) * 0.32;

        const cpGrad = ctx.createRadialGradient(cpx, cpy, 2, cpx, cpy, cpSize);
        cpGrad.addColorStop(0, 'rgba(255, 250, 240, ' + cpAlpha + ')');
        cpGrad.addColorStop(0.5, 'rgba(240, 210, 170, ' + (cpAlpha * 0.7) + ')');
        cpGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = cpGrad;
        ctx.beginPath();
        ctx.arc(cpx, cpy, cpSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Toroidal curling vortex clouds (slow-motion cauliflower plumes)
      for (let v of vortices) {
        const vTime = ((normalizedLoop + v.phase) % 1) * Math.PI * 2;
        // Slow organic orbit
        const currentAngle = vTime * v.rotSpeed * 2;
        const vx = v.centerX + Math.cos(currentAngle) * v.radiusX;
        const vy = v.centerY + Math.sin(currentAngle) * v.radiusY;

        // Slow breathing alpha
        const vAlpha = v.maxAlpha * (0.6 + 0.4 * Math.sin(vTime));
        const vSize = v.size * (0.85 + 0.15 * Math.cos(vTime));

        const vGrad = ctx.createRadialGradient(vx, vy, 1, vx, vy, vSize);
        if (v.warmth > 0.45) {
          // Pure velvety cream white
          vGrad.addColorStop(0, 'rgba(255, 252, 246, ' + vAlpha + ')');
          vGrad.addColorStop(0.5, 'rgba(250, 235, 215, ' + (vAlpha * 0.6) + ')');
          vGrad.addColorStop(1, 'transparent');
        } else {
          // Golden caramel crema blend
          vGrad.addColorStop(0, 'rgba(242, 205, 155, ' + vAlpha + ')');
          vGrad.addColorStop(0.6, 'rgba(200, 150, 95, ' + (vAlpha * 0.45) + ')');
          vGrad.addColorStop(1, 'transparent');
        }

        ctx.fillStyle = vGrad;
        ctx.beginPath();
        ctx.arc(vx, vy, vSize, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // --- LAYER 6: Realistic Slow-Motion Hot Coffee Steam Plumes ---
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let st of steams) {
        // Continuous seamless lifecycle
        const stProgress = ((normalizedLoop + st.phase) % 1);
        // Very gentle, slow vertical ascent
        const stY = 425 - stProgress * 250;
        // Natural harmonic sway left and right
        const sway = Math.sin(loopAngle * st.freq + st.seed) * st.driftAmp * stProgress;
        const stX = st.baseX + sway;

        // Volumetric growth: steam expands as it rises into cool morning air
        const stCurrentSize = st.baseSize + (st.maxSize - st.baseSize) * stProgress;
        // Alpha rises smoothly then fades out near top
        const stAlpha = Math.sin(stProgress * Math.PI) * st.maxAlpha;

        const steamGrad = ctx.createRadialGradient(stX, stY, 2, stX, stY, stCurrentSize);
        steamGrad.addColorStop(0, 'rgba(255, 248, 238, ' + stAlpha + ')');
        steamGrad.addColorStop(0.4, 'rgba(245, 238, 228, ' + (stAlpha * 0.5) + ')');
        steamGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = steamGrad;
        ctx.beginPath();
        ctx.arc(stX, stY, stCurrentSize, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // --- LAYER 7: Slow-Motion Floating Sunlit Motes / Golden Pollen ---
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let m of motes) {
        // Slow continuous float
        const my = (m.y + normalizedLoop * m.vy * 300 + 768) % 768;
        const mx = (m.x + Math.sin(loopAngle * m.freq) * 8 + 1376) % 1376;

        // Slow soft twinkle
        const twinkle = 0.6 + 0.4 * Math.sin(loopAngle * m.freq * 2);
        const mAlpha = m.baseAlpha * twinkle;

        const moteGrad = ctx.createRadialGradient(mx, my, 0, mx, my, m.size * 2);
        moteGrad.addColorStop(0, 'rgba(255, 248, 210, ' + mAlpha + ')');
        moteGrad.addColorStop(0.5, 'rgba(240, 192, 112, ' + (mAlpha * 0.35) + ')');
        moteGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = moteGrad;
        ctx.beginPath();
        ctx.arc(mx, my, m.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      requestAnimationFrame(renderFrame);
    }

    function startRecording() {
      requestAnimationFrame(renderFrame);

      // Record at high quality 30fps with 10 Mbps bitrate for pristine slow-motion
      const stream = canvas.captureStream(30);
      const options = { mimeType: 'video/webm;codecs=vp9', videoBitsPerSecond: 10000000 };
      let recorder;
      try {
        recorder = new MediaRecorder(stream, options);
      } catch (e) {
        console.warn('VP9 unsupported, fallback to default webm');
        recorder = new MediaRecorder(stream, { mimeType: 'video/webm', videoBitsPerSecond: 8000000 });
      }

      const chunks = [];
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = async () => {
        console.log('Recording finished, sending 10s slow-motion video...');
        const blob = new Blob(chunks, { type: 'video/webm' });
        console.log('Blob size:', blob.size);

        const res = await fetch('/save-video', {
          method: 'POST',
          headers: { 'Content-Type': 'application/octet-stream' },
          body: blob
        });
        const msg = await res.text();
        console.log('Server response:', msg);
      };

      recorder.start();
      console.log('Recording 10 seconds of cinematic slow motion...');
      setTimeout(() => {
        recorder.stop();
      }, (LOOP_DURATION + 0.2) * 1000);
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
      console.log(`Saved slow-motion video to ${VIDEO_OUTPUT} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
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
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chromeArgs = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--autoplay-policy=no-user-gesture-required',
    `http://localhost:${PORT}`
  ];
  console.log(`Launching Chrome: ${chromePath}`);
  const child = spawn(chromePath, chromeArgs);

  child.on('error', (err) => {
    console.error('Failed to start Chrome:', err);
    server.close();
    process.exit(1);
  });
});
