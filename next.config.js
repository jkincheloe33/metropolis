const path = require('path')
const nextImages = require('next-images') // used as a wrapper to import svgs directly in Next.js

module.exports = nextImages({
  // Disables "X-Powered-By: Next.js" header to hide this from client
  poweredByHeader: false,
  env: {
    ROOTPATH: __dirname,
  },
  webpack: config => {
    // Aliases to simplify imports
    config.resolve.alias['@global'] = path.resolve(__dirname, '.', 'global')
    config.resolve.alias['@components'] = path.resolve(__dirname, '.', 'components')

    return config
  },
})
