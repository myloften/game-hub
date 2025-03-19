import { useSession } from 'next-auth/react';

interface User {
  id: number;
  email: string;
  username: string;
}

interface UseUserReturn {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

export function useUser(): UseUserReturn {
  const { data: session, status } = useSession();

  return {
    user: session?.user as User | null,
    loading: status === 'loading',
    error: null,
  };
} 