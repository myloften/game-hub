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
    description: "In this classic arcade game, control Pac-Man through mazes while eating dots and avoiding four unique ghosts. Each level increases in difficulty, offering new challenges. Collect special power pellets to temporarily turn the tables on the ghosts and earn bonus points.",
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
      "Classic Arcade Gameplay",
      "Easy to Learn",
      "Keyboard Controls",
      "Play Instantly in Browser"
    ]
  },
  {
    id: "2",
    title: "Tetris",
    description: "Tetris is a classic game that tests spatial thinking and reflexes. Different shaped blocks fall from the top of the screen, and players must rotate and move them to form complete lines. When a line is filled, it disappears and awards points. The game speed gradually increases over time, testing your adaptability.",
    thumbnailUrl: "https://play-lh.googleusercontent.com/za2Nu_qjMw5GzWfbzet4zzmAyC1T00q9Hb_jdt2ZtlR_-Ej6oJ9WOUMK-V9FZHvCJL8=w240-h480-rw",
    screenshots: [
      "https://play-lh.googleusercontent.com/proxy/wTmZJRIKjnBwVWGJtQA_p9FqoP9cIhMuXJBj9KUgEoHlUZEBRuXE6DQDsKgHhqEJ5KZj6BQbYGSz9bIjezR6dY8OiP_8KQ=w720-h405-rw",
      "https://play-lh.googleusercontent.com/proxy/H_ZhwFGkrQE9bO0pfUYjYxh-TF3Mh6HgQM7zB9k_wmlYkCzcHBAqHYRHZJYRxH0yFZM8EDRzjWgBZBl8kSWR-Ux_Zg=w720-h405-rw"
    ],
    slug: "tetris",
    url: "https://tetris.com/play-tetris",
    category: "Arcade",
    features: [
      "Classic Tetris Gameplay",
      "Keyboard & Touch Controls",
      "Multiple Game Modes",
      "Global Leaderboards"
    ]
  },
  {
    id: "3",
    title: "Minecraft Classic",
    description: "Experience the classic version of the world's most popular sandbox building game. In this pixelated world, you can freely place and break blocks to create unique structures. There are no specific goals - the game is driven entirely by your imagination. Build castles, create art, or simply explore this infinite world.",
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
      "Classic Creative Mode",
      "Multiplayer Support",
      "Infinite World Generation",
      "Play in Browser"
    ]
  },
  // Action Games
  {
    id: "4",
    title: "Slope",
    description: "A challenging 3D ball rolling game. Control your ball down ever-changing slopes, dodge obstacles, and maintain balance. The game speed increases as you progress, testing your reaction time and control skills. Simple controls but highly challenging gameplay makes it addictively fun.",
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
      "Smooth 3D Graphics",
      "Simple Controls",
      "Endless Mode",
      "Global Rankings"
    ]
  },
  {
    id: "5",
    title: "Shell Shockers",
    description: "A unique first-person shooter where you play as an egg warrior. Battle other players across fun-themed maps, using various weapons and abilities to defeat your opponents. The graphics are cute and fun, but the gameplay is intense and exciting.",
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
      "Multiplayer Battles",
      "Various Weapons & Characters",
      "Fun Egg Theme",
      "Team & Solo Modes"
    ]
  },
  // Puzzle Games
  {
    id: "6",
    title: "2048",
    description: "An addictive number puzzle game. Slide tiles to combine matching numbers, aiming to create the 2048 tile. Each move generates a new number tile in an empty space, requiring strategic thinking for each move. The game seems simple but requires careful strategy to achieve high scores.",
    thumbnailUrl: "https://play-lh.googleusercontent.com/g3RY-0eFdTgOsNtBjGvtLYfHFTAf_0YR1P_ykXKYzlaXAE_O6K-8kExQzOADKuKTCA=w240-h480-rw",
    screenshots: [
      "https://play-lh.googleusercontent.com/ZI213HwqpLwFXQpRnFe7FhmH-GV_Vq2jSpl1HhN6TPmR8cjELjWy_qsUGGpGkLYXEv8=w526-h296-rw",
      "https://play-lh.googleusercontent.com/YtKZKyXGXJVGUVGXrS_Qdx-ZtQaYf6BCItV1_dYtGMWjt_UYMdIqR6PFBJiJY_UyYw=w526-h296-rw"
    ],
    slug: "2048",
    url: "https://play2048.co/",
    category: "Puzzle",
    features: [
      "Simple Swipe Controls",
      "Endless Mode",
      "Score Tracking",
      "Touch & Keyboard Support"
    ]
  },
  {
    id: "7",
    title: "Chess",
    description: "Experience this timeless strategy board game. Features multiple AI difficulty levels from beginner to master. Includes complete chess rules including special moves like castling and en passant. Offers move hints to help beginners learn, plus game replay for analysis.",
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
      "Multiple AI Levels",
      "Move Hints",
      "Game Replay",
      "Detailed Tutorials"
    ]
  },
  // Horror Games
  {
    id: "8",
    title: "Five Nights at Freddy's Web",
    description: "In this horror survival game, you work as a night security guard at Freddy Fazbear's Pizza. Monitor the creepy animatronic dolls through the security camera system, manage limited power resources, and survive until 6 AM. Each animatronic has unique behavior patterns - learn to predict their movements and take defensive measures.",
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
      "Atmospheric Horror",
      "Resource Management",
      "Multiple Enemies",
      "Progressive Difficulty"
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