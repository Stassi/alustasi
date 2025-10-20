import { type JestConfigWithTsJest, createDefaultEsmPreset } from 'ts-jest'

export default {
  ...createDefaultEsmPreset(),
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
} satisfies JestConfigWithTsJest
