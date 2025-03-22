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
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Free Online Games
        </h1>
        {categories.map((category) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {category} Games
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {getGamesByCategory(category).map((game) => (
                <Link
                  key={game.id}
                  href={`/games/${game.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={game.thumbnailUrl}
                      alt={game.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {game.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {game.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
} 