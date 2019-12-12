const {defaults} = require('jest-config');

module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageReporters: [
    "text",
    "cobertura"
  ],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@jest/)'],
  testResultsProcessor: "jest-jenkins-reporter"
}
