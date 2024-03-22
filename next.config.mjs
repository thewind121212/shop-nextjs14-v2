/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com'
            },
            {
            protocol: 'http',
            hostname: 'localhost'
            },
            {
            protocol: 'http',
            hostname: '10.10.0.217'
            }
        ],
        minimumCacheTTL: 60 * 60 * 24 * 30,
    },
};

export default nextConfig;
