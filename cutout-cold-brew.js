import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8977;
const imgSource = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\hero_cold_brew_1790010173554.jpg';
const outPng = path.join(__dirname, 'public', 'images', 'story', 'hero-cold-brew-cutout.png');
const outJpg = path.join(__dirname, 'public', 'images', 'story', 'hero-cold-brew-product.jpg');

// Also copy original to public/images/story/
fs.copyFileSync(imgSource, outJpg);

const imgBase64 = fs.readFileSync(imgSource).toString('base64');

const html = `<!DOCTYPE html>
<html><body>
<canvas id="c"></canvas>
<script>
  const img = new Image();
  img.src = 'data:image/jpeg;base64,${imgBase64}';
  img.onload = () => {
    const c = document.getElementById('c');
    c.width = img.width;
    c.height = img.height;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const imgData = ctx.getImageData(0, 0, c.width, c.height);
    const data = imgData.data;

    // Glass bounding box ~ x: 240 to 650, y: 130 to 860
    // Wooden base ~ x: 80 to 810, y: 720 to 870
    // Background is dark gradient around the subject
    for (let y = 0; y < c.height; y++) {
      for (let x = 0; x < c.width; x++) {
        const idx = (y * c.width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;

        // Is it inside the subject bounds?
        const isSubject = (x >= 230 && x <= 660 && y >= 130 && y <= 770) || // glass
                          (x >= 85 && x <= 810 && y >= 720 && y <= 880);   // wood base

        if (!isSubject) {
          // Fade out background
          const distToLeft = Math.max(0, 230 - x);
          const distToRight = Math.max(0, x - 660);
          const distToTop = Math.max(0, 130 - y);
          const distToBottom = Math.max(0, y - 880);
          const dist = Math.sqrt(distToLeft*distToLeft + distToRight*distToRight + distToTop*distToTop + distToBottom*distToBottom);
          
          if (dist > 40) {
            data[idx + 3] = 0; // fully transparent
          } else {
            const alpha = 1 - (dist / 40);
            data[idx + 3] = Math.round(alpha * 255);
          }
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
    const pngData = c.toDataURL('image/png');
    fetch('/save', { method: 'POST', body: pngData });
  };
</script>
</body></html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url === '/save' && req.method === 'POST') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      const b64 = body.replace(/^data:image\/png;base64,/, '');
      fs.writeFileSync(outPng, Buffer.from(b64, 'base64'));
      console.log('Saved transparent cutout to:', outPng);
      res.end('ok');
      server.close();
      process.exit(0);
    });
  }
});

server.listen(PORT, () => {
  spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new', '--disable-gpu', '--user-data-dir=C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-cutout', `http://127.0.0.1:${PORT}/`
  ]);
});
