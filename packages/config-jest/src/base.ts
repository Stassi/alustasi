import { type JestConfigWithTsJest, createDefaultEsmPreset } from 'ts-jest'

export const base = {
  ...createDefaultEsmPreset(),
} satisfies JestConfigWithTsJest
