import { Game } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="relative aspect-video">
            <Image
              src={game.image || '/placeholder-game.jpg'}
              alt={game.name}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="line-clamp-1">{game.name}</CardTitle>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {game.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <Badge variant="secondary">{game.genre}</Badge>
          <p className="font-bold">
            {game.price === 0 ? 'Free' : `$${game.price.toFixed(2)}`}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
} 