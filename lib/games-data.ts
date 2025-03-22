export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  slug: string;
  url: string;
}

export const games: Game[] = [
  {
    id: "1",
    title: "2048",
    description: "Join the numbers and get to the 2048 tile! Swipe to move all tiles. When two tiles with the same number touch, they merge into one!",
    thumbnailUrl: "https://play-lh.googleusercontent.com/g3RY-0eFdTgOsNtBjGvtLYfHFTAf_0YR1P_ykXKYzlaXAE_O6K-8kExQzOADKuKTCA=w240-h480-rw",
    slug: "2048",
    url: "https://play2048.co/"
  },
  {
    id: "2",
    title: "Tetris",
    description: "The classic puzzle game where you arrange falling blocks to create complete lines. Clear as many lines as possible to achieve a high score!",
    thumbnailUrl: "https://play-lh.googleusercontent.com/za2Nu_qjMw5GzWfbzet4zrnZY0tpbqwLYSxkCa7TQd5zP7yl3pGesktBQgvhQwYnkPU=w240-h480-rw",
    slug: "tetris",
    url: "https://tetris.com/play-tetris"
  },
  {
    id: "3",
    title: "Snake",
    description: "Guide the snake to eat food and grow longer, but don't hit the walls or your own tail! A timeless classic that's simple yet addictive.",
    thumbnailUrl: "https://play-lh.googleusercontent.com/RxaUuXrZVl4JxqWEJJ_SGWJdD1xVdYF2OQWQP-LS1oZaY5F6GtqJGxYBBkmmjBYLnw=w240-h480-rw",
    slug: "snake",
    url: "https://playsnake.org/"
  },
  {
    id: "4",
    title: "Minesweeper",
    description: "Test your logic and memory in this classic puzzle game. Clear the minefield without detonating any bombs using number clues on the tiles.",
    thumbnailUrl: "https://play-lh.googleusercontent.com/PXIxXWfO5J6TMp4kXKVbYQ3bqL6_iC-mNM0qLwUWNQUlvDZEGXhMW0f6O8QyHxHYtg=w240-h480-rw",
    slug: "minesweeper",
    url: "https://minesweeper.online/"
  }
];

export function getGameById(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}

export function getAllCategories(): GameCategory[] {
  return Array.from(new Set(games.map(game => game.category)));
}

export function getGamesByCategory(category: GameCategory): Game[] {
  return games.filter(game => game.category === category);
} 