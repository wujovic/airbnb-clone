/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'spng.pngfind.com', 
      'upload.wikimedia.org',
      'media.worldnomads.com',
      'links.papareact.com'
    ]
  }
}

module.exports = nextConfig
