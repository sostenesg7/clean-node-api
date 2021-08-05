const config = require('./jest.config')
/**
 * Tells jest to only run integration tests from .test.ts files
 * Other test files with .unit.ts is for unit tests
 *
**/
config.testMatch = ['**/*.test.ts']
module.exports = config
