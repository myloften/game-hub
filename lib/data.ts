export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  price: number;
  releaseDate: string;
}

export const categories = [
  { id: 'action', name: '动作' },
  { id: 'adventure', name: '冒险' },
  { id: 'rpg', name: 'RPG' },
  { id: 'strategy', name: '策略' },
  { id: 'sports', name: '体育' },
  { id: 'simulation', name: '模拟' },
];

export const games: Game[] = [
  {
    id: '1',
    title: '塞尔达传说：王国之泪',
    description: '在这款备受期待的续作中，继续林克的冒险。探索广阔的海拉鲁王国，揭开新的谜题和挑战。',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.jpg',
    category: 'action',
    price: 299,
    releaseDate: '2023-05-12',
  },
  {
    id: '2',
    title: '艾尔登法环',
    description: '一款由宫崎英高指导的开放世界动作RPG游戏。在广阔的世界中探索、战斗，成为尊贵者。',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg',
    category: 'rpg',
    price: 298,
    releaseDate: '2022-02-25',
  },
  {
    id: '3',
    title: '文明VI',
    description: '建立你的文明，书写历史。在这款回合制策略游戏中领导你的文明从石器时代走向信息时代。',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rcb.jpg',
    category: 'strategy',
    price: 199,
    releaseDate: '2016-10-21',
  },
  {
    id: '4',
    title: 'FIFA 24',
    description: '体验最真实的足球游戏。使用最新的球队和球员，在虚拟球场上一展身手。',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6t1p.jpg',
    category: 'sports',
    price: 298,
    releaseDate: '2023-09-29',
  },
  {
    id: '5',
    title: '模拟人生4',
    description: '创造和控制人物，建造房屋，发展关系，体验虚拟生活的方方面面。',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1l7h.jpg',
    category: 'simulation',
    price: 199,
    releaseDate: '2014-09-02',
  },
  {
    id: '6',
    title: '荒野大镖客：救赎2',
    description: '在这款开放世界游戏中体验美国西部的黄金时代，扮演亚瑟·摩根，经历一段史诗般的冒险。',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg',
    category: 'adventure',
    price: 199,
    releaseDate: '2018-10-26',
  },
  {
    id: '7',
    title: '只狼：影逝二度',
    description: '在这款动作冒险游戏中扮演独臂的忍者，体验紧张刺激的战斗和引人入胜的故事。',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rft.jpg',
    category: 'action',
    price: 268,
    releaseDate: '2019-03-22',
  },
  {
    id: '8',
    title: '女神异闻录5',
    description: '加入心之怪盗团，在这款风格独特的JRPG中体验学园生活和超自然冒险。',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7h.jpg',
    category: 'rpg',
    price: 299,
    releaseDate: '2016-09-15',
  },
]; 