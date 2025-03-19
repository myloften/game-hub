'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

interface RatingSectionProps {
  gameId: string;
  initialRating: number;
  totalRatings: number;
  currentUserRating?: number;
}

export default function RatingSection({
  gameId,
  initialRating = 0,
  totalRatings = 0,
  currentUserRating,
}: RatingSectionProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const [rating, setRating] = useState<number>(initialRating);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [userRating, setUserRating] = useState<number | undefined>(currentUserRating);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRate = async (value: number) => {
    if (!session?.user) {
      toast.error('Please sign in first');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/games/${gameId}/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Rating failed');
      }

      setUserRating(value);
      setRating(data.averageRating || 0);
      toast.success('Rating submitted successfully');
      router.refresh();
    } catch (error) {
      toast.error('Failed to submit rating. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayRating = typeof rating === 'number' ? rating : 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRate(value)}
            onMouseEnter={() => setHoveredRating(value)}
            onMouseLeave={() => setHoveredRating(0)}
            disabled={isSubmitting}
            className="disabled:opacity-50"
          >
            <Star
              className={`h-6 w-6 ${
                (hoveredRating ? value <= hoveredRating : value <= (userRating || displayRating))
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
      {userRating && (
        <p className="text-sm text-gray-600">
          Your rating: {userRating}
        </p>
      )}
      <p className="text-sm text-gray-600">
        Average rating: {displayRating.toFixed(1)} ({totalRatings} {totalRatings === 1 ? 'rating' : 'ratings'})
      </p>
    </div>
  );
} 