export async function getGames() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/games`, {
      next: { revalidate: 60 }, // 缓存60秒
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }

    const games = await response.json();
    return games;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
} 