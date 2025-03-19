import { notFound } from 'next/navigation';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import RatingSection from '@/components/game/RatingSection';
import FavoriteButton from '@/components/game/FavoriteButton';
import CommentSection from '@/components/game/CommentSection';
import GameFrame from '@/components/game/GameFrame';

interface Rating {
  value: number;
  user: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
  };
}

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  user: {
    name: string | null;
    email: string | null;
    image: string | null;
  };
}

interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  gameUrl: string;
  ratings: Rating[];
  comments: Comment[];
  favorites: Array<{ userId: string }>;
}

async function getGame(id: string): Promise<Game> {
  const game = await prisma.game.findUnique({
    where: { id },
    include: {
      ratings: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
        },
      },
      comments: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          user: {
            select: {
              name: true,
              email: true,
              image: true,
            },
          },
        },
      },
      favorites: {
        select: {
          userId: true,
        },
      },
    },
  });

  if (!game) {
    notFound();
  }

  // 将 Date 对象转换为字符串
  return {
    ...game,
    comments: game.comments.map(comment => ({
      ...comment,
      createdAt: comment.createdAt.toISOString(),
    })),
    ratings: game.ratings.map(rating => ({
      value: rating.value,
      user: {
        ...rating.user,
        image: rating.user.image || 'default-avatar', // Set default avatar
      },
    })),
  } as Game;
}

export default async function GamePage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  const game = await getGame(params.id);

  const averageRating =
    game.ratings.length > 0
      ? game.ratings.reduce((acc: number, curr: Rating) => acc + curr.value, 0) /
        game.ratings.length
      : 0;

  const userRating = session?.user?.id
    ? game.ratings.find((rating: Rating) => rating.user.id === session.user.id.toString())?.value
    : undefined;

  const isFavorited = session?.user?.id
    ? game.favorites.some(favorite => favorite.userId === session.user.id)
    : false;

  return (
    <div className="container py-8 space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-video">
          <Image
            src={game.imageUrl}
            alt={game.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{game.title}</h1>
            {session?.user?.id && (
              <FavoriteButton
                gameId={game.id}
                userId={session.user.id}
                initialFavorited={isFavorited}
              />
            )}
          </div>
          <p className="text-lg text-muted-foreground">{game.description}</p>
          <RatingSection
            gameId={game.id}
            initialRating={averageRating}
            totalRatings={game.ratings.length}
            userRating={userRating}
          />
        </div>
      </div>

      <GameFrame gameUrl={game.gameUrl} />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Comments</h2>
        <CommentSection
          gameId={game.id}
          initialComments={game.comments.map(comment => ({
            ...comment,
            user: {
              ...comment.user,
              image: comment.user.image || 'default-avatar',
            },
          }))}
        />
      </div>
    </div>
  );
} 