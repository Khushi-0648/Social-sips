import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://share.gemini.google/xqqbrhDJPVa2';
const DEBUG_PORT = 9226;
const USER_DATA_DIR = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-gemini-dl-2';
const OUT_FILE = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\social-sips-cafe\\public\\videos\\gemini-user-video-2.mp4';

console.log('Launching Chrome to download video directly from page context...');
const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  `--user-data-dir=${USER_DATA_DIR}`,
  `--remote-debugging-port=${DEBUG_PORT}`,
  TARGET_URL
]);

setTimeout(async () => {
  try {
    const listRes = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
    const tabs = await listRes.json();
    const targetTab = tabs.find(t => t.url.includes('gemini.google.com') || t.url.includes('share.gemini.google')) || tabs[0];
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

    ws.onopen = async () => {
      console.log('Waiting 10s for video player to be ready in DOM...');
      await new Promise(r => setTimeout(r, 10000));

      console.log('Attempting in-page fetch of video blob...');
      const evalRes = await send('Runtime.evaluate', {
        expression: `(async () => {
          try {
            const video = document.querySelector('video');
            if (!video) return { error: 'No video element found' };
            const src = video.currentSrc || video.src;
            console.log('Fetching video src:', src);
            const res = await fetch(src);
            if (!res.ok) return { error: 'Fetch failed: ' + res.status + ' ' + res.statusText };
            const blob = await res.blob();
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                resolve({
                  size: blob.size,
                  type: blob.type,
                  dataUrl: reader.result
                });
              };
              reader.onerror = () => reject({ error: 'FileReader error' });
              reader.readAsDataURL(blob);
            });
          } catch (e) {
            return { error: e.toString() };
          }
        })()`,
        awaitPromise: true,
        returnByValue: true,
        maxWaitTime: 30000
      });

      const val = evalRes?.result?.value || evalRes?.value;
      console.log('Result metadata:', {
        size: val?.size,
        type: val?.type,
        hasDataUrl: !!val?.dataUrl,
        error: val?.error
      });

      if (val?.dataUrl) {
        const base64Data = val.dataUrl.split(',')[1];
        const buf = Buffer.from(base64Data, 'base64');
        fs.writeFileSync(OUT_FILE, buf);
        console.log('Successfully saved video to', OUT_FILE, 'bytes:', buf.length);
      } else {
        console.error('Failed to get dataUrl:', evalRes);
      }

      ws.close();
      chrome.kill();
      process.exit(0);
    };
  } catch (err) {
    console.error('Error in script:', err);
    chrome.kill();
    process.exit(1);
  }
}, 3000);
