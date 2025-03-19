import { prisma } from '@/lib/prisma';
import { GameWithRatings } from '@/types';

export async function getGames(): Promise<GameWithRatings[]> {
  try {
    const games = await prisma.game.findMany({
      include: {
        ratings: true
      }
    });

    return games.map((game) => ({
      ...game,
      averageRating: game.ratings.length > 0
        ? game.ratings.reduce((acc, curr) => acc + curr.value, 0) / game.ratings.length
        : 0
    }));
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
} 