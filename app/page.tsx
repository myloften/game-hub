import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCategories, getGamesByCategory, type GameCategory } from '@/lib/games-data';

export const metadata: Metadata = {
  title: 'GameHub - Play Free Online Games',
  description: 'Discover and play the best free online games. From classic arcade games to modern multiplayer experiences.',
  openGraph: {
    title: 'GameHub - Free Online Games',
    description: 'Play the best free online games instantly in your browser.',
    type: 'website',
    url: 'https://game-hub.com',
  },
  metadataBase: new URL('https://game-hub.com'),
};

export default function Home() {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          Free Online Games
        </h1>

        {categories.map((category) => {
          const games = getGamesByCategory(category);
          return (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-2">{category} Games</span>
                <span className="text-sm font-normal text-gray-500">
                  ({games.length} games)
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {games.map((game) => (
                  <Link
                    key={game.id}
                    href={`/games/${game.slug}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-200"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={game.thumbnailUrl}
                        alt={game.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-200"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition duration-200">
                        {game.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {game.description}
                      </p>
                      {game.features && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {game.features.slice(0, 2).map((feature, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
} 