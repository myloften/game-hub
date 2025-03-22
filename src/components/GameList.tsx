'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { GameWithRatings, Rating } from '@/types';
import { Star } from 'lucide-react';

interface GameListProps {
  games: GameWithRatings[];
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
        {games
          .filter(game => selectedCategory === 'all' || game.category === selectedCategory)
          .map(game => {
            const averageRating = game.ratings && game.ratings.length > 0
              ? game.ratings.reduce((acc: number, rating: Rating) => acc + rating.value, 0) / game.ratings.length
              : 0;

            return (
              <Link key={game.id} href={`/games/${game.id}`} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <div className="relative h-48">
                    {imageErrors[game.id] ? (
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <div className="text-gray-500 dark:text-gray-400 text-lg font-semibold">{game.title}</div>
                      </div>
                    ) : (
                      <Image
                        src={game.imageUrl}
                        alt={`${game.title} preview`}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(game.id)}
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {game.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
                      {game.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 mr-1" />
                        <span>{averageRating.toFixed(1)}</span>
                      </div>
                      <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 px-2 py-1 rounded">
                        {game.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}