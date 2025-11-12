@echo off
echo 🚀 Setting up Task Management Application...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully
) else (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Create .env file if it doesn't exist
if not exist .env (
    echo 📝 Creating .env file...
    (
        echo VITE_API_URL=/api
        echo VITE_APP_TITLE=Task Management App
        echo VITE_APP_VERSION=1.0.0
    ) > .env
    echo ✅ .env file created
)

echo.
echo 🎉 Setup complete! You can now run:
echo   npm run dev     - Start development server
echo   npm run build   - Build for production
echo   npm run test    - Run tests
echo.
echo Demo credentials:
echo   Username: test
echo   Password: test123
echo.
pause
