import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = __dirname;
const publicDir = path.join(projectRoot, 'public');
const srcDir = path.join(projectRoot, 'src');

function getAllFiles(dir, exts = ['.jsx', '.js', '.html', '.css', '.json']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        results = results.concat(getAllFiles(fullPath, exts));
      }
    } else {
      if (exts.includes(path.extname(file))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const files = [...getAllFiles(srcDir), path.join(projectRoot, 'index.html')];

// Regex patterns to find media references
const mediaPatterns = [
  /['"](\/(?:images|videos)\/[^'"\s\)\>]+)['"]/g,
  /src=['"]([^'"]+)['"]/g,
  /poster=['"]([^'"]+)['"]/g,
  /url\(['"]?(\/(?:images|videos)\/[^'"\s\)]+)['"]?\)/g
];

const mediaExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.mp4', '.webm', '.gif', '.ico'];

const foundReferences = new Map();

files.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relPath = path.relative(projectRoot, filePath);

  // Check each pattern
  mediaPatterns.forEach(regex => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      const ref = match[1];
      // Filter to media files
      const ext = path.extname(ref.split('?')[0]).toLowerCase();
      if (mediaExtensions.includes(ext) || ref.startsWith('/images/') || ref.startsWith('/videos/')) {
        if (!foundReferences.has(ref)) {
          foundReferences.set(ref, new Set());
        }
        foundReferences.get(ref).add(relPath);
      }
    }
  });
});

console.log('=== STATIC CODEBASE MEDIA AUDIT ===');
console.log(`Scanned ${files.length} source files.`);
console.log(`Found ${foundReferences.size} unique media file references.\n`);

const images = [];
const videos = [];
const external = [];
const missing = [];

for (const [ref, sourceFiles] of foundReferences.entries()) {
  const isHttp = ref.startsWith('http://') || ref.startsWith('https://');
  const isVideo = ref.endsWith('.mp4') || ref.endsWith('.webm') || ref.includes('/videos/');
  
  if (isHttp) {
    external.push({ ref, sources: Array.from(sourceFiles) });
    continue;
  }

  // Resolve on disk
  const diskPath = path.join(publicDir, ref.startsWith('/') ? ref.slice(1) : ref);
  const exists = fs.existsSync(diskPath);
  let sizeBytes = 0;
  if (exists) {
    sizeBytes = fs.statSync(diskPath).size;
  } else {
    missing.push({ ref, diskPath, sources: Array.from(sourceFiles) });
  }

  const record = {
    ref,
    exists,
    sizeKb: (sizeBytes / 1024).toFixed(1),
    sources: Array.from(sourceFiles)
  };

  if (isVideo) {
    videos.push(record);
  } else {
    images.push(record);
  }
}

console.log('--- SUMMARY ---');
console.log(`Local Images Found: ${images.length}`);
console.log(`Local Videos Found: ${videos.length}`);
console.log(`External Media URLs: ${external.length}`);
console.log(`Missing Files (404 on disk): ${missing.length}`);

if (external.length > 0) {
  console.log('\n[WARNING] External URLs found:', external);
}

if (missing.length > 0) {
  console.log('\n[ERROR] Missing Files:', missing);
} else {
  console.log('\n[PASS] All referenced images and videos exist on local disk!');
}

console.log('\n--- DETAILED IMAGE LIST (SAMPLE) ---');
images.slice(0, 15).forEach(img => {
  console.log(`✓ [${img.sizeKb} KB] ${img.ref} (used in ${img.sources.join(', ')})`);
});
if (images.length > 15) console.log(`... and ${images.length - 15} more images.`);

console.log('\n--- DETAILED VIDEO LIST ---');
videos.forEach(vid => {
  console.log(`✓ [${(parseFloat(vid.sizeKb) / 1024).toFixed(2)} MB] ${vid.ref} (used in ${vid.sources.join(', ')})`);
});
