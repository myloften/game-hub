'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface FavoriteButtonProps {
  gameId: string;
  userId: string;
  initialFavorited?: boolean;
}

export default function FavoriteButton({
  gameId,
  userId,
  initialFavorited = false,
}: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(initialFavorited);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const response = await fetch(`/api/games/${gameId}/favorites`);
        if (response.ok) {
          const data = await response.json();
          setIsFavorited(data.isFavorited);
        }
      } catch (error) {
        console.error('Failed to get favorite status:', error);
      }
    };

    if (!initialFavorited) {
      checkFavoriteStatus();
    }
  }, [gameId, userId, initialFavorited]);

  const handleFavorite = async () => {
    if (!userId) {
      toast.error('Please sign in first');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/api/games/${gameId}/favorites`, {
        method: isFavorited ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Operation failed');
      }

      setIsFavorited(!isFavorited);
      toast.success(isFavorited ? 'Removed from favorites' : 'Added to favorites');
      router.refresh();
    } catch (error) {
      toast.error('Operation failed, please try again');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleFavorite}
      disabled={isLoading}
      className={isFavorited ? 'text-red-500' : ''}
    >
      <Heart className={isFavorited ? 'fill-current' : ''} />
    </Button>
  );
} 