module.exports = function() {
  return {
    testFramework: 'jest',
    env: {
      type: 'node',
    },
    tests: ['tests/**/.test.js'],
    files: ['**/*.js', '!node_modules/**/*', '!**/*.test.js', '!**/.*'],
    compilers: {
      // eslint-disable-next-line no-undef
      '**/*.js': wallaby.compilers.babel(),
    },
  };
};
