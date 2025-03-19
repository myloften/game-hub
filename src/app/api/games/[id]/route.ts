import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { params } = context;
  const id = await Promise.resolve(params.id);

  try {
    const game = await prisma.game.findUnique({
      where: { id },
      include: {
        ratings: {
          include: {
            user: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        },
      },
    });

    if (!game) {
      return NextResponse.json(
        { error: '游戏不存在' },
        { status: 404 }
      );
    }

    return NextResponse.json(game);
  } catch (error) {
    console.error('获取游戏信息失败:', error);
    return NextResponse.json(
      { error: '获取游戏信息失败' },
      { status: 500 }
    );
  }
} 