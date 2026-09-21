import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-test-menu-mobile';
const outMobileBefore = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\menu-mobile-before-click.png';
const outMobileAfter = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\menu-mobile-after-click.png';

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function getTabs() {
  return new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9466/json', res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

async function run() {
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--user-data-dir=${userDataDir}`,
    '--remote-debugging-port=9466',
    '--window-size=390,844',
    'about:blank'
  ]);

  await wait(2000);
  const tabs = await getTabs();
  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  let msgId = 1;
  const send = (method, params = {}) => {
    const id = msgId++;
    ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve) => {
      const handler = (event) => {
        const data = JSON.parse(event.data);
        if (data.id === id) {
          ws.removeEventListener('message', handler);
          resolve(data.result);
        }
      };
      ws.addEventListener('message', handler);
    });
  };

  ws.onopen = async () => {
    await send('Page.enable');
    await send('Page.navigate', { url: 'http://localhost:5173/' });
    await wait(3000);

    // Scroll to explore menu button
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const btn = btns.find(b => b.innerText.includes('Explore Menu'));
        if (btn) btn.scrollIntoView({ behavior: 'instant', block: 'center' });
      })()`
    });
    await wait(1000);

    // Screenshot before click
    const ss1 = await send('Page.captureScreenshot', { format: 'png' });
    if (ss1?.data) {
      fs.writeFileSync(outMobileBefore, Buffer.from(ss1.data, 'base64'));
      console.log('Saved menu-mobile-before-click.png');
    }

    // Click 'Explore Menu' button
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const btn = btns.find(b => b.innerText.includes('Explore Menu'));
        if (btn) btn.click();
      })()`
    });

    await wait(1500);

    // Screenshot after click
    const ss2 = await send('Page.captureScreenshot', { format: 'png' });
    if (ss2?.data) {
      fs.writeFileSync(outMobileAfter, Buffer.from(ss2.data, 'base64'));
      console.log('Saved menu-mobile-after-click.png');
    }

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

run().catch(console.error);
