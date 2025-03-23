import { getGameById } from '@/lib/games-data';
import Image from 'next/image';

export default function GameDetail({ slug }: { slug: string }) {
  const game = getGameById(slug);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Game Title and Category */}
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold">{game.title}</h1>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {game.category}
        </span>
      </div>

      {/* Game Description */}
      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
        {game.description}
      </p>

      {/* Game Features */}
      {game.features && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Game Features</h2>
          <ul className="grid grid-cols-2 gap-4">
            {game.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Game Screenshots */}
      {game.screenshots && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {game.screenshots.map((screenshot, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={screenshot}
                  alt={`${game.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Play Button */}
      <a
        href={game.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
      >
        Play Now
      </a>
    </div>
  );
} 