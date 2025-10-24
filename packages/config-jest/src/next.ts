import { type Config } from '@jest/types'
import nextJest from 'next/jest.js'
import { fileURLToPath } from 'node:url'
import { type JestConfigWithTsJest, createDefaultEsmPreset } from 'ts-jest'

const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
} satisfies Config.InitialProjectOptions

export const application = nextJest({
  dir: './',
})(config)

export const internalPackage = {
  ...createDefaultEsmPreset({
    tsconfig: fileURLToPath(
      import.meta.resolve(
        '@repo/config-eslint-typescript/typescript/next-jest-react.json',
      ),
    ),
  }),
  ...config,
} satisfies JestConfigWithTsJest
