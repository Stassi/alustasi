import { type PlaywrightTestConfig } from '@playwright/test'

export function continuousIntegrationOptions(
  continuousIntegration: boolean,
): PlaywrightTestConfig {
  return (
    continuousIntegration
      ? {
          forbidOnly: true,
          reporter: 'github',
          retries: 2,
          workers: 1,
        }
      : {}
  ) satisfies PlaywrightTestConfig
}
