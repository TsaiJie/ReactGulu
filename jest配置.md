## 安装依赖

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
