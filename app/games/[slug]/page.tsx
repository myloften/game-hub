import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGameById, games } from '@/lib/games-data';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const game = getGameById(params.slug);

  if (!game) {
    return {
      title: 'Game Not Found',
    };
  }

  return {
    title: game.title,
    description: game.description,
  };
}

export default function GameDetailPage({ params }: { params: { slug: string } }) {
  const game = getGameById(params.slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
            >
              ← Back to Games
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {game.title}
              </h1>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                {game.category}
              </span>
            </div>
          </div>

          <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
            <Image
              src={game.thumbnailUrl}
              alt={game.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
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
      </main>
    </div>
  );
} 