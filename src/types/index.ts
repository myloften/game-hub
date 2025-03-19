import { Prisma } from '@prisma/client';

export type GameWithRatings = Prisma.GameGetPayload<{
  include: { ratings: true }
}> & {
  averageRating: number;
};

export interface Rating {
  value: number;
  user: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
  };
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  user: {
    id: string;
    name: string | null;
  };
}

export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  iframeUrl: string;
  iframeWidth: number;
  iframeHeight: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GameWithRatings extends Game {
  ratings: Rating[];
}
