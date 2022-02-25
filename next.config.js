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
  },
  env: {
    mapbox_key: 'pk.eyJ1Ijoid3Vqb3ZpYyIsImEiOiJjbDAybDRsM3gwMzd4M2RwMzVmdnFyMGY1In0.BLqWGq8ZrjDAJ4pCgCkZlA'
  }
}

module.exports = nextConfig
