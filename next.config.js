/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable server-side features that don't work with static export
  experimental: {
    esmExternals: false,
  },
  // Asset prefix for deployment (uncomment and modify if needed)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/eleos-wellness' : '',
}

module.exports = nextConfig