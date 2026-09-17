import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'public', 'images');

const bobaImages = {
  'hero-boba.jpg': 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=1800&q=80',
  'boba-tiger.jpg': 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=800&q=80',
};

async function downloadBoba() {
  for (const [filename, url] of Object.entries(bobaImages)) {
    const dest = path.join(targetDir, filename);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(buffer));
      console.log(`✓ Downloaded ${filename} (${buffer.byteLength} bytes)`);
    } catch (err) {
      console.error(`✗ Failed ${filename}:`, err.message);
    }
  }
}

downloadBoba();
