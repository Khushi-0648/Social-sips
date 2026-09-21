import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://share.gemini.google/xqqbrhDJPVa2';
const DEBUG_PORT = 9225;
const USER_DATA_DIR = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-gemini-share-2';

console.log('Launching Chrome to inspect Gemini share URL:', TARGET_URL);
const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${USER_DATA_DIR}`,
  `--remote-debugging-port=${DEBUG_PORT}`,
  TARGET_URL
]);

chrome.on('error', (err) => {
  console.error('Failed to spawn Chrome:', err);
  process.exit(1);
});

setTimeout(async () => {
  try {
    const listRes = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
    const tabs = await listRes.json();
    console.log('Tabs available:', tabs.length);
    const targetTab = tabs.find(t => t.url.includes('gemini.google.com') || t.url.includes('share.gemini.google')) || tabs[0];
    if (!targetTab || !targetTab.webSocketDebuggerUrl) {
      console.error('No debugger URL found');
      chrome.kill();
      process.exit(1);
    }

    console.log('Connecting to tab:', targetTab.title, targetTab.webSocketDebuggerUrl);
    const ws = new WebSocket(targetTab.webSocketDebuggerUrl);

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

    const mediaUrls = [];

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.method === 'Network.responseReceived') {
        const url = data.params?.response?.url;
        const mimeType = data.params?.response?.mimeType;
        if (url && (mimeType?.includes('video') || url.includes('.mp4') || url.includes('.webm') || url.includes('video') || url.includes('googleusercontent.com'))) {
          console.log('Captured network media:', mimeType, url);
          mediaUrls.push({ url, mimeType });
        }
      }
    };

    ws.onopen = async () => {
      console.log('WebSocket connected. Enabling Network and Page...');
      await send('Network.enable');
      await send('Page.enable');
      
      console.log('Waiting 10s for page hydration...');
      await new Promise(r => setTimeout(r, 10000));

      // Extract all video tags, links, and text
      const evalRes = await send('Runtime.evaluate', {
        expression: `(() => {
          const videos = Array.from(document.querySelectorAll('video')).map(v => ({
            src: v.src,
            currentSrc: v.currentSrc,
            sources: Array.from(v.querySelectorAll('source')).map(s => s.src)
          }));
          const imgs = Array.from(document.querySelectorAll('img')).map(i => i.src).filter(s => s && !s.includes('gstatic.com/lamda/images/gemini_sparkle'));
          const links = Array.from(document.querySelectorAll('a')).map(a => ({ href: a.href, text: a.innerText }));
          const text = document.body.innerText;
          return { videos, imgs, links, textSnippet: text.slice(0, 1000) };
        })()`,
        returnByValue: true
      });

      console.log('DOM Evaluation result:', JSON.stringify(evalRes, null, 2));
      console.log('Captured media URLs:', JSON.stringify(mediaUrls, null, 2));

      // Save screenshot
      const ssRes = await send('Page.captureScreenshot', { format: 'png' });
      if (ssRes?.data) {
        const ssPath = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\gemini-share-2-preview.png';
        fs.writeFileSync(ssPath, Buffer.from(ssRes.data, 'base64'));
        console.log('Saved preview screenshot to', ssPath);
      }

      // If video source found in DOM or Network, let's write to a json file
      const resultData = {
        evalResult: evalRes?.value,
        mediaUrls
      };
      fs.writeFileSync(
        'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\scratch\\gemini-share-2-data.json',
        JSON.stringify(resultData, null, 2)
      );

      ws.close();
      chrome.kill();
      process.exit(0);
    };
  } catch (err) {
    console.error('Error during inspection:', err);
    chrome.kill();
    process.exit(1);
  }
}, 3000);
