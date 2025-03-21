@echo off
cd /d %~dp0
pm2 delete game-hub-server
pm2 start npm --name "game-hub-server" -- start
pm2 save 