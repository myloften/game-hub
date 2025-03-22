'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Game } from '@/lib/types';
import GameCard from '@/components/game-card';

export default function Home() {
  const { data: games, isLoading } = useQuery({
    queryKey: ['games'],
    queryFn: async () => {
      const { data } = await axios.get<Game[]>(`${process.env.NEXT_PUBLIC_API_URL}/games`);
      return data;
    },
  });

  return (
    <main className="container mx-auto py-4">
      <h1 className="text-4xl font-bold mb-8">Game Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <>
            <div className="animate-pulse bg-gray-200 rounded-lg h-48"></div>
            <div className="animate-pulse bg-gray-200 rounded-lg h-48"></div>
            <div className="animate-pulse bg-gray-200 rounded-lg h-48"></div>
          </>
        ) : (
          games?.map((game) => (
            <GameCard key={game.id} game={game} />
          ))
        )}
      </div>
    </main>
  );
} 