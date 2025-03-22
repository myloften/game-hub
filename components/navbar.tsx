'use client';

import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import SearchBar from '@/components/search-bar';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
              GameHub
            </Link>
            <div className="hidden sm:flex sm:space-x-8">
              <Link
                href="/"
                className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/leaderboard"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Leaderboard
              </Link>
            </div>
          </div>

          <div className="flex-1 max-w-xl px-8">
            <SearchBar />
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/auth/register"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Register
            </Link>
            <Link
              href="/auth/login"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Sign In
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 