/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
    },
    env: {
        RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
};

module.exports = nextConfig;
