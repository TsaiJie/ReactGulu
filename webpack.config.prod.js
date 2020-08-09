const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
  //  生产模式 会压缩代码
  mode: 'production',
  // 是外部的库 部署的时候使用的
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
})
