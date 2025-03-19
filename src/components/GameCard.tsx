'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Prisma } from '@prisma/client';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

type GameWithRatings = Prisma.GameGetPayload<{
  include: { ratings: true }
}>;

interface GameCardProps {
  game: GameWithRatings;
}

export default function GameCard({ game }: GameCardProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isFavorited, setIsFavorited] = useState(false);
  const [isTogglingFavorite, setIsTogglingFavorite] = useState(false);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      if (!session?.user) return;
      try {
        const res = await fetch(`/api/games/${game.id}/favorites`);
        const data = await res.json();
        setIsFavorited(data.isFavorited);
      } catch (error) {
        console.error('Failed to get favorite status:', error);
      }
    };
    checkFavoriteStatus();
  }, [game.id, session?.user]);

  const handleToggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation
    if (!session) {
      router.push('/login');
      return;
    }

    setIsTogglingFavorite(true);
    try {
      const res = await fetch(`/api/games/${game.id}/favorites`, {
        method: 'POST',
      });
      const data = await res.json();
      setIsFavorited(data.isFavorited);
    } catch (error) {
      console.error('Failed to update favorite status:', error);
    } finally {
      setIsTogglingFavorite(false);
    }
  };

  const averageRating = game.ratings.length > 0
    ? game.ratings.reduce((sum, rating) => sum + rating.value, 0) / game.ratings.length
    : 0;

  return (
    <Link href={`/games/${game.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={game.imageUrl}
            alt={game.title}
            fill
            className="object-cover"
          />
          {session?.user && (
            <button
              onClick={handleToggleFavorite}
              className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            >
              <Heart
                className={cn(
                  'h-5 w-5 transition-colors',
                  isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'
                )}
              />
            </button>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400">
            {game.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
            {game.description}
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
              {game.category}
            </span>
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1" />
              <span>{averageRating.toFixed(1)}</span>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href={`/games/${game.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Play Now
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
} 