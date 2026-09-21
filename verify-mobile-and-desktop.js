import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const profileDesktop = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-verify-desk';
const profileMobile = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-verify-mob';

const outBannerDesktop = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\banner-desktop-verified.png';
const outBannerMobile = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\banner-mobile-verified.png';

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

async function runCapture(port, width, height, outPath, profileDir, isMobile = false) {
  const flags = [
    '--headless=new',
    '--disable-gpu',
    `--user-data-dir=${profileDir}`,
    `--remote-debugging-port=${port}`,
    `--window-size=${width},${height}`,
    'about:blank'
  ];

  const chrome = spawn(CHROME_PATH, flags);
  await wait(2200);

  const tabs = await getTabs(port);
  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  return new Promise((resolve, reject) => {
    let msgId = 1;
    const send = (method, params = {}) => {
      ws.send(JSON.stringify({ id: msgId++, method, params }));
    };

    ws.onopen = () => {
      send('Page.enable');
      send('Runtime.enable');
      if (isMobile) {
        send('Emulation.setDeviceMetricsOverride', {
          width: 390,
          height: 844,
          deviceScaleFactor: 2,
          mobile: true
        });
      }
      send('Page.navigate', { url: 'http://localhost:5173/' });
    };

    ws.onmessage = async (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === (isMobile ? 4 : 3)) {
        // Wait 3.5 seconds for video to play and render
        await wait(3500);

        // Check if marquee exists
        send('Runtime.evaluate', {
          expression: `({
            hasMarquee: !!document.querySelector('.animate-marquee'),
            heroText: document.getElementById('home')?.innerText,
            bodyScrollWidth: document.body.scrollWidth,
            windowWidth: window.innerWidth,
            videoSrc: document.querySelector('video source')?.src,
            videoCurrentTime: document.querySelector('video')?.currentTime
          })`,
          returnByValue: true
        });
      }

      if (msg.result?.result?.value) {
        const check = msg.result.result.value;
        console.log(`[${isMobile ? 'MOBILE' : 'DESKTOP'}] Check:`, check);
        send('Page.captureScreenshot', { format: 'png' });
      }

      if (msg.result?.data) {
        fs.writeFileSync(outPath, Buffer.from(msg.result.data, 'base64'));
        console.log(`Saved screenshot to ${outPath}`);
        chrome.kill();
        resolve();
      }
    };

    ws.onerror = (err) => {
      chrome.kill();
      reject(err);
    };
  });
}

async function main() {
  console.log('Capturing Desktop...');
  await runCapture(9333, 1440, 900, outBannerDesktop, profileDesktop, false);
  await wait(1000);

  console.log('Capturing Mobile...');
  await runCapture(9334, 390, 844, outBannerMobile, profileMobile, true);
  console.log('All captures complete!');
}

main().catch(console.error);
