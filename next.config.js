const path = require('path')

module.exports = {
  webpack(config) {
    // Soporte para archivos SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // Alias para @domains
    config.resolve.alias['@domains'] = path.resolve(__dirname, 'src/domains')

    return config
  },
}
