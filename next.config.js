const fs = require('fs');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

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
    PUBLIC_KEY: fs.readFileSync('keys/public.key', 'utf8'),
    PRIVATE_KEY: fs.readFileSync('keys/private.key', 'utf8')
  }
}