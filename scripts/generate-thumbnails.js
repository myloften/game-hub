const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const games = [
  { id: 'breakout', title: '弹球', color: '#4F46E5' },
  { id: 'maze', title: '迷宫', color: '#10B981' },
  { id: 'memory', title: '记忆翻牌', color: '#F59E0B' },
  { id: 'bird', title: '像素鸟', color: '#EF4444' },
  { id: 'snake', title: '贪吃蛇', color: '#8B5CF6' },
  { id: 'blocks', title: '方块消除', color: '#EC4899' }
];

const WIDTH = 400;
const HEIGHT = 300;

function generateThumbnail(game) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // 创建渐变背景
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, game.color);
  gradient.addColorStop(1, '#1F2937');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // 添加游戏标题
  ctx.font = 'bold 48px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(game.title, WIDTH / 2, HEIGHT / 2);

  // 保存图片
  const buffer = canvas.toBuffer('image/jpeg');
  const imagePath = path.join(__dirname, '..', 'public', 'images', `${game.id}.jpg`);
  fs.writeFileSync(imagePath, buffer);
  console.log(`Generated thumbnail for ${game.title}`);
}

// 确保目录存在
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 生成所有缩略图
games.forEach(generateThumbnail); 