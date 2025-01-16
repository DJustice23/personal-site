const config = {
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^.+\\.md$': 'markdown-to-jsx',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(react-markdown|comma-separated-tokens|hast-util-to-jsx-runtime|vfile|unist-util-.+|micromark.+|devlop)/)',
  ],
};

module.exports = config;
