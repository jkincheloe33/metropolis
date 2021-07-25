const path = require(`path`)

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@global': path.resolve(__dirname, 'src/global'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
}
