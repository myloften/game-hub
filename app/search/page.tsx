'use client';

import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Game } from '@/lib/types';
import GameCard from '@/components/game-card';
import SearchBar from '@/components/search-bar';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const { data: games, isLoading } = useQuery({
    queryKey: ['games', query],
    queryFn: async () => {
      const { data } = await axios.get<Game[]>(`${process.env.NEXT_PUBLIC_API_URL}/games/search?q=${encodeURIComponent(query)}`);
      return data;
    },
    enabled: !!query,
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="w-full max-w-7xl space-y-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Search Games</h1>
          <SearchBar />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            {query ? `Search Results: "${query}"` : 'Enter search keywords'}
          </h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg aspect-[16/9]"></div>
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg aspect-[16/9]"></div>
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg aspect-[16/9]"></div>
            </div>
          ) : games && games.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : query ? (
            <p className="text-gray-500">No games found</p>
          ) : null}
        </div>
      </div>
    </main>
  );
} 