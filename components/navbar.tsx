'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export default function Navbar() {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold">
              GameHub
            </Link>
            <div className="hidden sm:flex sm:space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/leaderboard"
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
              >
                Leaderboard
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline">Sign In</Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 