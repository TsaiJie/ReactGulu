const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 开发模式 不会压缩代码
  //  生产模式 会压缩代码
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GULU-UI-React',
      template: 'index.html',
    }),
  ],
  // 是外部的库
  externals: {
    react: {
      //  node
      commonjs: 'react',
      commonjs2: 'react',
      //  浏览器
      amd: 'react',
      // script的模式引入 window.React
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDom',
    },
  },
}
