module.exports = {
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.css$'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/fileMock.js',
  },
};
