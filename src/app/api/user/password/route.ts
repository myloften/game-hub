import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const { currentPassword, newPassword } = body;

    // 获取用户信息
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        password: true,
      },
    });

    if (!user?.password) {
      return new NextResponse('User not found', { status: 404 });
    }

    // 验证当前密码
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return new NextResponse('Invalid current password', { status: 400 });
    }

    // 验证新密码长度
    if (newPassword.length < 6) {
      return new NextResponse('Password too short', { status: 400 });
    }

    // 加密新密码
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 更新密码
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    return new NextResponse('Password updated');
  } catch (error) {
    console.error('Password update error:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
} 