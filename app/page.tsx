'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Game } from '@/lib/types';
import GameCard from '@/components/game-card';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'Arcade',
    'Action',
    'Casual',
    'Sports',
    'Shooting',
    'Strategy'
  ];

  const { data: games, isLoading } = useQuery({
    queryKey: ['games'],
    queryFn: async () => {
      const { data } = await axios.get<Game[]>(`${process.env.NEXT_PUBLIC_API_URL}/games`);
      return data;
    },
  });

  const filteredGames = games?.filter(game => 
    selectedCategory === 'all' || game.genre === selectedCategory
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Games</h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
          >
            All Games
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <>
              <div className="animate-pulse bg-card rounded-lg aspect-[16/9]"></div>
              <div className="animate-pulse bg-card rounded-lg aspect-[16/9]"></div>
              <div className="animate-pulse bg-card rounded-lg aspect-[16/9]"></div>
            </>
          ) : (
            filteredGames?.map((game) => (
              <GameCard key={game.id} game={game} />
            ))
          )}
        </div>
      </div>
    </main>
  );
} 