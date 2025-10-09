import { type PlaywrightTestArgs, expect, test } from '@playwright/test'

// TODO: Replace intentionally-failing tests
test.describe('[FAIL] Navigation', (): void => {
  test('navigates to the "About" page', async ({
    page,
  }: PlaywrightTestArgs): Promise<void> => {
    await test.step('Given I am on the home page', async (): Promise<void> => {
      await page.goto('/')
    })

    await test.step('When I click the "About" link', async (): Promise<void> => {
      await page.getByRole('link', { name: 'About' }).click()
    })

    await test.step('Then I should be on the "About" page', async (): Promise<void> => {
      await expect(page).toHaveURL('/about')
      await expect(page.getByRole('heading', { level: 1 })).toContainText(
        'About',
      )
    })
  })
})
