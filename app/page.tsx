import { Suspense } from 'react';
import { getGames } from '@/lib/games';
import SearchBar from '@/components/SearchBar';
import GameList from '@/components/GameList';

export default async function Home() {
  const games = await getGames();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <Suspense fallback={<div>Loading search...</div>}>
          <SearchBar />
        </Suspense>
        <GameList games={games} />
      </div>
    </main>
  );
} 