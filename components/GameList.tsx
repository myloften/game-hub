'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Game } from "@/lib/games-data";
import Link from "next/link";
import Image from "next/image";

interface GameListProps {
  initialGames: Game[];
}

export default function GameList({ initialGames }: GameListProps) {
  const searchParams = useSearchParams();
  const [games, setGames] = useState(initialGames);

  useEffect(() => {
    const query = searchParams.get('q')?.toLowerCase() || '';
    if (!query) {
      setGames(initialGames);
      return;
    }

    const filtered = initialGames.filter(game => 
      game.title.toLowerCase().includes(query) || 
      game.description.toLowerCase().includes(query)
    );
    setGames(filtered);
  }, [searchParams, initialGames]);

  if (games.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600 dark:text-gray-300">
          No games found. Try a different search term.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <Link
          key={game.id}
          href={`/games/${game.id}`}
          className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="aspect-video relative">
            <Image
              src={game.thumbnailUrl}
              alt={game.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {game.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
              {game.description}
            </p>
            <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Play Now
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 