// eslint-disable-next-line import-x/default
import hooksPlugin, { configs } from 'eslint-plugin-react-hooks'
import { config, type ConfigArray } from 'typescript-eslint'

export const hooks: ConfigArray = config([
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: configs.recommended.rules,
    settings: { react: { version: 'detect' } },
  },
])
