'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Game } from '@/lib/types';
import GameCard from './GameCard';
import { getGames } from '@/lib/games';

interface GameWithRatings extends Game {
  ratings: { value: number }[];
}

interface GameListProps {
  query?: string;
  initialGames?: Game[];
}

export default function GameList({ query, initialGames = [] }: GameListProps) {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [isLoading, setIsLoading] = useState(!initialGames.length);

  useEffect(() => {
    if (query !== undefined) {
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
    }
  }, [query]);

  if (isLoading) {
    return <div>Loading games...</div>;
  }

  if (!games.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 dark:text-gray-400">
          {query ? `No games found matching "${query}"` : 'No games available'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
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
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
} 