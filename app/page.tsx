'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Game } from '@/lib/types';
import GameCard from '@/components/game-card';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
  const { data: games, isLoading } = useQuery({
    queryKey: ['games'],
    queryFn: async () => {
      const { data } = await axios.get<Game[]>(`${process.env.NEXT_PUBLIC_API_URL}/games`);
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Game Hub</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline">Sign In</Button>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Games</h2>
          <div className="flex items-center gap-4">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Sort</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <>
              <div className="animate-pulse bg-card rounded-lg aspect-[16/9]"></div>
              <div className="animate-pulse bg-card rounded-lg aspect-[16/9]"></div>
              <div className="animate-pulse bg-card rounded-lg aspect-[16/9]"></div>
            </>
          ) : (
            games?.map((game) => (
              <GameCard key={game.id} game={game} />
            ))
          )}
        </div>
      </main>
    </div>
  );
} 