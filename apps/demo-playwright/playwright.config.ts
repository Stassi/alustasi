import {
  type PlaywrightTestConfig,
  defineConfig,
  devices,
} from '@playwright/test'

type DeviceName = keyof {
  [Name in keyof Devices as string extends Name ? never : Name]: Devices[Name]
}
type Devices = typeof devices

const { CI: continuousIntegration, PORT: port = '3000' }: NodeJS.ProcessEnv =
    process.env,
  baseURL = `http://localhost:${port}` as const

export default defineConfig({
  projects: (
    [
      'Desktop Chrome',
      'Desktop Edge',
      'Desktop Firefox',
      'Desktop Safari',
      'Galaxy S24 landscape',
      'Galaxy S24',
      'Galaxy Tab S4 landscape',
      'Galaxy Tab S4',
      'Pixel 3 landscape',
      'Pixel 3',
      'Pixel 7 landscape',
      'Pixel 7',
      'iPhone 12 Mini landscape',
      'iPhone 12 Mini',
      'iPhone 13 landscape',
      'iPhone 13',
      'iPhone 14 landscape',
      'iPhone 14',
      'iPhone 15 Pro Max landscape',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro landscape',
      'iPhone 15 Pro',
      'iPhone 15 landscape',
      'iPhone 15',
    ] as const satisfies readonly DeviceName[]
  ).map(
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
  ...((continuousIntegration
    ? {
        forbidOnly: true,
        reporter: 'github',
        retries: 2,
        workers: 1,
      }
    : {}) satisfies PlaywrightTestConfig),
}) satisfies PlaywrightTestConfig
