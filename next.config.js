const path = require('path')

module.exports = {
  webpack(config) {
    // Soporte para archivos SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // Alias @domains para Vercel
    config.resolve.alias['@domains'] = path.resolve(__dirname, 'src/domains')

    return config
  },
}
