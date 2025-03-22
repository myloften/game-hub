export interface Game {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  imageUrl?: string;
}

export const categories = [
  { id: 'arcade', name: '街机' },
  { id: 'action', name: '动作冒险' },
  { id: 'casual', name: '休闲益智' },
  { id: 'sports', name: '体育' },
  { id: 'shooting', name: '射击' },
  { id: 'strategy', name: '策略' },
  { id: 'multiplayer', name: '多人在线' },
  { id: 'puzzle', name: '解谜' },
];

export const games: Game[] = [
  // 街机类
  {
    id: '1',
    title: 'Pac-Man',
    description: '经典街机游戏，在迷宫中吃豆豆，躲避幽灵。',
    url: 'https://freepacman.org/',
    category: 'arcade',
    imageUrl: '/images/pacman.jpg',
  },
  {
    id: '2',
    title: 'Arkanoid',
    description: '经典打砖块游戏，控制挡板反弹球击碎砖块。',
    url: 'https://arkanoid.online/',
    category: 'arcade',
  },
  {
    id: '3',
    title: 'Snake',
    description: '经典贪吃蛇游戏，控制蛇吃食物成长，避免撞墙。',
    url: 'https://playsnake.org/',
    category: 'arcade',
  },
  {
    id: '4',
    title: 'Hextris',
    description: '六边形俄罗斯方块，旋转方块匹配颜色。',
    url: 'https://hextris.io/',
    category: 'arcade',
  },
  {
    id: '5',
    title: 'Minecraft Classic',
    description: '经典版我的世界，在浏览器中体验方块建造。',
    url: 'https://classic.minecraft.net/',
    category: 'arcade',
  },
  {
    id: '6',
    title: 'Duck Hunt',
    description: '经典射击游戏，瞄准飞行的鸭子进行射击。',
    url: 'https://duckhuntjs.com/',
    category: 'arcade',
  },
  {
    id: '7',
    title: 'Radius Raid',
    description: '圆形射击游戏，360度防御来袭的敌人。',
    url: 'https://play.js13kgames.com/radius-raid/',
    category: 'arcade',
  },

  // 动作冒险类
  {
    id: '8',
    title: 'HexGL',
    description: '未来风格的高速赛车游戏。',
    url: 'https://hexgl.bkcore.com/play/',
    category: 'action',
  },
  {
    id: '9',
    title: 'Lost World',
    description: '探索神秘的失落世界。',
    url: 'https://lostworld.io/',
    category: 'action',
  },
  {
    id: '10',
    title: 'Powerline',
    description: '控制能量线，与其他玩家竞争。',
    url: 'https://powerline.io/',
    category: 'action',
  },
  {
    id: '11',
    title: 'Zombs',
    description: '在僵尸世界中生存。',
    url: 'https://zombs.io/',
    category: 'action',
  },
  {
    id: '12',
    title: 'Diep',
    description: '坦克射击游戏，升级并消灭敌人。',
    url: 'https://diep.io/',
    category: 'action',
  },

  // 休闲益智类
  {
    id: '13',
    title: '2048',
    description: '数字合并游戏，达到2048。',
    url: 'https://play2048.co/',
    category: 'casual',
  },
  {
    id: '14',
    title: 'Chess',
    description: '国际象棋，与电脑对战。',
    url: 'https://www.chess.com/play/computer',
    category: 'casual',
  },
  {
    id: '15',
    title: 'Gartic',
    description: '你画我猜游戏。',
    url: 'https://gartic.io/',
    category: 'casual',
  },

  // 体育类
  {
    id: '16',
    title: 'Slither',
    description: '多人贪吃蛇游戏。',
    url: 'https://slither.io/',
    category: 'sports',
  },
  {
    id: '17',
    title: 'Curve Fever',
    description: '曲线竞速游戏。',
    url: 'https://curvefever.pro',
    category: 'sports',
  },
  {
    id: '18',
    title: 'Evades',
    description: '躲避障碍物的竞速游戏。',
    url: 'https://evades.io/',
    category: 'sports',
  },

  // 射击类
  {
    id: '19',
    title: 'Krunker',
    description: '第一人称射击游戏。',
    url: 'https://krunker.io/',
    category: 'shooting',
  },
  {
    id: '20',
    title: 'Shell Shock',
    description: '坦克射击游戏。',
    url: 'https://shellshock.io/',
    category: 'shooting',
  },
  {
    id: '21',
    title: 'Zombs Royale',
    description: '僵尸主题的大逃杀游戏。',
    url: 'https://zombsroyale.io/',
    category: 'shooting',
  },

  // 策略类
  {
    id: '22',
    title: 'Generals',
    description: '军事策略游戏。',
    url: 'https://generals.io/',
    category: 'strategy',
  },
  {
    id: '23',
    title: 'Territorial',
    description: '领土扩张策略游戏。',
    url: 'https://territorial.io/',
    category: 'strategy',
  },
  {
    id: '24',
    title: 'Lordz',
    description: '中世纪战争策略游戏。',
    url: 'https://lordz.io/',
    category: 'strategy',
  },

  // 解谜类
  {
    id: '25',
    title: 'Wordle Unlimited',
    description: '无限版猜词游戏。',
    url: 'https://wordleunlimited.org/',
    category: 'puzzle',
  },
  {
    id: '26',
    title: 'Solitaire',
    description: '经典纸牌接龙。',
    url: 'https://solitaire.io/',
    category: 'puzzle',
  },
  {
    id: '27',
    title: 'Sudoku',
    description: '数独益智游戏。',
    url: 'https://sudoku.com/',
    category: 'puzzle',
  },
]; 