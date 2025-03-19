import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';

interface Game {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  averageRating?: number;
  favoritesCount?: number;
  playsCount?: number;
}

interface LeaderboardSection {
  title: string;
  games: Game[];
  metricLabel: string;
  metricValue: (game: Game) => string | number;
}

async function getTopRatedGames(): Promise<Game[]> {
  const games = await prisma.game.findMany({
    include: {
      ratings: true,
    },
  });

  return games.map(game => ({
    ...game,
    averageRating: game.ratings.length > 0
      ? game.ratings.reduce((sum, rating) => sum + rating.value, 0) / game.ratings.length
      : 0
  }))
  .sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0))
  .slice(0, 10);
}

async function getMostFavoritedGames(): Promise<Game[]> {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          favorites: true
        }
      }
    }
  });

  return games.map(game => ({
    ...game,
    favoritesCount: game._count.favorites
  }))
  .sort((a, b) => (b.favoritesCount || 0) - (a.favoritesCount || 0))
  .slice(0, 10);
}

async function getMostPlayedGames(): Promise<Game[]> {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          playHistory: true
        }
      }
    }
  });

  return games.map(game => ({
    ...game,
    playsCount: game._count.playHistory
  }))
  .sort((a, b) => (b.playsCount || 0) - (a.playsCount || 0))
  .slice(0, 10);
}

function LeaderboardSection({ title, games, metricLabel, metricValue }: LeaderboardSection) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="space-y-4">
        {games.map((game, index) => (
          <Link key={game.id} href={`/games/${game.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex items-center p-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={game.imageUrl}
                    alt={game.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{game.title}</h3>
                  <p className="text-sm text-gray-500">{game.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{metricValue(game)}</div>
                  <div className="text-sm text-gray-500">{metricLabel}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default async function LeaderboardPage() {
  const [topRated, mostFavorited, mostPlayed] = await Promise.all([
    getTopRatedGames(),
    getMostFavoritedGames(),
    getMostPlayedGames(),
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-bold mb-8">Game Leaderboard</h1>

      <LeaderboardSection
        title="Top Rated Games"
        games={topRated}
        metricLabel="Average Rating"
        metricValue={(game) => (game.averageRating || 0).toFixed(1)}
      />

      <LeaderboardSection
        title="Most Popular Games"
        games={mostFavorited}
        metricLabel="Favorites"
        metricValue={(game) => game.favoritesCount || 0}
      />

      <LeaderboardSection
        title="Most Played Games"
        games={mostPlayed}
        metricLabel="Total Plays"
        metricValue={(game) => game.playsCount || 0}
      />
    </div>
  );
} 