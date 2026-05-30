@echo off
cd /d "%~dp0"
go build -o RUN_NGROK.exe RUN_NGROK.go
if errorlevel 1 (
    echo Error: Failed to build RUN_NGROK.exe
    exit /b %errorlevel%
)
start "" RUN_NGROK.exe

