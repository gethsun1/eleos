/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel serves the App Router API route used by the secure Groq assistant.
  // The public site remains pre-rendered wherever possible.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Asset prefix for deployment (uncomment and modify if needed)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/eleos-wellness' : '',
}

module.exports = nextConfig
