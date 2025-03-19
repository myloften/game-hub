import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Check if game exists
    const game = await prisma.game.findUnique({
      where: { id: params.id },
    });

    if (!game) {
      return NextResponse.json(
        { error: 'Game not found' },
        { status: 404 }
      );
    }

    // Check if already favorited
    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        userId: session.user.id,
        gameId: params.id,
      },
    });

    if (existingFavorite) {
      return NextResponse.json(
        { error: 'Game already in favorites' },
        { status: 400 }
      );
    }

    // Add to favorites
    const favorite = await prisma.favorite.create({
      data: {
        userId: session.user.id,
        gameId: params.id,
      },
    });

    return NextResponse.json(favorite);
  } catch (error) {
    console.error('Error adding favorite:', error);
    return NextResponse.json(
      { error: 'Failed to add favorite' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Find the favorite to delete
    const favorite = await prisma.favorite.findFirst({
      where: {
        userId: session.user.id,
        gameId: params.id,
      },
    });

    if (!favorite) {
      return NextResponse.json(
        { error: 'Favorite not found' },
        { status: 404 }
      );
    }

    // Delete the favorite
    await prisma.favorite.delete({
      where: {
        id: favorite.id
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error removing favorite:', error);
    return NextResponse.json(
      { error: 'Failed to remove favorite' },
      { status: 500 }
    );
  }
} 