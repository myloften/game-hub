import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// Get game comments
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const id = await Promise.resolve(params.id);

  try {
    const comments = await prisma.comment.findMany({
      where: {
        gameId: id,
      },
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
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error('Failed to get comments:', error);
    return NextResponse.json(
      { error: 'Failed to get comments' },
      { status: 500 }
    );
  }
}

// Post new comment
export async function POST(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const id = await Promise.resolve(params.id);

  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Please sign in first' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const { content } = await request.json();

    if (!content?.trim()) {
      return NextResponse.json(
        { error: 'Comment cannot be empty' },
        { status: 400 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        gameId: id,
        userId: user.id,
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
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error('Failed to post comment:', error);
    return NextResponse.json(
      { error: 'Failed to post comment' },
      { status: 500 }
    );
  }
} 