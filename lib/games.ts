import prisma from '@/lib/prisma';

export async function getGames() {
  try {
    const games = await prisma.game.findMany({
      include: {
        ratings: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return games;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
} 