import { type JestConfigWithTsJest, createDefaultEsmPreset } from 'ts-jest'

export default {
  ...createDefaultEsmPreset(),
  moduleNameMapper: { '^(\\.{1,2}/.*)\\.js$': '$1' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
} satisfies JestConfigWithTsJest
