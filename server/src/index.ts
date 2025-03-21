import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

// 中间件
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

// 验证 token 中间件
const authenticateToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: '未提供认证令牌' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'gh_2024_jwt_8f3a9b2c4d5e6f7a', (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ error: '无效的认证令牌' });
    }
    req.user = user;
    next();
  });
};

// 游戏相关路由
app.get('/api/games', async (req, res) => {
  try {
    const games = await prisma.game.findMany({
      include: {
        ratings: true
      }
    });
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: '获取游戏列表失败' });
  }
});

app.get('/api/games/:id', async (req, res) => {
  try {
    const game = await prisma.game.findUnique({
      where: { id: req.params.id },
      include: {
        ratings: true
      }
    });
    if (!game) {
      return res.status(404).json({ error: '游戏不存在' });
    }
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: '获取游戏详情失败' });
  }
});

// 评分相关路由
app.get('/api/games/:id/ratings', async (req, res) => {
  try {
    const ratings = await prisma.rating.findMany({
      where: { gameId: req.params.id }
    });
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: '获取评分失败' });
  }
});

app.post('/api/games/:id/ratings', authenticateToken, async (req, res) => {
  try {
    const { value } = z.object({ value: z.number().min(1).max(5) }).parse(req.body);
    const rating = await prisma.rating.create({
      data: {
        value,
        gameId: req.params.id,
        userId: req.user.id
      }
    });
    res.json(rating);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: '评分必须在 1-5 之间' });
    }
    res.status(500).json({ error: '创建评分失败' });
  }
});

app.put('/api/games/:id/ratings', authenticateToken, async (req, res) => {
  try {
    const { value } = z.object({ value: z.number().min(1).max(5) }).parse(req.body);
    const rating = await prisma.rating.update({
      where: {
        gameId_userId: {
          gameId: req.params.id,
          userId: req.user.id
        }
      },
      data: { value }
    });
    res.json(rating);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: '评分必须在 1-5 之间' });
    }
    res.status(500).json({ error: '更新评分失败' });
  }
});

app.delete('/api/games/:id/ratings', authenticateToken, async (req, res) => {
  try {
    await prisma.rating.delete({
      where: {
        gameId_userId: {
          gameId: req.params.id,
          userId: req.user.id
        }
      }
    });
    res.json({ message: '评分已删除' });
  } catch (error) {
    res.status(500).json({ error: '删除评分失败' });
  }
});

// 排行榜路由
app.get('/api/leaderboard', async (req, res) => {
  try {
    const games = await prisma.game.findMany({
      include: {
        ratings: true
      }
    });

    const leaderboard = games.map(game => ({
      id: game.id,
      title: game.title,
      averageRating: game.ratings.length > 0
        ? game.ratings.reduce((sum, rating) => sum + rating.value, 0) / game.ratings.length
        : 0,
      totalRatings: game.ratings.length
    }));

    leaderboard.sort((a, b) => b.averageRating - a.averageRating);
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: '获取排行榜失败' });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
}); 