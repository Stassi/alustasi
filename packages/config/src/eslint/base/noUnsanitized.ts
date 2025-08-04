import { config, type ConfigArray } from 'typescript-eslint'
// @ts-expect-error -- untyped dependency
import { configs } from 'eslint-plugin-no-unsanitized'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { recommended } = configs

export const noUnsanitized: ConfigArray = config([recommended])
