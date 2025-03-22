'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import GameList from '@/components/GameList';
import { Game } from '@/lib/types';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/games/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchGames();
    } else {
      setIsLoading(false);
    }
  }, [query]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Search Results for "{query}"
        </h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : games.length > 0 ? (
          <GameList games={games} />
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400">
            No games found matching your search.
          </div>
        )}
      </main>
    </Suspense>
  );
} 