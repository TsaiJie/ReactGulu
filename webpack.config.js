const path = require('path')
module.exports = {
  // 开发模式
  mode: 'production',
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

  module: {
    rules: [
      // 解释tsx
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
}
