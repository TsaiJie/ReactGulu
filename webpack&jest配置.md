## webpack

```bash
# --dev 只给程序员用
# --save 用户那边也需要用 默认是 --save
yarn add webpack webpack-cli --dev
yarn add webpack-dev-server --dev
yarn add html-webpack-plugin --dev
```

创建 webpack 配置

```js
// webpack.config.js
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
      },
    ],
  },
}
```

配置 ts

```json
// tsconfig.json
{
  "compilerOptions": {
    // 生成的声明文件打包到dist
    "outDir": "dist",
    "declaration": true,
    "baseUrl": ".",
    "module": "esnext",
    "target": "es5",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "jsx": "react",
    "moduleResolution": "node",
    "rootDir": ".",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "importHelpers": true,
    "strictNullChecks": true,
    // "suppressImplicitAnyIndexErrors": true,
    // https://github.com/Microsoft/TypeScript/issues/28762#issuecomment-443406607
    // "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "noUnusedLocals": true
  },
  "include": [],
  "exclude": [
    "node_modules",
    "build",
    "dist",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "src/setupTests.ts",
    "*.js"
  ]
}
```

```json
// tslint.json
{
  "extends": ["tslint:recommended", "tslint-react"],
  "rules": {
    "no-console": [false, "log", "error"],
    "jsx-no-multiline-js": false,
    "whitespace": false,
    "no-empty-interface": false,
    "space-before-function-paren": false,
    "no-namespace": false,
    "label-position": false,
    "quotemark": [true, "single", "jsx-double"],
    "member-access": false,
    "semicolon": [true, "always", "ignore-bound-class-methods"],
    "no-unused-expression": [true, "allow-fast-null-checks"],
    "member-ordering": false,
    "trailing-comma": false,
    "arrow-parens": false,
    "jsx-self-close": false,
    "max-line-length": false,
    "interface-name": false,
    "no-empty": false,
    "comment-format": false,
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "eofline": false,
    "jsx-no-lambda": false,
    "no-trailing-whitespace": false,
    "jsx-alignment": false,
    "jsx-wrap-multilines": false,
    "no-shadowed-variable": [
      false,
      {
        "class": true,
        "enum": true,
        "function": false,
        "interface": false,
        "namespace": true,
        "typeAlias": false,
        "typeParameter": false
      }
    ]
  },
  "linterOptions": {
    "exclude": [
      "config/**/*.js",
      "node_modules/**/*.ts",
      "coverage/lcov-report/*.js"
    ]
  }
}
```

```js
// webpack.config.dev.js
const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
  // 开发模式 不会压缩代码
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GULU-UI-React',
      template: 'example.html',
    }),
  ],
})
```

```js
// webpack.config.prod.js
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
```

## Jest 安装依赖

[jest-react]: https://jestjs.io/docs/zh-Hans/tutorial-react

```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

创建`babel.config.js`文件

```js
// babel.config.js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
}
```

添加`test`命令

```
package.json
"scripts": {
    "test": "cross-env NODE_ENV=test jest --config=jest.config.js --runInBand",
  },
```

创建`jest.config.js`文件

```js
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  reporters: ['default'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/file-mock.js',
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
  transform: {
    '^.+unit\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>test/setupTests.js'],
}
```

创建`tsconfig.test.json`文件

```json
{
  "extends": "./tsconfig.json"
  //   "compilerOptions": {
  //     "module": "commonjs"
  //   }
}
```

创建`test/setupTests.tsx`文件
在目录下创建`__tests__/helloJest.unit.tsx`文件

```tsx
function add(a: number, b: number) {
  return a + b
}

describe('我的第一个测试用例', () => {
  it('add(1,2)等于 3', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
```

```
 yarn add @types/jest --dev
```

```
yarn test
```

`ts-jest` 在 ts 中解决 `import xxx from 'yyy'` 之后 `xxx` 是 `undefined` bug => `import * as xxx from 'yyy'`或者更改 tsconfig.json 就可以`import xxx from 'yyy'`。项目前端运行可以通过 `allowSyntheticDefaultImports` 来避免硬书写 `import * as React`的写法，但是 `ts-jest`从 `v23` 起不支持 `allowSyntheticDefaultImports`, 只支持用 `esModuleInterop` 来解决同样问题

```
https://github.com/umijs/umi/issues/964
https://github.com/kulshekhar/ts-jest/issues/632
  // "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
```
