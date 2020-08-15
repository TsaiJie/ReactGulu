// https://jestjs.io/docs/en/configuration.html
const base = require('./jest.config')
module.exports = Object.assign({},base, {
  // 收集测试覆盖率
  collectCoverage: true,
  // 分析报表
  reporters: ["jest-junit"],
  // 测试那些代码
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  // 生成的报告放在哪里
  coverageDirectory: 'coverage',
  // 要生成哪些报告
  coverageReporters: ['text', 'lcov'],
})
