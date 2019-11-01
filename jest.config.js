module.exports = {
  rootDir: '.',
  displayName: {name: 'testing my personal blog', color: 'green'},
  runner: 'jest-runner',
  verbose: true,
  errorOnDeprecated: true,
  roots: ['./Tests'],
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/Tests/setup.js']
}