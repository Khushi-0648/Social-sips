import fs from 'fs';
import https from 'https';

const videoUrl = "https://rr4---sn-qxaelnll.googlevideo.com/videoplayback?expire=1790013904&ei=sFWxatPvEqCy9fwP0Lie2Aw&ip=2401:4900:8f80:fa98:c955:e046:4cf0:14b9&id=aee598f59f11596a&itag=22&source=contrib_service_bard_storage&begin=0&requiressl=yes&xpc=EghoqJzIP3oBAQ==&met=1790006704,&mh=O6&mm=32&mn=sn-qxaelnll&ms=su&mv=u&mvi=4&pl=57&rms=su,su&sc=yes&susc=gg&obr=https://gemini.google.com&acao=yes&app=fife&ic=976&eaua=BbBhsBWrNk0&pcm2=yes&mime=video/mp4&vprv=1&rqh=1&dur=10.054&lmt=1790006344197484&mt=1790006289&txp=0000224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,obr,acao,app,ic,eaua,pcm2,mime,vprv,rqh,dur,lmt&sig=AE0s2JYwRAIgIlr9NjtyAaNrfqQrqHf80mSJQRzrplrqrLNZRyPp5uUCIGA_eRG74rl8I8AtwNg07suPGPlx8aPKpHcvkB3KNxhK&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,sc&lsig=APaTxxMwRQIhAIJy8yGgYBGQruG_q_pem4Vmxd4o6Uci6lvcG9xDyNCQAiBBBgUxCwVDqy-YNgIQ1RaZgHptVrGzWqxV-lN6a-Ca_w==";

const outPath = 'C:\\Users\\satya\\.gemini\\antigravity\\scratch\\social-sips-cafe\\public\\videos\\gemini-user-video-2.mp4';

console.log('Downloading video to', outPath);
const file = fs.createWriteStream(outPath);

https.get(videoUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Referer': 'https://gemini.google.com/'
  }
}, (res) => {
  console.log('Response status:', res.statusCode);
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    console.log('Redirecting to', res.headers.location);
    https.get(res.headers.location, (redRes) => {
      redRes.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded successfully. File size:', fs.statSync(outPath).size);
      });
    });
    return;
  }
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded successfully. File size:', fs.statSync(outPath).size);
  });
}).on('error', (err) => {
  console.error('Error downloading:', err);
});
