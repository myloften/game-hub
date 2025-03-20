import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // 处理 API 请求
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // 处理静态文件
  if (request.nextUrl.pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg)$/)) {
    return NextResponse.next();
  }

  // 处理其他请求
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 