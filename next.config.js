/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
    TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    url_cv: process.env.NEXT_PUBLIC_URL_CV,
    NEXT_API_KEY_BLOGGER: process.env.NEXT_PUBLIC_API_KEY_BLOGGER,
    NEXT_BLOG_ID: process.env.NEXT_PUBLIC_BLOG_ID,
  },
  images: {
    loader: "default",
    domains: ["localhost", "avatars.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
});
