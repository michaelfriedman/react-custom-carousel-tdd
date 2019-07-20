module.exports = function() {
  return {
    testFramework: 'jest',
    env: {
      type: 'node',
    },
    tests: ['tests/**/.test.js'],
    files: ['**/*.js', '!node_modules/**/*', '!**/*.test.js', '!**/.*'],
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
  };
};
