import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: number;
    username: string;
    email: string;
  }

  interface Session {
    user: User & {
      id: number;
      username: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: number;
    username: string;
  }
} 