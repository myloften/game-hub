import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Game Hub',
  description: 'A collection of fun games to play online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="min-h-screen bg-background">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
} 