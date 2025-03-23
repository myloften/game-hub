export type GameCategory = 'Arcade' | 'Action' | 'Puzzle' | 'Horror' | 'Sports' | 'Shooting' | 'Strategy' | 'Multiplayer';

export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  slug: string;
  url: string;
  category: GameCategory;
}

export const games: Game[] = [
  // Arcade Games
  {
    id: "1",
    title: "Pac-Man",
    description: "Navigate through mazes, eat dots, and avoid ghosts in this classic arcade game that has entertained generations.",
    thumbnailUrl: "https://play-lh.googleusercontent.com/V-lvUzA5kK0Xw3wdg8Qv4w7QwcGY5PZAx_AYfYZc6YJ6PXhG2g5pX6bQeAye7MLrxw=w240-h480-rw",
    slug: "pacman",
    url: "https://freepacman.org/",
    category: "Arcade"
  },
  {
    id: "2",
    title: "Snake",
    description: "Guide the snake to eat food and grow longer, but don't hit the walls or your own tail! A timeless classic that's simple yet addictive.",
    thumbnailUrl: "https://play-lh.googleusercontent.com/RxaUuXrZVl4JxqWEJJ_SGWJdD1xVdYF2OQWQP-LS1oZaY5F6GtqJGxYBBkmmjBYLnw=w240-h480-rw",
    slug: "snake",
    url: "https://playsnake.org/",
    category: "Arcade"
  },
  {
    id: "3",
    title: "Minecraft Classic",
    description: "Experience the original version of the world's most popular building game. Create and explore your own blocky world!",
    thumbnailUrl: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",
    slug: "minecraft",
    url: "https://classic.minecraft.net/",
    category: "Arcade"
  },
  // Action & Adventure Games
  {
    id: "4",
    title: "HexGL",
    description: "A futuristic, fast-paced racing game. Push your reflexes to the limit as you navigate through stunning 3D tracks.",
    thumbnailUrl: "https://repository-images.githubusercontent.com/3102613/8c80d180-7d3a-11eb-94cc-8d6897c97f83",
    slug: "hexgl",
    url: "https://hexgl.bkcore.com/play/",
    category: "Action"
  },
  {
    id: "5",
    title: "Diep.io",
    description: "Tank battle royale where you upgrade your tank and fight against other players in an intense multiplayer arena.",
    thumbnailUrl: "https://play-lh.googleusercontent.com/IHmGtNzL8b7-9YHNRdcN2Yx-f3GQlPu9GNJmB2UzmaGEk0tLPyoHmXNMyC9WVR7bEtk=w240-h480-rw",
    slug: "diep",
    url: "https://diep.io/",
    category: "Action"
  },
  // Puzzle Games
  {
    id: "6",
    title: "2048",
    description: "Join the numbers and get to the 2048 tile! Swipe to move all tiles. When two tiles with the same number touch, they merge into one!",
    thumbnailUrl: "https://play-lh.googleusercontent.com/g3RY-0eFdTgOsNtBjGvtLYfHFTAf_0YR1P_ykXKYzlaXAE_O6K-8kExQzOADKuKTCA=w240-h480-rw",
    slug: "2048",
    url: "https://play2048.co/",
    category: "Puzzle"
  },
  {
    id: "7",
    title: "Chess",
    description: "Challenge your mind with the classic game of chess. Play against a computer opponent of varying difficulty levels.",
    thumbnailUrl: "https://play-lh.googleusercontent.com/a_Jqy4iVMDOdlrLw8OQ_vhGnXQh3_QqtMqEZHDyKFYFXpGMT-EdnHrgLHBaOQkPiEWo=w240-h480-rw",
    slug: "chess",
    url: "https://www.chess.com/play/computer",
    category: "Puzzle"
  },
  // Shooting Games
  {
    id: "8",
    title: "Krunker",
    description: "Fast-paced multiplayer FPS game with customizable classes and maps. Join intense battles in this browser-based shooter!",
    thumbnailUrl: "https://play-lh.googleusercontent.com/MxL2Ou0bPU9siV9gRBK4-gf5txRWWKgLXgEJKg8hQxF5woPYdcBw-U6CqoRGHGBudw=w240-h480-rw",
    slug: "krunker",
    url: "https://krunker.io/",
    category: "Shooting"
  },
  {
    id: '1',
    title: 'Five Nights at Freddy\'s',
    description: 'Welcome to your new summer job at Freddy Fazbear\'s Pizza, where kids and parents alike come for entertainment and food! The main attraction is Freddy Fazbear, of course; and his two friends. They are animatronic robots, programmed to please the crowds!',
    thumbnailUrl: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/d1d9d12bc22b8e59b5d4c94c831f5877.png',
    slug: 'fnaf',
    url: 'https://www.newgrounds.com/portal/view/630920',
    category: 'Horror'
  },
  {
    id: '2',
    title: 'Slender: The Eight Pages',
    description: 'A first person horror game where your only goal is to collect all 8 pages while avoiding the terrifying Slender Man. The more pages you collect, the more intense your experience becomes.',
    thumbnailUrl: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/6d3a1e06d6a24c95353471e81a4be44e.png',
    slug: 'slender',
    url: 'https://www.indiedb.com/games/slender-the-eight-pages',
    category: 'Horror'
  },
  {
    id: '3',
    title: 'SCP: Containment Breach',
    description: 'Based on the SCP Foundation mythos, you find yourself trapped in a facility full of dangerous anomalous entities. Your goal is to escape while avoiding the deadly SCP-173 and other creatures.',
    thumbnailUrl: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/2d1b2a5ff364c44d3c24169146c0d52c.png',
    slug: 'scp',
    url: 'https://www.scpcbgame.com/',
    category: 'Horror'
  },
  {
    id: '4',
    title: 'The House',
    description: 'A point-and-click horror game where you explore a mysterious haunted house. Each room holds new terrors and puzzles to solve.',
    thumbnailUrl: 'https://img.itch.zone/aW1nLzEyMDk5NjEucG5n/original/B5%2FDIZ.png',
    slug: 'the-house',
    url: 'https://armor.ag/TheHouse',
    category: 'Horror'
  },
  {
    id: '5',
    title: 'Pac-Man',
    description: 'Navigate through a maze, eating dots while avoiding ghosts in this classic arcade game.',
    thumbnailUrl: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/c4492c7286f57a8f5f692e5f5186e5b8.png',
    slug: 'pacman',
    url: 'https://pacman.live',
    category: 'Arcade'
  },
  {
    id: '6',
    title: '2048',
    description: 'Combine matching numbers to reach the elusive 2048 tile in this addictive puzzle game.',
    thumbnailUrl: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/b3e3e393c77e35a4a3f3cbd1e429b5dc.png',
    slug: '2048',
    url: 'https://play2048.co',
    category: 'Puzzle'
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