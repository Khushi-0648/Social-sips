import http from 'http';
import { spawn } from 'child_process';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <script>
      fetch('/res?mp4=' + MediaRecorder.isTypeSupported('video/mp4') + '&avc1=' + MediaRecorder.isTypeSupported('video/mp4;codecs=avc1'));
    </script>
  `);
  if (req.url.startsWith('/res')) {
    console.log('Result:', req.url);
    res.end('ok');
    setTimeout(() => {
      server.close();
      process.exit(0);
    }, 500);
  }
});

server.listen(8994, () => {
  spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--disable-gpu',
    '--user-data-dir=C:\\Users\\satya\\.gemini\\antigravity\\scratch\\cdp-test-mp4',
    'http://127.0.0.1:8994/'
  ]);
});
