import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getGameById, games } from '@/lib/games-data';
import GameDetail from './GameDetail';
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
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Games
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src={game.thumbnailUrl}
              alt={game.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {game.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {game.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 