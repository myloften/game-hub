import { Suspense } from 'react';
import SearchBar from '@/components/SearchBar';
import GameList from '@/components/GameList';
import { getGames } from '@/lib/games';

async function GameListWrapper() {
  const games = await getGames();
  return <GameList initialGames={games} />;
}

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <Suspense fallback={<div>Loading search...</div>}>
          <SearchBar />
        </Suspense>
        <Suspense fallback={<div>Loading games...</div>}>
          <GameListWrapper />
        </Suspense>
      </div>
    </main>
  );
} 