/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com'
            },
        ],
        minimumCacheTTL: 60 * 60 * 24 * 30,
    },
};

export default nextConfig;
