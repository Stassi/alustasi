import { config, type ConfigArray } from 'typescript-eslint'
// @ts-expect-error -- untyped dependency
import { configs } from 'eslint-plugin-no-unsanitized'

export const noUnsanitized: ConfigArray = config([configs.recommended])
