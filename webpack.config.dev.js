const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
  // 开发模式 不会压缩代码
  mode: 'development',
  entry: {
    example: './example.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GULU-UI-React',
      template: 'example.html',
    }),
  ],
})
