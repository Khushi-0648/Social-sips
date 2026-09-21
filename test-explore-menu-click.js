import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-test-menu-click';
const outBefore = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\menu-before-click.png';
const outAfter = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\menu-after-click.png';

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function getTabs() {
  return new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9465/json', res => {
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
    '--remote-debugging-port=9465',
    '--window-size=1280,900',
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

    // Scroll to menu
    await send('Runtime.evaluate', {
      expression: "document.getElementById('menu').scrollIntoView();"
    });
    await wait(1000);

    // Screenshot before click
    const ss1 = await send('Page.captureScreenshot', { format: 'png' });
    if (ss1?.data) {
      fs.writeFileSync(outBefore, Buffer.from(ss1.data, 'base64'));
      console.log('Saved menu-before-click.png');
    }

    // Find and click the 'Explore Menu' button
    const clickRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const exploreBtn = btns.find(b => b.innerText.includes('Explore Menu'));
        if (exploreBtn) {
          exploreBtn.click();
          return { clicked: true, text: exploreBtn.innerText };
        }
        return { clicked: false };
      })()`,
      returnByValue: true
    });
    console.log('Click result:', clickRes?.value);

    await wait(1500);

    // Screenshot after click
    const ss2 = await send('Page.captureScreenshot', { format: 'png' });
    if (ss2?.data) {
      fs.writeFileSync(outAfter, Buffer.from(ss2.data, 'base64'));
      console.log('Saved menu-after-click.png');
    }

    // Check visible card count
    const countRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const anchor = document.getElementById('menu-items-anchor');
        return {
          cardCount: anchor ? anchor.children.length : 0,
          activeTab: document.querySelector('.bg-cafe-900.text-white')?.innerText
        };
      })()`,
      returnByValue: true
    });
    console.log('Items visible after click:', countRes?.value);

    ws.close();
    chrome.kill();
    process.exit(0);
  };
}

run().catch(console.error);
