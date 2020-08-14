const path = require('path')
module.exports = {
  // 入口
  entry: {
    index: './lib/index.tsx',
  },
  // 出口
  output: {
    // 出口路径
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'GULU',
    //把我们的代码封装成 umd的模块定义，兼容性最强
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      // 解释tsx
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }, {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },

}

