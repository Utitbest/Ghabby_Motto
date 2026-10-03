/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Images are the originals hosted on Cloudflare R2 (r2.galerimplus.com).
    // `unoptimized` makes the browser load those URLs directly, exactly as a
    // hotlinked CDN asset, instead of proxying them through the Next server.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2.galerimplus.com",
      },
    ],
  },
};

module.exports = nextConfig;
