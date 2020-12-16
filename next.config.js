
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
  env: {
    PUBLIC_KEY: 'cfd24420303411073f002d1d39e26031',
    PRIVATE_KEY: '302757dec4320cb2853505f9a0eb522e2f29f635'
  }
}