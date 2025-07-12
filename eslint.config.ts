import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import { type Linter } from 'eslint'

const eslintConfig: Linter.Config[] = [
  ...fixupConfigRules(
    new FlatCompat().config({
      extends: [
        'next',
        'next/core-web-vitals',
        'next/typescript',
      ],
    }),
  ),
]

export default eslintConfig
