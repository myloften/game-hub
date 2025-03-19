import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

type GameWithRatings = Prisma.GameGetPayload<{
  include: { ratings: true }
}>;

export interface GameWithRating extends GameWithRatings {
  averageRating: number;
}

export async function getGames(): Promise<GameWithRating[]> {
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