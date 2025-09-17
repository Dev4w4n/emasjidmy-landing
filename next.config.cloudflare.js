/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    reactStrictMode: true,
    compress: true,
    images: { 
        unoptimized: true, // Required for static export
        minimumCacheTTL: 60, 
        formats: ['image/avif', 'image/webp'] 
    },
    // Disable server-side features for static export
    experimental: {
        appDir: true
    }
}

module.exports = nextConfig