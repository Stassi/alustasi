import { base } from '@repo/config-playwright'
import { env } from 'node:process'

const { CI: continuousIntegration, PORT: port = '9000' }: NodeJS.ProcessEnv =
  env

export default base({
  continuousIntegration: Boolean(continuousIntegration),
  port,
})
