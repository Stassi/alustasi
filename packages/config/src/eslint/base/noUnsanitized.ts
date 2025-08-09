// @ts-expect-error -- untyped dependency
import { configs } from 'eslint-plugin-no-unsanitized'
import { config, type ConfigArray } from 'typescript-eslint'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { recommended } = configs

export const noUnsanitized: ConfigArray = config([recommended])
