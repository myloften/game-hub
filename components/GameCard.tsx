import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Game } from '@/lib/types';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const averageRating = game.ratings && game.ratings.length > 0
    ? game.ratings.reduce((acc, rating) => acc + rating.value, 0) / game.ratings.length
    : 0;

  return (
    <Link href={`/games/${game.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="relative h-48">
          <Image
            src={game.imageUrl}
            alt={`${game.title} preview`}
            fill
            className="object-cover"
          />
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
} 