import { defineConfig } from 'eslint/config'
// @ts-expect-error -- untyped module
import onlyWarnPlugin from 'eslint-plugin-only-warn'
import { type Config, type Plugin } from './base.js'

export const onlyWarn = defineConfig([
  {
    plugins: {
      onlyWarn: onlyWarnPlugin as Plugin,
    },
  },
]) satisfies Config[]
