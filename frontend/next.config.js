/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Định nghĩa URL API của bạn ở đây
    API_URL: 'http://127.0.0.1/antraveling/api',
  },
}

module.exports = nextConfig
