export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  ratings: { value: number }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Rating {
  id: string;
  value: number;
  userId: string;
  gameId: string;
  createdAt: Date;
  updatedAt: Date;
} 