/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        hostname:"render.fineartamerica.com",
        hostname:"images.pexels.com"
      }
    ]
  }
}

module.exports = nextConfig
