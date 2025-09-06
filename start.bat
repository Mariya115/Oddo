@echo off
echo 🌱 Starting EcoFinds Application...
echo.

echo Checking if MongoDB is running...
netstat -an | findstr 27017 >nul
if %errorlevel% neq 0 (
    echo ❌ MongoDB is not running!
    echo.
    echo Please install and start MongoDB first:
    echo 1. Download from: https://www.mongodb.com/try/download/community
    echo 2. Install and start the MongoDB service
    echo 3. Or use MongoDB Atlas (cloud) and update backend/.env
    echo.
    echo See MONGODB_SETUP.md for detailed instructions
    pause
    exit /b 1
)

echo ✅ MongoDB is running
echo.

echo Starting backend server...
start "EcoFinds Backend" cmd /k "cd backend && npm run dev"

echo Waiting for backend to start...
timeout /t 3 /nobreak >nul

echo Starting frontend...
start "EcoFinds Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo 🎉 EcoFinds is starting up!
echo.
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
echo.
echo Press any key to exit...
pause >nul
