import { configs } from '@eslint/js'
import { defineConfig } from 'eslint/config'
import { type Config } from './base.js'

export const javaScript = defineConfig([configs.recommended]) satisfies Config[]
