export default {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(png|jpg|gif)$': '<rootDir>/__mocks__/fileMock.js'
    }
  };