/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    customKey: process.env.API_KEY,
  }
}

module.exports = nextConfig
