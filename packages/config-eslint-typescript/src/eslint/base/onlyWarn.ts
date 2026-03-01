import onlyWarnPlugin from 'eslint-plugin-only-warn'
import { defineConfig } from 'eslint/config'

import { type Config, type Plugin } from './base.js'

const config = defineConfig([
  {
    plugins: {
      onlyWarn: onlyWarnPlugin as Plugin,
    },
  },
]) satisfies Config[]

export const onlyWarn: Config[] = config
