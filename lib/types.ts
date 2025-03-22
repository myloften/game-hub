export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  ratings: Rating[];
  averageRating: number;
}

export interface Rating {
  id: string;
  value: number;
  userId: string;
  gameId: string;
  createdAt: Date;
  updatedAt: Date;
} 