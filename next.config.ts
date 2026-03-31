/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? "/website" : "",
    images: {
        domains: ['images.unsplash.com'],
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? "/website" : "",
        RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
    output: "export",
};

module.exports = nextConfig;
