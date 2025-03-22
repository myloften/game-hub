'use client';

import { Game } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
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
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {game.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
            {game.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
              {game.category}
            </span>
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1" />
              <span>{game.averageRating?.toFixed(1) || '0.0'}</span>
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Play Now
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 