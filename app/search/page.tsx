'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import GameList from '@/components/GameList';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Search Results for "{query}"
      </h1>
      <GameList query={query} />
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResults />
      </Suspense>
    </main>
  );
} 