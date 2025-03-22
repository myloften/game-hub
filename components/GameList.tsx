'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Game } from '@/lib/types';
import GameCard from './GameCard';

interface GameWithRatings extends Game {
  ratings: { value: number }[];
}

interface GameListProps {
  games: Game[];
}

export default function GameList({ games }: GameListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const categories = [
    'Arcade',
    'Action',
    'Casual',
    'Sports',
    'Shooting',
    'Strategy'
  ];

  const handleImageError = (gameId: string) => {
    setImageErrors(prev => ({
      ...prev,
      [gameId]: true
    }));
  };

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