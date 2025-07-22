import { config, type ConfigArray } from 'typescript-eslint'
// @ts-expect-error -- untyped module
import onlyWarnUntyped from 'eslint-plugin-only-warn'
import { type ESLintPlugin } from './turbo.js'

export const onlyWarn: ConfigArray = config([
  {
    plugins: {
      onlyWarn: <ESLintPlugin>onlyWarnUntyped,
    },
  },
])
