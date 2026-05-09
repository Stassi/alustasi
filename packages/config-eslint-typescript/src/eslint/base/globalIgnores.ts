import { includeIgnoreFile } from '@eslint/config-helpers'
import { defineConfig } from 'eslint/config'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { type Config } from './base.js'

const config = defineConfig([
  includeIgnoreFile(resolve(cwd(), '../../.gitignore'), {
    gitignoreResolution: true,
    name: 'Root .gitignore',
  }),
]) satisfies Config[]

export const globalIgnores: Config[] = config
