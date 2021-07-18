module.exports = {
    preset: 'ts-jest',
    moduleFileExtensions: [
        'js',
        'ts'
    ],
    modulePaths: ['.'],
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(spec))\\.ts$',
    transform: {
        '^.+\\ts$': 'ts-jest'
    },
    transformIgnorePatterns: [
        '^.+\\js$',
        '/node_modules/'
    ],
  }