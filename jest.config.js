const config = {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Use babel-jest to transform JavaScript/TypeScript files
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy', // Mock CSS modules
    '^.+\\.md$': 'markdown-to-jsx', // Map Markdown imports to markdown-to-jsx
  },
  testEnvironment: 'jsdom', // Use jsdom for DOM-related tests
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup file for additional mocks and configurations
};

module.exports = config;
