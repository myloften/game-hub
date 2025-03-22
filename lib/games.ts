import { Game } from '@/lib/types';

export async function getGames(): Promise<Game[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/games`);
    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
} 