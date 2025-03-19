import { getGames } from '@/lib/games';
import SearchBar from '@/components/SearchBar';
import GameList from '@/components/GameList';

export default async function Home() {
  const games = await getGames();

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <GameList games={games} />
    </main>
  );
}
