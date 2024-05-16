/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    output: 'standalone',
};

const withNextIntl = require("next-intl/plugin")(
    // This is the default (also the `src` folder is supported out of the box)
    "./i18n.ts",
    nextConfig
);

module.exports = withNextIntl;
