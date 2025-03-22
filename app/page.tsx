import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCategories, getGamesByCategory, type GameCategory } from '@/lib/games-data';
import { Suspense } from "react";
import { games } from "@/lib/games-data";
import GameList from "@/components/GameList";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: 'GameHub - Play Free Online Games',
  description: 'Discover and play the best free online games. From classic arcade games to modern multiplayer experiences.',
  openGraph: {
    title: 'GameHub - Free Online Games',
    description: 'Play the best free online games instantly in your browser.',
    type: 'website',
    url: 'https://game-hub.com',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Play Amazing Games <br />
            <span className="text-yellow-400">Right in Your Browser</span>
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto opacity-90">
            Discover amazing free-to-play games. No downloads required - jump right into the action!
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
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
      </main>
    </div>
  );
} 