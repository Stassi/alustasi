import { defineConfig } from 'eslint/config'
// @ts-expect-error -- untyped module
import onlyWarnPlugin from 'eslint-plugin-only-warn'
import { type Config } from './base.js'
import { type ESLintPlugin } from './turbo.js'

export const onlyWarn = defineConfig([
  {
    plugins: {
      onlyWarn: onlyWarnPlugin as ESLintPlugin,
    },
  },
]) satisfies Config[]
