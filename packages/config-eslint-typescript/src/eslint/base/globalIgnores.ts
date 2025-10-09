import { includeIgnoreFile } from '@eslint/compat'
import { defineConfig } from 'eslint/config'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { type Config } from './base.js'

const config = defineConfig([
  includeIgnoreFile(resolve(cwd(), '../../.gitignore')),
]) satisfies Config[]

export const globalIgnores: Config[] = config
