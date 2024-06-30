/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Định nghĩa URL API của bạn ở đây
    API_URL: 'http://157.173.218.3/antraveling/api',
  },
}

module.exports = nextConfig
