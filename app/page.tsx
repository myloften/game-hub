import GameBrowser from '@/components/GameBrowser';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <GameBrowser />
      </Suspense>
    </main>
  );
} 