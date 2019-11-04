const withCSS = require('@zeit/next-css')
const debug = process.env.NODE_ENV !== 'production'

module.exports = withCSS({
  exportPathMap: function () {
    return {
    '/': { page: '/' },
    '/about': { page: '/about' },
    'contact': { page: '/contact' }
    }
  },
  assetPrefix: !debug ? 'https://gemamreza.github.io/blog/' : '',
  
  webpack: function (config) {

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
  
})