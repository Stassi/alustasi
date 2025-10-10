import { type PlaywrightTestArgs, expect, test } from '@playwright/test'

test.describe('Navigation', (): void => {
  test('navigates to the "About" page', async ({
    page,
  }: PlaywrightTestArgs): Promise<void> => {
    await test.step('Given I am on the home page', async (): Promise<void> => {
      await page.goto('/')
    })

    await test.step('When I click the "About" link', async (): Promise<void> => {
      await page
        .getByRole('link', { exact: true, name: 'Go to the about page' })
        .click()
    })

    await test.step('Then I should be on the "About" page', async (): Promise<void> => {
      await expect(page).toHaveURL('/about')
      await expect(
        page.getByRole('heading', { exact: true, level: 1 }),
      ).toContainText('Material UI - Next.js example in TypeScript')
    })
  })
})
