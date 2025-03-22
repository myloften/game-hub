import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getGameById, games } from '@/lib/games-data';
import GameDetail from './GameDetail';

interface GameDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: GameDetailPageProps): Promise<Metadata> {
  const game = getGameById(params.slug);
  if (!game) return {};

  return {
    title: game.title,
    description: game.description,
  };
}

export default function GameDetailPage({ params }: GameDetailPageProps) {
  const game = getGameById(params.slug);
  if (!game) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading game details...</div>}>
      <GameDetail game={game} />
    </Suspense>
  );
} 