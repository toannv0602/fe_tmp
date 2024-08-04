/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Định nghĩa URL API của bạn ở đây
    API_URL: 'http://antravelvietnam.vn:8081/antraveling/api',
   // API_URL: 'http://localhost:8081/antraveling/api',

  },
}

module.exports = nextConfig
