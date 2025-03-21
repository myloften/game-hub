@echo off
echo Starting deployment...

:: 安装依赖
echo Installing dependencies...
call npm install

:: 生成 Prisma 客户端
echo Generating Prisma client...
call npx prisma generate

:: 创建数据库
echo Creating database...
call npx prisma db push

:: 构建项目
echo Building project...
call npm run build

:: 使用 PM2 启动服务
echo Starting service with PM2...
call pm2 start npm --name "game-hub-server" -- start

:: 保存 PM2 进程列表
echo Saving PM2 process list...
call pm2 save

echo Deployment completed! 