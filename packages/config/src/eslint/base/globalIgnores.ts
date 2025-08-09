import { globalIgnores as globalIgnoresHelper } from 'eslint/config'
import { config, type ConfigArray } from 'typescript-eslint'

export const globalIgnores: ConfigArray = config([
  globalIgnoresHelper(['.next/**', '.turbo/**', 'dist/**', 'node_modules/**']),
])
