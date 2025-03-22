import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface GameDetailPageProps {
  params: {
    slug: string;
  };
}

// Example game data - in real app, this would come from your database/API
const gameData = {
  title: 'Pixel Adventure',
  description: 'Embark on an epic journey through a vibrant pixel world',
  iframeUrl: 'https://example.com/game-embed',
  canonicalUrl: 'https://game-hub.com/games/pixel-adventure',
  details: 'Experience the thrill of classic platforming with modern twists. Navigate through challenging levels, collect power-ups, and defeat unique enemies in this beautifully crafted pixel art world.',
  features: [
    'Multiple challenging levels',
    'Beautiful pixel art graphics',
    'Original soundtrack',
    'Unique power-up system'
  ]
};

export async function generateMetadata({ params }: GameDetailPageProps): Promise<Metadata> {
  return {
    title: `${gameData.title} - Play Online | GameHub`,
    description: gameData.description,
    openGraph: {
      title: gameData.title,
      description: gameData.description,
      type: 'website',
      url: gameData.canonicalUrl,
    },
    alternates: {
      canonical: gameData.canonicalUrl
    }
  };
}

export default function GameDetailPage({ params }: GameDetailPageProps) {
  if (!gameData) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      {/* Game Header Section */}
      <header className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {gameData.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {gameData.description}
        </p>
      </header>

      {/* Game Iframe Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <iframe 
            src={gameData.iframeUrl}
            className="w-full h-full"
            allow="fullscreen; autoplay; encrypted-media"
            loading="lazy"
            title={gameData.title}
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
            {gameData.details}
          </p>
        </div>
      </section>

      {/* Game Features Section */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Key Features
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gameData.features.map((feature, index) => (
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