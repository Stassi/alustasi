// @ts-expect-error -- untyped dependency
import { configs } from 'eslint-plugin-no-unsanitized'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { recommended } = configs

export const noUnsanitized = defineConfig([recommended]) satisfies Config[]
