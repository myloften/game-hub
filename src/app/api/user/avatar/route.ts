import { getServerAuthSession } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const session = await getServerAuthSession();
    
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('avatar') as File;

    if (!file) {
      return new NextResponse('No file uploaded', { status: 400 });
    }

    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      return new NextResponse('Invalid file type', { status: 400 });
    }

    // 生成文件名
    const buffer = await file.arrayBuffer();
    const filename = `${session.user.id}-${Date.now()}.${file.type.split('/')[1]}`;
    
    // 保存文件
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    await writeFile(join(uploadDir, filename), Buffer.from(buffer));
    
    // 更新用户头像
    const updatedUser = await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        image: `/uploads/${filename}`,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Avatar upload error:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getServerAuthSession();
  // ... existing code ...
} 