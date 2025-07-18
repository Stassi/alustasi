import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import { type Linter } from 'eslint'

const eslintConfig: Linter.Config[] = [
  ...fixupConfigRules(
    new FlatCompat().config({
      extends: ['next', 'next/core-web-vitals', 'next/typescript'],
    }),
  ),
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'lf',
          printWidth: 80,
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          useTabs: false,
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
]

export default eslintConfig
