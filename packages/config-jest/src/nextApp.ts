import { type Config } from '@jest/types'
import nextJest from 'next/jest.js'

export const nextApp = nextJest({
  dir: './',
})({
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
} satisfies Config.InitialProjectOptions)
