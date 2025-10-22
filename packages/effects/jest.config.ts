import { type JestConfigWithTsJest, createDefaultEsmPreset } from 'ts-jest'

export default { ...createDefaultEsmPreset() } satisfies JestConfigWithTsJest
