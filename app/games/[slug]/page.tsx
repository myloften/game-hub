import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGameById, games } from '@/lib/games-data';
import Image from "next/image";
import Link from "next/link";

interface GameDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: GameDetailPageProps): Promise<Metadata> {
  const game = getGameById(params.slug);
  if (!game) return { title: "Game Not Found" };
  return { title: game.title };
}

export default function GameDetailPage({ params }: GameDetailPageProps) {
  const game = getGameById(params.slug);
  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Games
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src={game.thumbnailUrl}
              alt={game.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {game.title}
              </h1>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {game.category}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {game.description}
            </p>
            <a
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Play Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 