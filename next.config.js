// next.config.js

/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

module.exports = withPWA({
  reactStrictMode: false,
  images: {
    domains: [
      "img.youtube.com",
      "addplaybuttontoimage.way4info.net",
      "gshomesolutions.test",
    ],
  },
});
