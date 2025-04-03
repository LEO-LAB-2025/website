/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: "/website",
    images: {
        domains: ['images.unsplash.com'],
    },
    env: {
        RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
    output: "export",
};

module.exports = nextConfig;
