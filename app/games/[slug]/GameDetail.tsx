'use client';

import { Game } from "@/lib/games-data";

interface GameDetailProps {
  game: Game;
}

export default function GameDetail({ game }: GameDetailProps) {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      {/* Game Header Section */}
      <header className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {game.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {game.description}
        </p>
      </header>

      {/* Game Iframe Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <iframe 
            src={game.iframeUrl}
            className="w-full h-full"
            allow="fullscreen; autoplay; encrypted-media"
            loading="lazy"
            title={game.title}
          />
        </div>
      </section>

      {/* Game Details Section */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          About The Game
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            {game.description}
          </p>
        </div>
      </section>

      {/* Game Features Section */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Key Features
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {game.features?.map((feature, index) => (
            <li 
              key={index}
              className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
            >
              <svg 
                className="w-6 h-6 text-green-500 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
} 