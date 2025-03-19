import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GameList from '@/components/GameList';
import { prisma } from '@/lib/prisma';
import { Game } from '@prisma/client';
import { authOptions } from '@/lib/auth';

interface GameWithRatings extends Game {
  ratings: {
    value: number;
  }[];
}

interface UserData {
  id: string;
  name: string | null;
  email: string | null;
  favorites: GameWithRatings[];
  playHistory: GameWithRatings[];
  ratedGames: GameWithRatings[];
}

async function getUserData(userId: string): Promise<UserData> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        favorites: {
          include: {
            game: {
              include: { ratings: true }
            }
          }
        },
        playHistory: {
          include: {
            game: {
              include: { ratings: true }
            }
          },
          orderBy: { playedAt: 'desc' }
        },
        ratings: {
          include: {
            game: {
              include: { ratings: true }
            }
          }
        }
      }
    });

    if (!user) {
      throw new Error('User not found');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      favorites: user.favorites.map(f => f.game as GameWithRatings),
      playHistory: user.playHistory.map(h => h.game as GameWithRatings),
      ratedGames: user.ratings.map(r => r.game as GameWithRatings)
    };
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    redirect('/login');
  }

  try {
    const userData = await getUserData(session.user.id);

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold mb-2">{userData.name || 'User'}</h1>
          <p className="text-gray-600">{userData.email}</p>
        </div>

        <Tabs defaultValue="favorites" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="history">Play History</TabsTrigger>
            <TabsTrigger value="ratings">My Ratings</TabsTrigger>
          </TabsList>

          <TabsContent value="favorites">
            <GameList
              games={userData.favorites}
              emptyMessage="No favorite games yet"
            />
          </TabsContent>

          <TabsContent value="history">
            <GameList
              games={userData.playHistory}
              emptyMessage="No play history yet"
            />
          </TabsContent>

          <TabsContent value="ratings">
            <GameList
              games={userData.ratedGames}
              emptyMessage="No rated games yet"
            />
          </TabsContent>
        </Tabs>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-red-500">Failed to load user data</h1>
        <p className="text-gray-600 mt-2">Please try again later</p>
      </div>
    );
  }
} 