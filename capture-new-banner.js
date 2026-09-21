import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDirDesktop = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-verify-d';
const userDataDirMobile = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-verify-m';
const outDesktop = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\new-gemini-video-banner-desktop.png';
const outMobile = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\new-gemini-video-banner-mobile.png';

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

async function capture(port, width, height, outPath, profileDir) {
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--user-data-dir=${profileDir}`,
    `--remote-debugging-port=${port}`,
    `--window-size=${width},${height}`,
    'about:blank'
  ]);

  await wait(2000);
  const tabs = await getTabs(port);
  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  return new Promise((resolve, reject) => {
    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
      ws.send(JSON.stringify({ id: 2, method: 'Page.navigate', params: { url: 'http://localhost:5173/' } }));
    };

    ws.onmessage = async (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 2) {
        // Wait 4 seconds for video to play nicely
        await wait(4000);
        ws.send(JSON.stringify({ id: 3, method: 'Page.captureScreenshot', params: { format: 'png' } }));
      }
      if (msg.id === 3 && msg.result?.data) {
        fs.writeFileSync(outPath, Buffer.from(msg.result.data, 'base64'));
        console.log('Saved:', outPath);
        chrome.kill();
        resolve();
      }
    };

    setTimeout(() => {
      chrome.kill();
      resolve();
    }, 15000);
  });
}

async function run() {
  console.log('Capturing desktop...');
  await capture(9461, 1440, 900, outDesktop, userDataDirDesktop);
  console.log('Capturing mobile...');
  await capture(9462, 390, 844, outMobile, userDataDirMobile);
  console.log('Done captures!');
}

run().catch(console.error);
