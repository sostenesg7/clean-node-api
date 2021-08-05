const config = require('./jest.config')
/**
 * Tells jest to only run unity tests from .spec.ts files
 * Other test files with .test.ts is for integration tests
 *
**/
config.testMatch = ['**/*.spec.ts']
module.exports = config
