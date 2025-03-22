'use client';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getGames } from '@/lib/games';
import GameList from '@/components/GameList';
import type { Game } from '@/lib/types';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getGames(query);
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
        setGames([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, [query]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!games.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 dark:text-gray-400">
          No games found matching "{query}"
        </p>
      </div>
    );
  }

  return <GameList games={games} />;
}

export default function SearchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Search Results</h1>
        <Suspense fallback={<div>Loading search results...</div>}>
          <SearchResults />
        </Suspense>
      </div>
    </main>
  );
} 