import { Game } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.id}`} className="group">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-video">
          <Image
            src={game.image || '/placeholder-game.jpg'}
            alt={game.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">
            {game.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {game.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="bg-secondary/50 text-secondary-foreground text-xs px-2 py-1 rounded">
              {game.genre}
            </span>
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1" />
              <span>{game.rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90">
              Play Now
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
} 