import { prisma } from '@/lib/prisma';
import GameCard from '@/components/GameCard';
import SearchBar from '@/components/SearchBar';
import { Suspense } from 'react';
import { Prisma } from '@prisma/client';

type GameWithRatings = Prisma.GameGetPayload<{
  include: { ratings: true }
}>;

interface SearchPageProps {
  searchParams: { q?: string };
}

async function getSearchResults(query: string): Promise<GameWithRatings[]> {
  const searchQuery = query.toLowerCase();
  
  try {
    const games = await prisma.game.findMany({
      where: {
        OR: [
          { title: { contains: searchQuery } },
          { description: { contains: searchQuery } }
        ]
      },
      include: {
        ratings: true
      }
    });

    return games;
  } catch (error) {
    console.error('Search failed:', error);
    return [];
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  const games = query ? await getSearchResults(query) : [];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Search Games</h1>
        <SearchBar />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          {query ? `Search Results: "${query}"` : 'Enter search keywords'}
        </h2>
        
        <Suspense fallback={<div>Loading...</div>}>
          {games.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : query ? (
            <p className="text-gray-500">No games found</p>
          ) : null}
        </Suspense>
      </div>
    </main>
  );
} 