export interface Rating {
  id: string;
  value: number;
  userId: string;
  gameId: string;
  createdAt: Date;
  updatedAt: Date;
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
