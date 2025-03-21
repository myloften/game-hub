import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getGames() {
  const response = await api.get('/api/games');
  return response.data;
}

export async function getGame(id: string) {
  const response = await api.get(`/api/games/${id}`);
  return response.data;
}

export async function getRatings(gameId: string) {
  const response = await api.get(`/api/games/${gameId}/ratings`);
  return response.data;
}

export async function createRating(gameId: string, value: number) {
  const response = await api.post(`/api/games/${gameId}/ratings`, { value });
  return response.data;
}

export async function updateRating(gameId: string, value: number) {
  const response = await api.put(`/api/games/${gameId}/ratings`, { value });
  return response.data;
}

export async function deleteRating(gameId: string) {
  const response = await api.delete(`/api/games/${gameId}/ratings`);
  return response.data;
}

export async function getLeaderboard() {
  const response = await api.get('/api/leaderboard');
  return response.data;
} 