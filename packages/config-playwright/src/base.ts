import {
  type PlaywrightTestConfig,
  defineConfig,
  devices,
} from '@playwright/test'

import { continuousIntegrationOptions } from './continuousIntegrationOptions.js'
import { deviceDescriptors } from './deviceDescriptors.js'

export type DeviceName = keyof {
  [Name in keyof Devices as string extends Name ? never : Name]: Devices[Name]
}
type Devices = typeof devices

export function base({
  continuousIntegration,
  port,
}: {
  continuousIntegration: boolean
  port: string
}): PlaywrightTestConfig {
  const baseURL = `http://localhost:${port}` as const

  return defineConfig({
    projects: deviceDescriptors.map(
      <Name extends DeviceName>(
        name: Name,
      ): {
        name: Name
        use: Devices[Name]
      } => ({
        name,
        use: devices[name],
      }),
    ),
    use: {
      baseURL,
    },
    webServer: {
      command: 'pnpm dev',
      reuseExistingServer: !continuousIntegration,
      url: baseURL,
    },
    ...continuousIntegrationOptions(continuousIntegration),
  }) satisfies PlaywrightTestConfig
}
