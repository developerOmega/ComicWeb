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
  env: {
    PUBLIC_KEY: fs.readFileSync('keys/public.key', 'utf8'),
    PRIVATE_KEY: fs.readFileSync('keys/private.key', 'utf8')
  }
}