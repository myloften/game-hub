import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GameHub - Online Gaming Platform',
  description: 'Discover and experience exciting online games',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
