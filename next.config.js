/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Asset prefix for deployment (uncomment and modify if needed)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/eleos-wellness' : '',
}

module.exports = nextConfig
