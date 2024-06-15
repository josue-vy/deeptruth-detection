// jest.config.ts
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^firebase/auth$': '<rootDir>/src/__mocks__/firebase/auth.ts',
    },
    transform: {
      '^.+\\.[tj]sx?$': 'ts-jest',
    },
  };
  