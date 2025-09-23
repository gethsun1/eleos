#!/bin/bash

# Eleos Wellness & Rehabilitation Centre - Deploy Script for cPanel
# This script builds the Next.js application and creates a .zip file for cPanel deployment

echo "🚀 Starting deployment process for Eleos Wellness & Rehabilitation Centre..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    print_error "Failed to install dependencies."
    exit 1
fi

print_success "Dependencies installed successfully."

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf .next
rm -rf out
rm -rf deploy

# Create deploy directory
mkdir -p deploy

print_status "Building the application..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Build failed. Please check the build errors."
    exit 1
fi

print_success "Application built successfully."

print_status "Exporting static files..."
# With Next.js 13+ and output: 'export', the build command creates static files in 'out' directory
# No separate export command needed

print_success "Static files exported successfully."

# Copy files to deploy directory
print_status "Preparing files for deployment..."

# Copy the out directory contents to deploy
if [ -d "out" ]; then
    cp -r out/* deploy/
else
    print_error "Build output directory 'out' not found. Build may have failed."
    exit 1
fi

# Create .htaccess file for cPanel
cat > deploy/.htaccess << 'EOF'
# Eleos Wellness & Rehabilitation Centre - .htaccess for cPanel

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Redirect all traffic to HTTPS (uncomment if you have SSL)
# RewriteEngine On
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle client-side routing
RewriteEngine On
RewriteBase /

# Handle Angular and React Router
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Custom error pages
ErrorDocument 404 /index.html
ErrorDocument 500 /index.html
EOF

# Create robots.txt
cat > deploy/robots.txt << 'EOF'
User-agent: *
Allow: /

# Sitemap
Sitemap: https://yourdomain.com/sitemap.xml
EOF

# Create sitemap.xml
cat > deploy/sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://yourdomain.com/</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://yourdomain.com/about</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://yourdomain.com/services</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://yourdomain.com/our-story</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://yourdomain.com/contact</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
</urlset>
EOF

# Create a README for deployment instructions
cat > deploy/DEPLOYMENT_INSTRUCTIONS.md << 'EOF'
# Eleos Wellness & Rehabilitation Centre - Deployment Instructions

## cPanel Deployment Steps

1. **Upload the ZIP file** to your cPanel File Manager
2. **Extract the ZIP file** in your public_html directory (or subdomain directory)
3. **Update domain references** in sitemap.xml and robots.txt
4. **Configure SSL** if you have an SSL certificate
5. **Test the website** to ensure everything works correctly

## Files Included

- `index.html` - Main homepage
- `about/` - About page
- `services/` - Services page
- `our-story/` - Our Story page
- `contact/` - Contact page
- `_next/` - Next.js static assets
- `.htaccess` - Apache configuration for routing and optimization
- `robots.txt` - Search engine instructions
- `sitemap.xml` - Site structure for search engines

## Important Notes

- Make sure to update the domain in sitemap.xml and robots.txt
- The .htaccess file includes SEO and security optimizations
- All assets are optimized for production
- The site is fully responsive and accessible

## Support

For technical support, contact the development team.

Generated on: $(date)
EOF

# Get current date and time for filename
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ZIP_FILENAME="eleos-wellness-${TIMESTAMP}.zip"

print_status "Creating deployment package..."

# Create the ZIP file
cd deploy
zip -r "../${ZIP_FILENAME}" . -x "*.DS_Store" "*.git*" "node_modules/*"
cd ..

if [ $? -ne 0 ]; then
    print_error "Failed to create ZIP file."
    exit 1
fi

# Get file size
ZIP_SIZE=$(du -h "${ZIP_FILENAME}" | cut -f1)

print_success "Deployment package created successfully!"
echo ""
echo "📦 Package Details:"
echo "   File: ${ZIP_FILENAME}"
echo "   Size: ${ZIP_SIZE}"
echo "   Location: $(pwd)/${ZIP_FILENAME}"
echo ""
echo "🚀 Ready for cPanel deployment!"
echo ""
echo "📋 Next Steps:"
echo "   1. Upload ${ZIP_FILENAME} to your cPanel File Manager"
echo "   2. Extract it in your public_html directory"
echo "   3. Update domain references in sitemap.xml and robots.txt"
echo "   4. Test your website"
echo ""
echo "📖 See DEPLOYMENT_INSTRUCTIONS.md in the deploy folder for detailed instructions."
echo ""

# Clean up deploy directory (optional - uncomment if you want to keep it)
# print_status "Cleaning up temporary files..."
# rm -rf deploy

print_success "Deployment script completed successfully! 🎉"
