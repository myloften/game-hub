import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCategories, getGamesByCategory, type GameCategory } from '@/lib/games-data';
import { Suspense } from "react";
import { games } from "@/lib/games-data";
import GameList from "@/components/GameList";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: 'GameHub - Play Free Online Games',
  description: 'Discover and play the best free online games. From classic arcade games to modern multiplayer experiences.',
  openGraph: {
    title: 'GameHub - Free Online Games',
    description: 'Play the best free online games instantly in your browser.',
    type: 'website',
    url: 'https://game-hub.com',
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to GameHub
      </h1>
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchBar />
      </Suspense>
      <Suspense fallback={<div>Loading games...</div>}>
        <GameList initialGames={games} />
      </Suspense>
    </main>
  );
} 