module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testTimeout: 30000,
  maxWorkers: 1
};
