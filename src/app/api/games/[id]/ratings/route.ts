import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Rating } from '@prisma/client';

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const id = await Promise.resolve(params.id);

  try {
    const ratings = await prisma.rating.findMany({
      where: {
        gameId: id,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });

    // 计算平均分
    const totalRatings = ratings.length;
    const averageScore = totalRatings > 0
      ? ratings.reduce((sum: number, rating: Rating) => sum + rating.value, 0) / totalRatings
      : 0;

    return NextResponse.json({
      ratings,
      averageScore,
      totalRatings,
    });
  } catch (error) {
    console.error('获取评分失败:', error);
    return NextResponse.json(
      { error: '获取评分失败' },
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

    const { value } = await request.json();
    if (typeof value !== 'number' || value < 1 || value > 5) {
      return NextResponse.json(
        { error: '评分必须在1-5之间' },
        { status: 400 }
      );
    }

    // 更新或创建评分
    await prisma.rating.upsert({
      where: {
        gameId_userId: {
          gameId: id,
          userId: session.user.id,
        },
      },
      update: {
        value,
      },
      create: {
        value,
        gameId: id,
        userId: session.user.id,
      },
    });

    // 重新计算平均分
    const ratings = await prisma.rating.findMany({
      where: {
        gameId: id,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });

    const totalRatings = ratings.length;
    const averageScore = ratings.reduce((sum: number, rating: Rating) => sum + rating.value, 0) / totalRatings;

    return NextResponse.json({
      ratings,
      averageScore,
      totalRatings,
    });
  } catch (error) {
    console.error('评分失败:', error);
    return NextResponse.json(
      { error: '评分失败' },
      { status: 500 }
    );
  }
} 