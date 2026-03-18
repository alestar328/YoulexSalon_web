/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo = 'YoulexSalon_web'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : undefined,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
