'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Game } from '@/lib/types';
import GameCard from '@/components/game-card';

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
    selectedCategory === 'all' || game.category === selectedCategory
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="w-full max-w-7xl space-y-8">
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            All Games
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <>
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg aspect-[16/9]"></div>
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg aspect-[16/9]"></div>
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg aspect-[16/9]"></div>
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