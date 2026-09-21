import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const profileDir = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-full-audit';

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function getTabs(port) {
  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${port}/json`, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

async function auditMobile() {
  const port = 9335;
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--user-data-dir=${profileDir}`,
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    'about:blank'
  ]);

  await wait(2200);
  const tabs = await getTabs(port);
  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  return new Promise((resolve, reject) => {
    let msgId = 1;
    const send = (method, params = {}) => ws.send(JSON.stringify({ id: msgId++, method, params }));

    ws.onopen = () => {
      send('Page.enable');
      send('Runtime.enable');
      send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });
      send('Page.navigate', { url: 'http://localhost:5173/' });
    };

    ws.onmessage = async (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 4) { // Page navigated
        await wait(3000);

        // Run thorough audit
        send('Runtime.evaluate', {
          expression: `(() => {
            const results = {
              windowInnerWidth: window.innerWidth,
              bodyScrollWidth: document.body.scrollWidth,
              hasHorizontalOverflow: document.body.scrollWidth > window.innerWidth,
              overflowingElements: [],
              images: [],
              videos: [],
              sections: []
            };

            // Check elements exceeding viewport width
            document.querySelectorAll('*').forEach(el => {
              const rect = el.getBoundingClientRect();
              if (rect.right > window.innerWidth + 2 && !el.closest('.overflow-x-auto') && !el.closest('svg')) {
                results.overflowingElements.push({
                  tag: el.tagName,
                  id: el.id,
                  className: (el.className || '').toString().slice(0, 50),
                  rectRight: rect.right
                });
              }
            });

            // Audit all images
            document.querySelectorAll('img').forEach(img => {
              results.images.push({
                src: img.src,
                isLocal: img.src.startsWith('http://localhost:5173/') || img.src.startsWith('/'),
                complete: img.complete,
                naturalWidth: img.naturalWidth,
                alt: img.alt
              });
            });

            // Audit all videos
            document.querySelectorAll('video').forEach(v => {
              const sources = Array.from(v.querySelectorAll('source')).map(s => s.src);
              results.videos.push({
                currentSrc: v.currentSrc,
                sources: sources,
                paused: v.paused,
                currentTime: v.currentTime,
                videoWidth: v.videoWidth,
                videoHeight: v.videoHeight
              });
            });

            // Audit sections
            document.querySelectorAll('section').forEach(s => {
              results.sections.push({
                id: s.id,
                clientHeight: s.clientHeight,
                clientWidth: s.clientWidth
              });
            });

            return results;
          })()`,
          returnByValue: true
        });
      }

      if (msg.result?.result?.value) {
        const audit = msg.result.result.value;
        console.log('=== MOBILE AUDIT RESULTS ===');
        console.log('Window width:', audit.windowInnerWidth);
        console.log('Body scroll width:', audit.bodyScrollWidth);
        console.log('Has horizontal overflow:', audit.hasHorizontalOverflow);
        console.log('Number of overflowing elements:', audit.overflowingElements.length);
        if (audit.overflowingElements.length > 0) {
          console.log('Overflow elements sample:', audit.overflowingElements.slice(0, 5));
        }

        console.log('\n--- IMAGES AUDIT ---');
        console.log('Total images:', audit.images.length);
        const externalImages = audit.images.filter(i => !i.isLocal);
        const brokenImages = audit.images.filter(i => i.complete && i.naturalWidth === 0);
        console.log('External images:', externalImages.length);
        console.log('Broken images:', brokenImages.length);
        if (brokenImages.length > 0) {
          console.log('Broken images list:', brokenImages);
        }

        console.log('\n--- VIDEOS AUDIT ---');
        console.log('Total videos:', audit.videos.length);
        audit.videos.forEach((v, idx) => {
          console.log(`Video #${idx + 1}: src=${v.currentSrc || v.sources[0]} dims=${v.videoWidth}x${v.videoHeight} paused=${v.paused} time=${v.currentTime.toFixed(2)}`);
        });

        console.log('\n--- SECTIONS FOUND ---');
        console.log(audit.sections.map(s => s.id).filter(Boolean));

        chrome.kill();
        resolve(audit);
      }
    };

    ws.onerror = err => {
      chrome.kill();
      reject(err);
    };
  });
}

auditMobile().catch(console.error);
