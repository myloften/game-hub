@echo off
set BACKUP_DIR=D:\backups
set DB_FILE=sqlite.db
set DATE=%date:~0,4%%date:~5,2%%date:~8,2%

if not exist "%BACKUP_DIR%" mkdir "%BACKUP_DIR%"
copy "%DB_FILE%" "%BACKUP_DIR%\%DB_FILE%_%DATE%.bak"
echo Backup completed: %BACKUP_DIR%\%DB_FILE%_%DATE%.bak 