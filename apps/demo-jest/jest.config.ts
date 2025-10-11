import { type Config } from '@jest/types'
import nextJest from 'next/jest.js'

export default nextJest({
  dir: './',
})({
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
} satisfies Config.InitialProjectOptions)
