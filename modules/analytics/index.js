const { resolve } = require('path')

module.exports = function module (moduleOptions) {
  const options = Object.assign({},this.options['analytics']|| {},moduleOptions|| {})

  this.addPlugin({
    src: resolve(__dirname, './plugin.js'),
    fileName: 'nuxt-lytics.js',
    options: options,
    ssr: false
  })
  
}
