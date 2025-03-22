export interface Game {
  id: string;
  title: string;
  description: string;
  category: GameCategory;
  thumbnailUrl: string;
  iframeUrl: string;
  features: string[];
}

export type GameCategory = 
  | 'Arcade'
  | 'Action & Adventure'
  | 'Casual & Puzzle'
  | 'Sports'
  | 'Shooting'
  | 'Strategy'
  | 'Multiplayer'
  | 'Puzzle';

export const games: Game[] = [
  {
    id: 'pacman',
    title: 'Pac-Man Classic',
    description: 'Navigate through the maze, eat all dots while avoiding ghosts in this timeless arcade classic.',
    category: 'Arcade',
    thumbnailUrl: '/games/pacman.jpg',
    iframeUrl: 'https://freepacman.org/',
    features: ['Classic arcade gameplay', 'Original maze design', 'Four unique ghosts', 'Power pellets']
  },
  {
    id: 'minecraft-classic',
    title: 'Minecraft Classic',
    description: 'Build anything you can imagine in this creative block-building adventure.',
    category: 'Action & Adventure',
    thumbnailUrl: '/games/minecraft.jpg',
    iframeUrl: 'https://classic.minecraft.net/',
    features: ['Creative mode', 'Infinite blocks', 'Classic graphics', 'Build anything']
  },
  {
    id: 'duck-hunt',
    title: 'Duck Hunt JS',
    description: 'Test your aim in this modern recreation of the classic Nintendo shooting game.',
    category: 'Shooting',
    thumbnailUrl: '/games/duckhunt.jpg',
    iframeUrl: 'https://duckhuntjs.com/',
    features: ['Classic gameplay', 'Modern graphics', 'Multiple difficulty levels', 'High score tracking']
  },
  {
    id: '2048',
    title: '2048',
    description: 'Combine matching numbers to reach 2048 in this addictive puzzle game.',
    category: 'Casual & Puzzle',
    thumbnailUrl: '/games/2048.jpg',
    iframeUrl: 'https://play2048.co/',
    features: ['Simple controls', 'Challenging gameplay', 'Score tracking', 'Endless mode']
  },
  {
    id: 'chess',
    title: 'Chess Master',
    description: 'Challenge yourself against AI opponents in the ultimate game of strategy.',
    category: 'Strategy',
    thumbnailUrl: '/games/chess.jpg',
    iframeUrl: 'https://www.chess.com/play/computer',
    features: ['Multiple difficulty levels', 'AI opponents', 'Move suggestions', 'Game analysis']
  },
  {
    id: 'krunker',
    title: 'Krunker.io',
    description: 'Fast-paced multiplayer FPS with customizable classes and maps.',
    category: 'Shooting',
    thumbnailUrl: '/games/krunker.jpg',
    iframeUrl: 'https://krunker.io/',
    features: ['Multiple classes', 'Custom maps', 'Fast-paced action', 'Competitive gameplay']
  },
  {
    id: 'slither',
    title: 'Slither.io',
    description: 'Grow your snake by consuming glowing orbs while avoiding other players.',
    category: 'Sports',
    thumbnailUrl: '/games/slither.jpg',
    iframeUrl: 'https://slither.io/',
    features: ['Multiplayer action', 'Global leaderboard', 'Custom skins', 'Simple controls']
  },
  {
    id: 'gartic',
    title: 'Gartic.io',
    description: 'Draw and guess words in this multiplayer pictionary-style game.',
    category: 'Multiplayer',
    thumbnailUrl: '/games/gartic.jpg',
    iframeUrl: 'https://gartic.io/',
    features: ['Real-time drawing', 'Word guessing', 'Multiple languages', 'Chat system']
  },
  {
    id: 'wordle',
    title: 'Wordle Unlimited',
    description: 'Guess the hidden word in six tries with color-coded feedback.',
    category: 'Puzzle',
    thumbnailUrl: '/games/wordle.jpg',
    iframeUrl: 'https://wordleunlimited.org/',
    features: ['Daily challenges', 'Share results', 'Statistics tracking', 'Unlimited plays']
  }
];

export const getGamesByCategory = (category: GameCategory) => {
  return games.filter(game => game.category === category);
};

export const getGameById = (id: string) => {
  return games.find(game => game.id === id);
};

export const getAllCategories = (): GameCategory[] => {
  return Array.from(new Set(games.map(game => game.category)));
}; 