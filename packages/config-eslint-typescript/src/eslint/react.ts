import eslintReact from '@eslint-react/eslint-plugin'
import { configs as jsConfigs } from '@eslint/js'
import { defineConfig } from 'eslint/config'
import { browser, serviceworker } from 'globals'
import { parser, configs as tsConfigs } from 'typescript-eslint'

import { type Config } from './base/base.js'

function config(browserGlobals: boolean): Config[] {
  return defineConfig([
    {
      extends: [
        jsConfigs.recommended,
        tsConfigs.recommended,
        eslintReact.configs['recommended-typescript'],
      ],
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        globals: {
          ...serviceworker,
          ...(browserGlobals && browser),
        },
        parser,
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
  ]) satisfies Config[]
}

export const react: Config[] = config(true)
export const reactWithoutBrowserGlobals: Config[] = config(false)
