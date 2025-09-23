@echo off
REM Eleos Wellness & Rehabilitation Centre - Deploy Script for cPanel (Windows)
REM This script builds the Next.js application and creates a .zip file for cPanel deployment

echo.
echo 🚀 Starting deployment process for Eleos Wellness & Rehabilitation Centre...
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ [ERROR] package.json not found. Please run this script from the project root directory.
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ [ERROR] Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ [ERROR] npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo 📦 [INFO] Installing dependencies...
npm install
if errorlevel 1 (
    echo ❌ [ERROR] Failed to install dependencies.
    pause
    exit /b 1
)

echo ✅ [SUCCESS] Dependencies installed successfully.

echo 🧹 [INFO] Cleaning previous builds...
if exist ".next" rmdir /s /q ".next"
if exist "out" rmdir /s /q "out"
if exist "deploy" rmdir /s /q "deploy"

mkdir deploy

echo 🔨 [INFO] Building the application...
npm run build
if errorlevel 1 (
    echo ❌ [ERROR] Build failed. Please check the build errors.
    pause
    exit /b 1
)

echo ✅ [SUCCESS] Application built successfully.

echo 📤 [INFO] Exporting static files...
npm run export
if errorlevel 1 (
    echo ❌ [ERROR] Static export failed. Please check the export errors.
    pause
    exit /b 1
)

echo ✅ [SUCCESS] Static files exported successfully.

echo 📁 [INFO] Preparing files for deployment...

REM Copy the out directory contents to deploy
xcopy /e /i /y "out\*" "deploy\"

REM Create .htaccess file for cPanel
echo # Eleos Wellness ^& Rehabilitation Centre - .htaccess for cPanel > deploy\.htaccess
echo. >> deploy\.htaccess
echo # Enable compression >> deploy\.htaccess
echo ^<IfModule mod_deflate.c^> >> deploy\.htaccess
echo     AddOutputFilterByType DEFLATE text/plain >> deploy\.htaccess
echo     AddOutputFilterByType DEFLATE text/html >> deploy\.htaccess
echo     AddOutputFilterByType DEFLATE text/xml >> deploy\.htaccess
echo     AddOutputFilterByType DEFLATE text/css >> deploy\.htaccess
echo     AddOutputFilterByType DEFLATE application/xml >> deploy\.htaccess
echo     AddOutputFilterByType DEFLATE application/xhtml+xml >> deploy\.htaccess
echo     AddOutputFilterByType DEFLATE application/rss+xml >> deploy\.htaccess
echo     AddOutputFilterByType DEFLATE application/javascript >> deploy\.htaccess
echo     AddOutputFilterByType DEFLATE application/x-javascript >> deploy\.htaccess
echo ^</IfModule^> >> deploy\.htaccess
echo. >> deploy\.htaccess
echo # Cache static assets >> deploy\.htaccess
echo ^<IfModule mod_expires.c^> >> deploy\.htaccess
echo     ExpiresActive on >> deploy\.htaccess
echo     ExpiresByType text/css "access plus 1 year" >> deploy\.htaccess
echo     ExpiresByType application/javascript "access plus 1 year" >> deploy\.htaccess
echo     ExpiresByType image/png "access plus 1 year" >> deploy\.htaccess
echo     ExpiresByType image/jpg "access plus 1 year" >> deploy\.htaccess
echo     ExpiresByType image/jpeg "access plus 1 year" >> deploy\.htaccess
echo     ExpiresByType image/gif "access plus 1 year" >> deploy\.htaccess
echo     ExpiresByType image/svg+xml "access plus 1 year" >> deploy\.htaccess
echo     ExpiresByType image/webp "access plus 1 year" >> deploy\.htaccess
echo     ExpiresByType font/woff "access plus 1 year" >> deploy\.htaccess
echo     ExpiresByType font/woff2 "access plus 1 year" >> deploy\.htaccess
echo ^</IfModule^> >> deploy\.htaccess
echo. >> deploy\.htaccess
echo # Security headers >> deploy\.htaccess
echo ^<IfModule mod_headers.c^> >> deploy\.htaccess
echo     Header always set X-Frame-Options "SAMEORIGIN" >> deploy\.htaccess
echo     Header always set X-Content-Type-Options "nosniff" >> deploy\.htaccess
echo     Header always set X-XSS-Protection "1; mode=block" >> deploy\.htaccess
echo     Header always set Referrer-Policy "strict-origin-when-cross-origin" >> deploy\.htaccess
echo     Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()" >> deploy\.htaccess
echo ^</IfModule^> >> deploy\.htaccess
echo. >> deploy\.htaccess
echo # Handle client-side routing >> deploy\.htaccess
echo RewriteEngine On >> deploy\.htaccess
echo RewriteBase / >> deploy\.htaccess
echo. >> deploy\.htaccess
echo # Handle Angular and React Router >> deploy\.htaccess
echo RewriteRule ^index\.html$ - [L] >> deploy\.htaccess
echo RewriteCond %%{REQUEST_FILENAME} !-f >> deploy\.htaccess
echo RewriteCond %%{REQUEST_FILENAME} !-d >> deploy\.htaccess
echo RewriteRule . /index.html [L] >> deploy\.htaccess
echo. >> deploy\.htaccess
echo # Custom error pages >> deploy\.htaccess
echo ErrorDocument 404 /index.html >> deploy\.htaccess
echo ErrorDocument 500 /index.html >> deploy\.htaccess

