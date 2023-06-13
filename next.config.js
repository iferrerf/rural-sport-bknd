/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/pistas',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://rural-sport-bknd.vercel.app',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
