export default {
  roots: ['<rootDir>/src'],
  modulePaths: [
    '<rootDir>'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/*.spec.ts', '**/*.test.ts']
}
