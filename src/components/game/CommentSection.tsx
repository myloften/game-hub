'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { formatDate } from '@/lib/utils';
import { toast } from 'sonner';

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  user: {
    id: string;
    name: string | null;
  };
}

interface CommentSectionProps {
  gameId: string;
  initialComments: Comment[];
}

export default function CommentSection({ gameId, initialComments }: CommentSectionProps) {
  const { data: session } = useSession();
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session?.user) {
      toast.error('Please sign in first');
      return;
    }

    if (!newComment.trim()) {
      toast.error('Please enter a comment');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/games/${gameId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment }),
      });

      if (!response.ok) {
        throw new Error('Failed to post comment');
      }

      const data = await response.json();
      setComments([data, ...comments]);
      setNewComment('');
      toast.success('Comment posted successfully');
    } catch (error) {
      toast.error('Failed to post comment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {session?.user && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            className="min-h-[100px]"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Posting...' : 'Post Comment'}
          </Button>
        </form>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">
                {comment.user.name || 'Anonymous'}
              </span>
              <span className="text-sm text-gray-500">
                {formatDate(new Date(comment.createdAt))}
              </span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-center text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
} 