/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Registry',
    description: 'Custom Kasm Workspaces Registry.',
    icon: '/img/logo.svg',
    listUrl: 'https://francescoservida.ch/kasm-registry',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
