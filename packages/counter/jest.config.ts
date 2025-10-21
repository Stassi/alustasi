import { fileURLToPath } from 'node:url'
import { type JestConfigWithTsJest, createDefaultEsmPreset } from 'ts-jest'

export default {
  ...createDefaultEsmPreset({
    tsconfig: fileURLToPath(
      import.meta.resolve(
        '@repo/config-eslint-typescript/typescript/next-jest-react.json',
      ),
    ),
  }),
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
} satisfies JestConfigWithTsJest
