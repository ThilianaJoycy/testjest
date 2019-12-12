const {defaults} = require('jest-config');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@env': '<rootDir>/src/environments/environment',
    '@src/(.*)': '<rootDir>/src/src/$1',
    '@state/(.*)': '<rootDir>/src/app/state/$1'
  },
  transformIgnorePatterns: ['node_modules/(?!@babel/)'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageReporters: [
    "text",
    "cobertura"
  ],
  moduleDirectories: ["node_modules", "src"],
  
  
  testResultsProcessor: "jest-jenkins-reporter"
}
