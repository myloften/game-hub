import { Game } from '@/lib/types';

export async function getGames(query?: string): Promise<Game[]> {
  try {
    const url = query
      ? `${process.env.NEXT_PUBLIC_API_URL}/api/games/search?q=${encodeURIComponent(query)}`
      : `${process.env.NEXT_PUBLIC_API_URL}/api/games`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
} 