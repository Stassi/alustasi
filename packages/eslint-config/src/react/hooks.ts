import { config, type ConfigArray } from 'typescript-eslint'
import hooksPlugin, { configs } from 'eslint-plugin-react-hooks'

export const hooks: ConfigArray = config([
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
])
