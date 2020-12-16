
module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config
  },
  async redirects() {
    return [
      {
        source: '/characters/:id',
        destination: '/characters',
        permanent: true,
      },
      {
        source: '/series/:id',
        destination: '/series',
        permanent: true,
      },
      {
        source: '/comics/:id',
        destination: '/comics',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['i.annihil.us'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
  
}