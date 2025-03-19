import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { userId } = await request.json();

    if (userId !== session.user.id) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const favorite = await prisma.favorite.create({
      data: {
        userId: session.user.id,
        gameId: params.id,
      },
    });

    return NextResponse.json(favorite);
  } catch (error) {
    console.error('[FAVORITE_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { userId } = await request.json();

    if (userId !== session.user.id) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    await prisma.favorite.delete({
      where: {
        userId_gameId: {
          userId: session.user.id,
          gameId: params.id,
        },
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('[FAVORITE_DELETE]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
} 