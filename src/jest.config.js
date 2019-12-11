const {defaults} = require('jest-config');

module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageReporters: [
    "text",
    "cobertura"
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
  // testResultsProcessor: "jest-jenkins-reporter"
}
