import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { Stream } from 'stream';

const games = [
  { name: 'pacman', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/pacman.jpg' },
  { name: 'arkanoid', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/arkanoid.jpg' },
  { name: 'hextris', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/hextris.jpg' },
  { name: 'duckhunt', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/duckhunt.jpg' },
  { name: 'hexgl', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/hexgl.jpg' },
  { name: 'lostworld', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/lostworld.jpg' },
  { name: 'powerline', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/powerline.jpg' },
  { name: 'diep', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/diep.jpg' },
  { name: 'wings', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/wings.jpg' },
  { name: 'starve', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/starve.jpg' },
  { name: 'gartic', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/gartic.jpg' },
  { name: 'territorial', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/territorial.jpg' },
  { name: 'deeeep', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/deeeep.jpg' },
  { name: 'splix', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/splix.jpg' },
  { name: 'generals', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/generals.jpg' },
  { name: 'slither', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/slither.jpg' },
  { name: 'curvefever', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/curvefever.jpg' },
  { name: 'evades', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/evades.jpg' },
  { name: 'brutal', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/brutal.jpg' },
  { name: 'wilds', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/wilds.jpg' },
  { name: 'stabfish', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/stabfish.jpg' },
  { name: 'krunker', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/krunker.jpg' },
  { name: 'shellshock', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/shellshock.jpg' },
  { name: 'zombsroyale', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/zombsroyale.jpg' },
  { name: 'surviv', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/surviv.jpg' },
  { name: '1v1lol', url: 'https://cdn.jsdelivr.net/gh/webgamesvip/webgamesvip.github.io/public/images/1v1lol.jpg' }
];

async function downloadImage(url: string, filepath: string) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });

  return new Promise((resolve, reject) => {
    (response.data as Stream)
      .pipe(fs.createWriteStream(filepath))
      .on('finish', () => resolve('done'))
      .on('error', (e: Error) => reject(e));
  });
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  const gamesDir = path.join(publicDir, 'games');

  // Create directories if they don't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  if (!fs.existsSync(gamesDir)) {
    fs.mkdirSync(gamesDir);
  }

  for (const game of games) {
    const filepath = path.join(gamesDir, `${game.name}.jpg`);
    try {
      await downloadImage(game.url, filepath);
      console.log(`Downloaded ${game.name} image`);
    } catch (error) {
      console.error(`Error downloading ${game.name} image:`, error);
    }
  }
}

main(); 