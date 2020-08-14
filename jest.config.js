// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,
  clearMocks: false,

  // 收集测试覆盖率
  collectCoverage: true,
  // 分析报表
  reporters: ['default'],
  // 测试那些代码
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  // 生成的报告放在哪里
  coverageDirectory: 'coverage',
  // 要生成哪些报告
  coverageReporters: ['text', 'lcov'],

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  // 解决非js模块的报错
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/file-mock.js',
    '\\.(css|less|sass|scss)$': "<rootDir>/test/__mocks__/object-mock.js"
  },
  //测试文件的位置
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
  transform: {
    '^.+unit\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>test/setupTests.js'],
}
