import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });
  
  // 清除认证 cookie
  response.cookies.delete('token');
  
  return response;
} 