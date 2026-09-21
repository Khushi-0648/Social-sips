import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'https://share.gemini.google/ys3lfsTT6kZy';
const DEBUG_PORT = 9228;
const USER_DATA_DIR = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-gemini-share-3';
const OUT_VIDEO = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\social-sips-cafe\\public\\videos\\gemini-user-video-3.mp4';
const OUT_PREVIEW = 'C:\\Users\\satya\\.gemini\\antigravity\\brain\\3a1c2f07-5962-4232-b733-7366e16b8b2a\\gemini-share-3-preview.png';

console.log('Launching Chrome to inspect & download Gemini share 3:', TARGET_URL);
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

    ws.onopen = async () => {
      console.log('Connected. Waiting 10s for video player to load...');
      await new Promise(r => setTimeout(r, 10000));

      // 1. Take preview screenshot
      const ssRes = await send('Page.captureScreenshot', { format: 'png' });
      if (ssRes?.data) {
        fs.writeFileSync(OUT_PREVIEW, Buffer.from(ssRes.data, 'base64'));
        console.log('Saved preview screenshot to', OUT_PREVIEW);
      }

      // 2. Fetch video data inside browser context
      console.log('Fetching video in page context...');
      const evalRes = await send('Runtime.evaluate', {
        expression: `(async () => {
          try {
            const video = document.querySelector('video');
            if (!video) return { error: 'No video element found in DOM' };
            const src = video.currentSrc || video.src;
            console.log('Found video src:', src);
            const res = await fetch(src);
            if (!res.ok) return { error: 'Fetch status: ' + res.status + ' ' + res.statusText };
            const blob = await res.blob();
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                resolve({
                  size: blob.size,
                  type: blob.type,
                  src: src,
                  videoWidth: video.videoWidth,
                  videoHeight: video.videoHeight,
                  duration: video.duration,
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
        maxWaitTime: 35000
      });

      const val = evalRes?.result?.value || evalRes?.value;
      console.log('Video fetch result:', {
        size: val?.size,
        type: val?.type,
        src: val?.src,
        dimensions: val?.videoWidth ? `${val.videoWidth}x${val.videoHeight}` : 'unknown',
        duration: val?.duration,
        hasDataUrl: !!val?.dataUrl,
        error: val?.error
      });

      if (val?.dataUrl) {
        const base64Data = val.dataUrl.split(',')[1];
        const buf = Buffer.from(base64Data, 'base64');
        fs.writeFileSync(OUT_VIDEO, buf);
        console.log('Successfully saved video to', OUT_VIDEO, 'bytes:', buf.length);
      } else {
        console.error('Failed to extract dataUrl:', evalRes);
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
