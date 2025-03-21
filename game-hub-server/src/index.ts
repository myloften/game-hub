import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';

const app = express();
const prisma = new PrismaClient();

// 跨域配置
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://your-app.pages.dev',
  credentials: true
}));

app.use(express.json());

// 路由
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 