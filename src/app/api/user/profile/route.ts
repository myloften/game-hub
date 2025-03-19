import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const { name, email } = body;

    // 验证邮箱格式
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new NextResponse('Invalid email format', { status: 400 });
    }

    // 检查邮箱是否已被使用
    if (email) {
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
          NOT: {
            id: session.user.id,
          },
        },
      });

      if (existingUser) {
        return new NextResponse('Email already in use', { status: 400 });
      }
    }

    // 更新用户信息
    const updatedUser = await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        name: name || null,
        email: email || undefined,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Profile update error:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
} 