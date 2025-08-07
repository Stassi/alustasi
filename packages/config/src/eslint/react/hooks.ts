import { config, type ConfigArray } from 'typescript-eslint'
// eslint-disable-next-line import-x/default
import hooksPlugin, { configs } from 'eslint-plugin-react-hooks'

export const hooks: ConfigArray = config([
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: configs.recommended.rules,
  },
])
