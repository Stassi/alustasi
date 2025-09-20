import { configs as jsConfigs } from '@eslint/js'
import { defineConfig } from 'eslint/config'
import { type Config } from './base.js'

export const javaScript = defineConfig([
  jsConfigs.recommended,
]) satisfies Config[]
