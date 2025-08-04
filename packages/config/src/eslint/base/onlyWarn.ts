import { config, type ConfigArray } from 'typescript-eslint'
// @ts-expect-error -- untyped module
import onlyWarnPlugin from 'eslint-plugin-only-warn'
import { type ESLintPlugin } from './turbo.js'

export const onlyWarn: ConfigArray = config([
  {
    plugins: {
      onlyWarn: onlyWarnPlugin as ESLintPlugin,
    },
  },
])
