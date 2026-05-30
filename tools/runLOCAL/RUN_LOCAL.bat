@echo off
cd /d "%~dp0"
go build -ldflags="-H windowsgui" -o RUN_LOCAL.exe RUN_LOCAL.go
if errorlevel 1 (
    echo Error: Failed to build RUN_LOCAL.exe
    exit /b %errorlevel%
)
start "" RUN_LOCAL.exe

