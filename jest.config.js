

module.exports = {
  preset: '@react-native/jest-preset',

  setupFilesAfterEnv: [
    './jest.setup.ts',
  ],

  testMatch: [
    '**/__tests__/**/*.test.ts?(x)',
  ],

  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],

  transformIgnorePatterns: [
  'node_modules/(?!(react-native|@react-native|@react-navigation|@supabase|react-native-url-polyfill)/)',
],
moduleNameMapper: {
  '^react-native-config$': '<rootDir>/__mocks__/react-native-config.js',
},
  collectCoverage: true,

  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',

    '!src/**/*.test.{ts,tsx}',
    '!src/**/__tests__/**',
    '!src/navigation/**',
    '!src/types/**',
    '!src/theme/**',
    '!src/constants/**',
    '!src/assets/**',
    '!src/services/**',
    '!src/vendor/**',
    '!src/**/*.d.ts',
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'text',
    'lcov',
    'html',
  ],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  clearMocks: true,

  restoreMocks: true,

  verbose: true,
};