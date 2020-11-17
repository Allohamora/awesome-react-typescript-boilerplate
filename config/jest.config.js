module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '../src'],
  rootDir: '../__tests__',
  setupFiles: ['<rootDir>/setupTests.ts'],
  testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)'],

};