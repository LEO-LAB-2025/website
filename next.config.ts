/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    // Priority: Explicit env var > production default > development empty
    basePath: process.env.BASE_PATH || (isProd ? "/website" : ""),
    images: {
        domains: ['images.unsplash.com', 'leo-lab-2025.github.io'],
        unoptimized: true,
    },
    env: {
        // We expose this for non-Next components (like raw <video> tags)
        NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH || (isProd ? "/website" : ""),
        RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
    output: "export",
};

module.exports = nextConfig;
