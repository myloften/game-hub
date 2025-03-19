'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';

export default function Navbar() {
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-gray-800">
              GameHub
            </Link>
            <div className="hidden sm:flex sm:space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/leaderboard"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Leaderboard
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-64">
              <SearchBar />
            </div>
            {isLoading ? (
              <div className="h-8 w-8 animate-pulse bg-gray-200 rounded-full" />
            ) : session?.user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/profile" 
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >
                  {session.user.name || 'User'}
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="ghost" size="sm">Sign In</Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 