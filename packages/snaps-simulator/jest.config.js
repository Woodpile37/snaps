const deepmerge = require('deepmerge');

const baseConfig = require('../../jest.config.base');

module.exports = deepmerge(baseConfig, {
  coverageThreshold: {
    global: {
      branches: 72.22,
      functions: 84.61,
      lines: 91.17,
      statements: 91.29,
    },
  },
  testEnvironment: './jest.environment.js',
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run
    '\\.(css|less|scss|sass|svg)$': '<rootDir>/src/assets/file-mock.ts',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(monaco-editor|react-monaco-editor|react-dnd|dnd-core|@react-dnd/*|@minoru/react-dnd-treeview|nanoid))',
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
});
