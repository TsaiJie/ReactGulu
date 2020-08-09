const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
  // 开发模式 不会压缩代码
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GULU-UI-React',
      template: 'index.html',
    }),
  ],
})
