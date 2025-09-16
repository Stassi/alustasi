import { defineConfig } from 'eslint/config'
// eslint-disable-next-line import-x/default
import hooksPlugin, { configs } from 'eslint-plugin-react-hooks'
import { type Config } from '../base/base.js'

export const hooks = defineConfig([
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: configs.recommended.rules,
    settings: { react: { version: 'detect' } },
  },
]) satisfies Config[]
