import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { includeIgnoreFile } from '@eslint/compat'
import { config, type ConfigArray } from 'typescript-eslint'

export const globalIgnores: ConfigArray = config([
  includeIgnoreFile(resolve(cwd(), '../../.gitignore')),
])
