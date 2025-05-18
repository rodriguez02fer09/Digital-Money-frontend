const path = require('path')

module.exports = {
  webpack(config) {
    // Soporte para archivos SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // Alias para @domains (JS)
    config.resolve.alias['@domains'] = path.resolve(__dirname, 'src/domains')

    return config
  },

  // Alias para Sass
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    alias: {
      '@domains': path.join(__dirname, 'src/domains'),
    },
  },
}
