export type GameCategory = 'Arcade' | 'Action' | 'Puzzle' | 'Horror' | 'Sports' | 'Shooting' | 'Strategy' | 'Multiplayer';

export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  screenshots: string[];
  slug: string;
  url: string;
  category: GameCategory;
  features?: string[];
}

export const games: Game[] = [
  // Arcade Games
  {
    id: "1",
    title: "Pac-Man",
    description: "在这款经典街机游戏中，控制小精灵穿越迷宫，吃掉所有豆子的同时躲避四只不同性格的幽灵。每关都会增加难度，让你体验不同的挑战。收集特殊的能量豆可以暂时反击幽灵，获得额外分数。",
    thumbnailUrl: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/p/pac-man-99-switch/hero",
    screenshots: [
      "https://assets.nintendo.com/image/upload/c_fill,w_1280/v1/ncom/en_US/games/switch/p/pac-man-99-switch/screenshot-gallery/screenshot01",
      "https://assets.nintendo.com/image/upload/c_fill,w_1280/v1/ncom/en_US/games/switch/p/pac-man-99-switch/screenshot-gallery/screenshot02",
      "https://assets.nintendo.com/image/upload/c_fill,w_1280/v1/ncom/en_US/games/switch/p/pac-man-99-switch/screenshot-gallery/screenshot03"
    ],
    slug: "pacman",
    url: "https://freepacman.org/",
    category: "Arcade",
    features: [
      "经典街机玩法",
      "简单易上手",
      "支持键盘控制",
      "无需下载即可游玩"
    ]
  },
  {
    id: "2",
    title: "Tetris",
    description: "俄罗斯方块是一款考验玩家空间思维和反应能力的经典游戏。不同形状的方块从屏幕上方落下，玩家需要旋转和移动这些方块，使其形成完整的横行。当一行被填满时，该行会消失，玩家获得分数。游戏速度会随着时间推移逐渐加快，考验玩家的应变能力。",
    thumbnailUrl: "https://play-lh.googleusercontent.com/za2Nu_qjMw5GzWfbzet4zzmAyC1T00q9Hb_jdt2ZtlR_-Ej6oJ9WOUMK-V9FZHvCJL8=w240-h480-rw",
    screenshots: [
      "https://play-lh.googleusercontent.com/proxy/wTmZJRIKjnBwVWGJtQA_p9FqoP9cIhMuXJBj9KUgEoHlUZEBRuXE6DQDsKgHhqEJ5KZj6BQbYGSz9bIjezR6dY8OiP_8KQ=w720-h405-rw",
      "https://play-lh.googleusercontent.com/proxy/H_ZhwFGkrQE9bO0pfUYjYxh-TF3Mh6HgQM7zB9k_wmlYkCzcHBAqHYRHZJYRxH0yFZM8EDRzjWgBZBl8kSWR-Ux_Zg=w720-h405-rw"
    ],
    slug: "tetris",
    url: "https://tetris.com/play-tetris",
    category: "Arcade",
    features: [
      "经典俄罗斯方块玩法",
      "支持键盘和触屏操作",
      "多种游戏模式",
      "全球排行榜"
    ]
  },
  {
    id: "3",
    title: "Minecraft Classic",
    description: "体验世界上最受欢迎的沙盒建造游戏的经典版本。在这个像素风格的世界中，你可以自由地放置和破坏方块，创造属于你的独特建筑。游戏没有具体目标，完全由玩家的想象力驱动，你可以建造城堡、雕刻艺术品，或者simply探索这个无限的世界。",
    thumbnailUrl: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",
    screenshots: [
      "https://www.minecraft.net/content/dam/games/minecraft/screenshots/RayTracing-MineCraft-PMP-Always-Something-New.jpg",
      "https://www.minecraft.net/content/dam/games/minecraft/screenshots/RayTracing-MineCraft-PMP-Build-Together.jpg",
      "https://www.minecraft.net/content/dam/games/minecraft/screenshots/RayTracing-MineCraft-PMP-Survive-And-Thrive.jpg"
    ],
    slug: "minecraft",
    url: "https://classic.minecraft.net/",
    category: "Arcade",
    features: [
      "经典创造模式",
      "多人联机支持",
      "无限世界生成",
      "浏览器内即开即玩"
    ]
  },
  // Action Games
  {
    id: "4",
    title: "Slope",
    description: "一款极具挑战性的3D球类跑酷游戏。控制你的球体在不断变化的斜坡上前进，躲避障碍物，保持平衡。游戏速度会随着你的进展逐渐加快，考验你的反应能力和控制技巧。简单的操作方式但极具挑战性，让人欲罢不能。",
    thumbnailUrl: "https://play-lh.googleusercontent.com/-e_kJ6q8rjM7BYS9n7vVvhk3aDNxpkEwAWQ-OoUPDi8jMUXU9BqRtxxDtT7lPf7RYw=w240-h480-rw",
    screenshots: [
      "https://slope-game.net/data/image/screenshot/slope-1.jpg",
      "https://slope-game.net/data/image/screenshot/slope-2.jpg",
      "https://slope-game.net/data/image/screenshot/slope-3.jpg"
    ],
    slug: "slope",
    url: "https://slope-game.net/",
    category: "Action",
    features: [
      "流畅的3D图形",
      "简单的控制方式",
      "无尽的游戏模式",
      "全球排行榜"
    ]
  },
  {
    id: "5",
    title: "Shell Shockers",
    description: "一款独特的第一人称射击游戏，你将扮演一个会开枪的鸡蛋战士。在各种充满趣味的地图中与其他玩家展开对战，使用各种武器和技能来击败对手。游戏画面可爱有趣，但gameplay非常激烈刺激。",
    thumbnailUrl: "https://play-lh.googleusercontent.com/P-nde227L29s8w5LXum3L9ZA4-zKxj6KvhZO0J8fWI-Us6pQqCYrzPjHbXGoQjzl4F4=w240-h480-rw",
    screenshots: [
      "https://shellshock.io/img/screenshot1.png",
      "https://shellshock.io/img/screenshot2.png",
      "https://shellshock.io/img/screenshot3.png"
    ],
    slug: "shellshockers",
    url: "https://shellshock.io/",
    category: "Action",
    features: [
      "多人在线对战",
      "多种武器和角色",
      "有趣的鸡蛋主题",
      "团队和个人模式"
    ]
  },
  // Puzzle Games
  {
    id: "6",
    title: "2048",
    description: "一款令人上瘾的数字益智游戏。通过滑动方块，将相同数字的方块合并，目标是获得2048这个数字。每次移动都会在空位置生成一个新的数字方块，需要策略性地思考每一步移动。游戏看似简单，但要达到高分需要深思熟虑的策略。",
    thumbnailUrl: "https://play-lh.googleusercontent.com/g3RY-0eFdTgOsNtBjGvtLYfHFTAf_0YR1P_ykXKYzlaXAE_O6K-8kExQzOADKuKTCA=w240-h480-rw",
    screenshots: [
      "https://play-lh.googleusercontent.com/ZI213HwqpLwFXQpRnFe7FhmH-GV_Vq2jSpl1HhN6TPmR8cjELjWy_qsUGGpGkLYXEv8=w526-h296-rw",
      "https://play-lh.googleusercontent.com/YtKZKyXGXJVGUVGXrS_Qdx-ZtQaYf6BCItV1_dYtGMWjt_UYMdIqR6PFBJiJY_UyYw=w526-h296-rw"
    ],
    slug: "2048",
    url: "https://play2048.co/",
    category: "Puzzle",
    features: [
      "简单的滑动操作",
      "无限游戏模式",
      "分数记录系统",
      "支持触屏和键盘"
    ]
  },
  {
    id: "7",
    title: "Chess",
    description: "体验这款永恒的战略棋盘游戏。提供多个难度等级的AI对手，从初学者到大师级别。游戏包含完整的国际象棋规则，包括特殊走法如王车易位和吃过路兵。提供走法提示功能，帮助新手学习，同时也可以回看对局记录，分析棋局。",
    thumbnailUrl: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png",
    screenshots: [
      "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpZlvqUL.png",
      "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpuTejFT.png",
      "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpr8OUP.png"
    ],
    slug: "chess",
    url: "https://www.chess.com/play/computer",
    category: "Puzzle",
    features: [
      "多个AI难度级别",
      "走法提示功能",
      "对局记录回放",
      "详细的游戏教程"
    ]
  },
  // Horror Games
  {
    id: "8",
    title: "Five Nights at Freddy's Web",
    description: "在这款恐怖生存游戏中，你将在Freddy Fazbear's Pizza餐厅担任夜班保安。通过监控摄像头系统观察诡异的机器人玩偶的动向，管理有限的电力资源，在早上6点之前存活下来。每个机器人都有独特的行为模式，你需要学会预测它们的移动并采取相应的防御措施。",
    thumbnailUrl: "https://play-lh.googleusercontent.com/XHN2APosS3K4ZvnKJeWIQEh2-L5aaCc7Ot_eFHEMqoCdxvEjJx6R3_ghCNcQMLwH9A=w240-h480-rw",
    screenshots: [
      "https://play-lh.googleusercontent.com/T9eeF3h6JDh_4WkKsvlpPuPNXbEYxsqjmhcvHT8fGhiKAKWtA9TXz-N6fKFXHKkPvGc=w526-h296-rw",
      "https://play-lh.googleusercontent.com/vqRrQGFHP4DxBkVqHYk0YqOGn8VJTVPtPhzJKXAoU_9nnVlZpUNOxNNr5tZ4qIZ5UQ=w526-h296-rw",
      "https://play-lh.googleusercontent.com/Qh0GLUqzxwFVypTh-YEeS_Ob6xvwkY6Ql5m3o3YiUgVZp4JBQy1-pxPvYgXMXVGzrg=w526-h296-rw"
    ],
    slug: "fnaf",
    url: "https://www.newgrounds.com/portal/view/630920",
    category: "Horror",
    features: [
      "恐怖氛围营造",
      "策略性资源管理",
      "多个可怕的对手",
      "逐渐增加的难度"
    ]
  }
];

export function getGameById(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}

export function getGamesByCategory(category: GameCategory): Game[] {
  return games.filter((game) => game.category === category);
}

export function getAllCategories(): GameCategory[] {
  const categories = new Set(games.map((game) => game.category));
  return Array.from(categories);
} 