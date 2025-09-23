# 🚀 Eleos Wellness & Rehabilitation Centre - Deployment Guide

This guide will help you deploy the Eleos Wellness website to cPanel hosting.

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)
- cPanel hosting account
- Basic knowledge of file management

## 🛠️ Available Deploy Scripts

### Linux/Mac Users
```bash
./deploy.sh
```

### Windows Users
```cmd
deploy.bat
```

## 📦 What the Deploy Script Does

1. **Installs Dependencies** - Runs `npm install`
2. **Builds the Application** - Runs `npm run build`
3. **Exports Static Files** - Creates static HTML files
4. **Creates Deployment Package** - Packages everything into a ZIP file
5. **Generates Configuration Files** - Creates .htaccess, robots.txt, and sitemap.xml

## 🎯 Generated Files

### Main Package
- `eleos-wellness-YYYYMMDD_HHMMSS.zip` - Complete deployment package

### Configuration Files
- `.htaccess` - Apache server configuration
- `robots.txt` - Search engine instructions
- `sitemap.xml` - Site structure for SEO
- `DEPLOYMENT_INSTRUCTIONS.md` - Detailed deployment steps

## 🌐 cPanel Deployment Steps

### Step 1: Upload the ZIP File
1. Log into your cPanel account
2. Open **File Manager**
3. Navigate to `public_html` (or your domain's root directory)
4. Upload the `eleos-wellness-*.zip` file

### Step 2: Extract the Files
1. Right-click on the ZIP file
2. Select **Extract** or **Unzip**
3. Choose **Extract files here** or create a new folder

### Step 3: Update Domain References
1. Open `sitemap.xml`
2. Replace `https://yourdomain.com` with your actual domain
3. Open `robots.txt`
4. Update the Sitemap URL if needed

### Step 4: Configure SSL (Optional)
1. If you have an SSL certificate, uncomment the HTTPS redirect lines in `.htaccess`
2. The lines to uncomment are:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Step 5: Test Your Website
1. Visit your domain in a web browser
2. Test all pages (Home, About, Services, Our Story, Contact)
3. Check that forms work correctly
4. Verify mobile responsiveness

## 🔧 Troubleshooting

### Common Issues

#### 1. 404 Errors on Page Refresh
**Solution**: The `.htaccess` file should handle this automatically. Make sure it's uploaded correctly.

#### 2. Images Not Loading
**Solution**: Check that the `_next/static/` directory was uploaded completely.

#### 3. CSS/JavaScript Not Loading
**Solution**: Ensure all files in the `_next/` directory are uploaded.

#### 4. Contact Form Not Working
**Solution**: The contact form is currently a demo. You'll need to:
- Set up a server-side form handler
- Configure email settings
- Or use a third-party form service like Formspree or Netlify Forms

## 📱 Features Included

- ✅ Responsive design for all devices
- ✅ SEO optimized with meta tags
- ✅ Fast loading with optimized assets
- ✅ Security headers configured
- ✅ Compression enabled
- ✅ Browser caching configured
- ✅ Accessible design

## 🎨 Customization

### Updating Content
1. Edit the files in the `app/` directory
2. Run the deploy script again
3. Upload the new ZIP file

### Changing Colors
1. Update the CSS variables in `app/globals.css`
2. Look for the `:root` section with color definitions
3. Rebuild and redeploy

### Adding New Pages
1. Create new files in the `app/` directory
2. Update the navigation in `components/organisms/Header.tsx`
3. Update `sitemap.xml`
4. Rebuild and redeploy

## 📞 Support

If you encounter any issues during deployment:

1. Check the browser console for errors
2. Verify all files were uploaded correctly
3. Ensure your hosting supports the required features
4. Contact your hosting provider if needed

## 🚀 Performance Tips

- The site is already optimized for production
- Images are compressed and optimized
- CSS and JavaScript are minified
- Static files are cached for better performance
- Gzip compression is enabled

## 🔒 Security Features

- XSS protection headers
- Content type sniffing protection
- Frame options configured
- Referrer policy set
- Permissions policy configured

---

**Generated**: $(date)  
**Version**: 1.0  
**Project**: Eleos Wellness & Rehabilitation Centre