REM Create robots.txt
echo User-agent: * > deploy\robots.txt
echo Allow: / >> deploy\robots.txt
echo. >> deploy\robots.txt
echo # Sitemap >> deploy\robots.txt
echo Sitemap: https://yourdomain.com/sitemap.xml >> deploy\robots.txt

REM Create sitemap.xml
echo ^<?xml version="1.0" encoding="UTF-8"?^> > deploy\sitemap.xml
echo ^<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"^> >> deploy\sitemap.xml
echo     ^<url^> >> deploy\sitemap.xml
echo         ^<loc^>https://yourdomain.com/^</loc^> >> deploy\sitemap.xml
echo         ^<lastmod^>2024-01-01^</lastmod^> >> deploy\sitemap.xml
echo         ^<changefreq^>weekly^</changefreq^> >> deploy\sitemap.xml
echo         ^<priority^>1.0^</priority^> >> deploy\sitemap.xml
echo     ^</url^> >> deploy\sitemap.xml
echo     ^<url^> >> deploy\sitemap.xml
echo         ^<loc^>https://yourdomain.com/about^</loc^> >> deploy\sitemap.xml
echo         ^<lastmod^>2024-01-01^</lastmod^> >> deploy\sitemap.xml
echo         ^<changefreq^>monthly^</changefreq^> >> deploy\sitemap.xml
echo         ^<priority^>0.8^</priority^> >> deploy\sitemap.xml
echo     ^</url^> >> deploy\sitemap.xml
echo     ^<url^> >> deploy\sitemap.xml
echo         ^<loc^>https://yourdomain.com/services^</loc^> >> deploy\sitemap.xml
echo         ^<lastmod^>2024-01-01^</lastmod^> >> deploy\sitemap.xml
echo         ^<changefreq^>monthly^</changefreq^> >> deploy\sitemap.xml
echo         ^<priority^>0.8^</priority^> >> deploy\sitemap.xml
echo     ^</url^> >> deploy\sitemap.xml
echo     ^<url^> >> deploy\sitemap.xml
echo         ^<loc^>https://yourdomain.com/our-story^</loc^> >> deploy\sitemap.xml
echo         ^<lastmod^>2024-01-01^</lastmod^> >> deploy\sitemap.xml
echo         ^<changefreq^>monthly^</changefreq^> >> deploy\sitemap.xml
echo         ^<priority^>0.7^</priority^> >> deploy\sitemap.xml
echo     ^</url^> >> deploy\sitemap.xml
echo     ^<url^> >> deploy\sitemap.xml
echo         ^<loc^>https://yourdomain.com/contact^</loc^> >> deploy\sitemap.xml
echo         ^<lastmod^>2024-01-01^</lastmod^> >> deploy\sitemap.xml
echo         ^<changefreq^>monthly^</changefreq^> >> deploy\sitemap.xml
echo         ^<priority^>0.9^</priority^> >> deploy\sitemap.xml
echo     ^</url^> >> deploy\sitemap.xml
echo ^</urlset^> >> deploy\sitemap.xml

REM Get current date and time for filename
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
set "timestamp=%YYYY%%MM%%DD%_%HH%%Min%%Sec%"

set "zip_filename=eleos-wellness-%timestamp%.zip"

echo 📦 [INFO] Creating deployment package...

REM Create the ZIP file using PowerShell
powershell -command "Compress-Archive -Path 'deploy\*' -DestinationPath '%zip_filename%' -Force"

if errorlevel 1 (
    echo ❌ [ERROR] Failed to create ZIP file.
    pause
    exit /b 1
)

echo.
echo ✅ [SUCCESS] Deployment package created successfully!
echo.
echo 📦 Package Details:
echo    File: %zip_filename%
echo    Location: %cd%\%zip_filename%
echo.
echo 🚀 Ready for cPanel deployment!
echo.
echo 📋 Next Steps:
echo    1. Upload %zip_filename% to your cPanel File Manager
echo    2. Extract it in your public_html directory
echo    3. Update domain references in sitemap.xml and robots.txt
echo    4. Test your website
echo.
echo 📖 See DEPLOYMENT_INSTRUCTIONS.md in the deploy folder for detailed instructions.
echo.

echo ✅ [SUCCESS] Deployment script completed successfully! 🎉
echo.
pause
