export type GameCategory = 'Arcade' | 'Action' | 'Puzzle' | 'Sports' | 'Shooting' | 'Strategy' | 'Multiplayer';

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
  }
];

export function getGameById(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}

export function getGamesByCategory(category: GameCategory): Game[] {
  return games.filter(game => game.category === category);
}

export function getAllCategories(): GameCategory[] {
  return Array.from(new Set(games.map(game => game.category)));
} 