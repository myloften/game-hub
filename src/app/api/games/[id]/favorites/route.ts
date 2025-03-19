import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const id = await Promise.resolve(params.id);

  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { isFavorited: false }
      );
    }

    const favorite = await prisma.favorite.findUnique({
      where: {
        gameId_userId: {
          gameId: id,
          userId: session.user.id,
        },
      },
    });

    return NextResponse.json({
      isFavorited: !!favorite,
    });
  } catch (error) {
    console.error('获取收藏状态失败:', error);
    return NextResponse.json(
      { error: '获取收藏状态失败' },
      { status: 500 }
    );
  }
}

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
        { error: '请先登录' },
        { status: 401 }
      );
    }

    // 添加收藏
    await prisma.favorite.create({
      data: {
        gameId: id,
        userId: session.user.id,
      },
    });

    return NextResponse.json({
      isFavorited: true,
    });
  } catch (error) {
    console.error('添加收藏失败:', error);
    return NextResponse.json(
      { error: '添加收藏失败' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const id = await Promise.resolve(params.id);

  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: '请先登录' },
        { status: 401 }
      );
    }

    // 取消收藏
    await prisma.favorite.delete({
      where: {
        gameId_userId: {
          gameId: id,
          userId: session.user.id,
        },
      },
    });

    return NextResponse.json({
      isFavorited: false,
    });
  } catch (error) {
    console.error('取消收藏失败:', error);
    return NextResponse.json(
      { error: '取消收藏失败' },
      { status: 500 }
    );
  }
} 