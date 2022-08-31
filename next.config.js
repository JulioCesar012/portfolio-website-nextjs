/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

module.exports = withPlugins([
  {
    env: {
      PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
      TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
      PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
      NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    },
    images: {
      loader: "default",
      domains: ["localhost"],
    },
  },
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV === "development",
        dest: "public",
        register: true,
        sw: "/sw.js",
      },
    },
  ],
]);
