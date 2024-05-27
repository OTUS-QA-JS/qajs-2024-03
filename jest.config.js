export default {
  // injectGlobals: true,
  testEnvironment: 'node',
  collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.js'],
  collectCoverageFrom: ['tests/**/*.js'],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    //'\\.css$': 'some-css-transformer',
  },
  // testMatch: ['**/specs/*.spec.*'],
  testMatch: ['**/tests/*.test.*'],
  globals: {
    testTimeout: 50000,
  },
  bail: 1,
  verbose: true,
}
