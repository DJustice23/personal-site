const config = {
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy', // Mock CSS modules
    '^.+\\.md$': 'markdown-to-jsx', // Map Markdown imports to markdown-to-jsx
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};

module.exports = config;
