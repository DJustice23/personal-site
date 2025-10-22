const config = {
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^.+\\.md$': 'markdown-to-jsx',
    '^unist-util-visit-parents/do-not-use-color$': '<rootDir>/node_modules/unist-util-visit-parents/lib/color.js',
    '^#minpath$': '<rootDir>/node_modules/vfile/lib/minpath.js',
    '^#minproc$': '<rootDir>/node_modules/vfile/lib/minproc.js',
    '^#minurl$': '<rootDir>/node_modules/vfile/lib/minurl.js',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(react-markdown|remark-.*|rehype-.*|mdast-.*|hast-.*|unist-.*|unified|estree-.*|micromark.*|vfile.*|property-information|space-separated-tokens|comma-separated-tokens|html-url-attributes|web-namespaces|trim-lines|mdurl|markdown-table|character-entities|decode-named-character-reference|zwitch|bail|is-plain-obj|trough|devlop)/)',
  ],
};

module.exports = config;
