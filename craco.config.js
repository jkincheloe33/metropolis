const path = require(`path`)

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@theme': path.resolve(__dirname, 'src/global/theme'),
    },
  },
}
