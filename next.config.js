/** @type {import('next').NextConfig} */

// @ts-check
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  reactStrictMode: false,
  i18n,
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
