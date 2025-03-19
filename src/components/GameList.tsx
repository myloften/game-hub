'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { GameWithRatings, Rating } from '@/types';

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games
          .filter(game => selectedCategory === 'all' || game.category === selectedCategory)
          .map(game => {
            const averageRating = game.ratings && game.ratings.length > 0
              ? game.ratings.reduce((acc: number, rating: Rating) => acc + rating.value, 0) / game.ratings.length
              : 0;

            return (
              <Link key={game.id} href={`/games/${game.id}`} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <div className="relative h-48">
                    {imageErrors[game.id] ? (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <div className="text-gray-500 text-lg font-semibold">{game.title}</div>
                      </div>
                    ) : (
                      <Image
                        src={`/games/${game.imageUrl}`}
                        alt={`${game.title} preview`}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(game.id)}
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {game.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Rating: {averageRating.toFixed(1)} ★
                      </span>
                      <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
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