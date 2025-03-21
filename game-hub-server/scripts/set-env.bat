@echo off
echo Setting environment variables...

:: 设置数据库配置
setx DATABASE_URL "file:./sqlite.db" /M
echo Set DATABASE_URL

:: 设置 JWT 配置
setx JWT_SECRET "gh_2024_jwt_8f3a9b2c4d5e6f7a" /M
echo Set JWT_SECRET

:: 设置跨域配置
setx FRONTEND_URL "https://game-hub-5hw.pages.dev" /M
echo Set FRONTEND_URL

:: 设置服务器配置
setx PORT "3000" /M
echo Set PORT

:: 设置 NextAuth 配置
setx NEXTAUTH_URL "https://game-hub-5hw.pages.dev" /M
echo Set NEXTAUTH_URL

setx NEXTAUTH_SECRET "gh_2024_nextauth_1b2c3d4e5f6g7h8i" /M
echo Set NEXTAUTH_SECRET

echo.
echo Verifying environment variables...
echo.
echo DATABASE_URL: %DATABASE_URL%
echo JWT_SECRET: %JWT_SECRET%
echo FRONTEND_URL: %FRONTEND_URL%
echo PORT: %PORT%
echo NEXTAUTH_URL: %NEXTAUTH_URL%
echo NEXTAUTH_SECRET: %NEXTAUTH_SECRET%
echo.
echo Environment variables set successfully!
echo Please restart your command prompt for changes to take effect. 