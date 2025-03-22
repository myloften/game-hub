export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: GameCategory;
  thumbnailUrl: string;
  iframeUrl: string;
  features: string[];
}

export type GameCategory = 'Action' | 'Puzzle' | 'Strategy' | 'Sports' | 'Racing';

export const games: Game[] = [
  {
    id: '1',
    slug: '2048',
    title: '2048',
    description: 'Join the numbers and get to the 2048 tile!',
    category: 'Puzzle',
    thumbnailUrl: '/games/2048.png',
    iframeUrl: 'https://play2048.co/',
    features: ['Simple to learn', 'Challenging to master', 'Addictive gameplay']
  },
  {
    id: '2',
    slug: 'chess',
    title: 'Chess',
    description: 'Play the classic game of chess against the computer or other players.',
    category: 'Strategy',
    thumbnailUrl: '/games/chess.png',
    iframeUrl: 'https://www.chess.com/play/online',
    features: ['Play vs AI', 'Online multiplayer', 'Learn chess tactics']
  },
  {
    id: '3',
    slug: 'pacman',
    title: 'Pac-Man',
    description: 'Navigate through the maze, eating dots and avoiding ghosts.',
    category: 'Action',
    thumbnailUrl: '/games/pacman.png',
    iframeUrl: 'https://pacman.live/play.html',
    features: ['Classic arcade gameplay', 'Power pellets', 'Ghost AI']
  },
  {
    id: '4',
    slug: 'minecraft-classic',
    title: 'Minecraft Classic',
    description: 'Build anything you can imagine in this creative building game.',
    category: 'Strategy',
    thumbnailUrl: '/games/minecraft.png',
    iframeUrl: 'https://classic.minecraft.net/',
    features: ['Creative mode', 'Multiplayer', 'Infinite worlds']
  },
  {
    id: '5',
    slug: 'slither',
    title: 'Slither.io',
    description: 'Grow your snake by eating glowing orbs and defeating other players.',
    category: 'Action',
    thumbnailUrl: '/games/slither.png',
    iframeUrl: 'http://slither.io/',
    features: ['Multiplayer', 'Leaderboards', 'Custom skins']
  },
  {
    id: '6',
    slug: 'wordle',
    title: 'Wordle',
    description: 'Guess the five-letter word in six tries.',
    category: 'Puzzle',
    thumbnailUrl: '/games/wordle.png',
    iframeUrl: 'https://www.nytimes.com/games/wordle/index.html',
    features: ['Daily puzzles', 'Share results', 'Statistics']
  },
  {
    id: '7',
    slug: 'krunker',
    title: 'Krunker',
    description: 'Fast-paced multiplayer first-person shooter.',
    category: 'Action',
    thumbnailUrl: '/games/krunker.png',
    iframeUrl: 'https://krunker.io/',
    features: ['Multiple classes', 'Custom maps', 'Competitive modes']
  },
  {
    id: '8',
    slug: 'gartic',
    title: 'Gartic Phone',
    description: 'Draw and guess with friends in this fun party game.',
    category: 'Puzzle',
    thumbnailUrl: '/games/gartic.png',
    iframeUrl: 'https://garticphone.com/',
    features: ['Multiplayer', 'Voice chat', 'Custom rooms']
  },
  {
    id: '9',
    slug: 'duck-hunt',
    title: 'Duck Hunt',
    description: 'Classic shooting game where you hunt ducks.',
    category: 'Action',
    thumbnailUrl: '/games/duck-hunt.png',
    iframeUrl: 'https://duckhuntjs.com/',
    features: ['Classic gameplay', 'Multiple levels', 'High scores']
  }
];

export function getGameById(slug: string): Game | undefined {
  return games.find(game => game.slug === slug);
}

export function getAllCategories(): GameCategory[] {
  return Array.from(new Set(games.map(game => game.category)));
}

export function getGamesByCategory(category: GameCategory): Game[] {
  return games.filter(game => game.category === category);
} 