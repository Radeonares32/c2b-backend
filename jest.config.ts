import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout:10000
  
};

export default config;
