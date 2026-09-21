import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const profileDesktop = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-switcher-desk';
const profileMobile = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-switcher-mob';

const outDesktop = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\switcher-desktop.png';
const outMobile = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\switcher-mobile.png';

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

async function run(port, width, height, outPath, profileDir, isMobile) {
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--user-data-dir=${profileDir}`,
    `--remote-debugging-port=${port}`,
    `--window-size=${width},${height}`,
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
        await wait(3000);
        // Switch to 'espresso' or 'latte-art' to test switching
        send('Runtime.evaluate', {
          expression: `(() => {
            const btns = Array.from(document.querySelectorAll('button'));
            const espressoBtn = btns.find(b => b.innerText.includes('Espresso'));
            if (espressoBtn) espressoBtn.click();
            return {
              clicked: !!espressoBtn,
              activeText: espressoBtn ? espressoBtn.innerText : null
            };
          })()`,
          returnByValue: true
        });
      }

      if (msg.result?.result?.value?.clicked !== undefined) {
        console.log(`[${isMobile ? 'MOBILE' : 'DESKTOP'}] Click result:`, msg.result.result.value);
        await wait(2500); // Wait for espresso video to load and play
        send('Page.captureScreenshot', { format: 'png' });
      }

      if (msg.result?.data) {
        fs.writeFileSync(outPath, Buffer.from(msg.result.data, 'base64'));
        console.log('Saved:', outPath);
        chrome.kill();
        resolve();
      }
    };

    ws.onerror = (e) => {
      chrome.kill();
      reject(e);
    };
  });
}

async function main() {
  console.log('Testing switcher on desktop...');
  await run(9338, 1440, 900, outDesktop, profileDesktop, false);
  await wait(1000);

  console.log('Testing switcher on mobile...');
  await run(9339, 390, 844, outMobile, profileMobile, true);
  console.log('All tests finished!');
}

main().catch(console.error);
