import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 添加请求拦截器，自动添加认证 token
api.interceptors.request.use((config) => {
  // 检查是否在浏览器环境中
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// 游戏相关 API
export const getGames = async () => {
  const response = await api.get('/api/games');
  return response.data;
};

export const getGame = async (id: string) => {
  const response = await api.get(`/api/games/${id}`);
  return response.data;
};

// 评分相关 API
export const getRatings = async (gameId: string) => {
  const response = await api.get(`/api/games/${gameId}/ratings`);
  return response.data;
};

export const createRating = async (gameId: string, value: number) => {
  const response = await api.post(`/api/games/${gameId}/ratings`, { value });
  return response.data;
};

export const updateRating = async (gameId: string, value: number) => {
  const response = await api.put(`/api/games/${gameId}/ratings`, { value });
  return response.data;
};

export const deleteRating = async (gameId: string) => {
  const response = await api.delete(`/api/games/${gameId}/ratings`);
  return response.data;
};

// 排行榜 API
export const getLeaderboard = async () => {
  const response = await api.get('/api/leaderboard');
  return response.data;
}; 