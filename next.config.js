/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    output: 'standalone',
    reactStrictMode: true,
    compress: true,
    images: { minimumCacheTTL: 60, formats: ['image/avif', 'image/webp'] }
}

module.exports = nextConfig
