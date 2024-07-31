module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue,ts}', '!**/node_modules/**'],
};
