import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  console.log('Received login request:', { email });

  // Validate required fields
  if (!email || !password) {
    console.log('Missing required fields');
    return NextResponse.json(
      { error: 'Please fill in all required fields' },
      { status: 400 }
    );
  }

  try {
    // Find user
    const user = await prisma.user.findUnique({ where: { email } });
    console.log('Find user result:', user ? 'User exists' : 'User not found');

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Verify password
    console.log('Starting password verification...');
    const isValidPassword = await compare(password, user.password);
    console.log('Password verification result:', isValidPassword ? 'Password correct' : 'Password incorrect');

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Get display name
    const displayName = user.name || user.email;

    // Generate JWT token
    console.log('Generating JWT token...');
    const token = sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'default-secret',
      { expiresIn: '7d' }
    );

    // Set cookie
    const cookieStore = cookies();
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    console.log('Login successful');
    return NextResponse.json({ success: true, user: { id: user.id, email: user.email, name: displayName } });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed. Please try again later' },
      { status: 500 }
    );
  }
} 