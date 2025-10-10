import {
  type Dialog,
  type PlaywrightTestArgs,
  expect,
  test,
} from '@playwright/test'

test.describe('Alert', (): void => {
  test('buttonpress activates an alert dialog with message', async ({
    page,
  }: PlaywrightTestArgs): Promise<void> => {
    await test.step('Given I am on the home page', async (): Promise<void> => {
      await page.goto('/')
    })

    await test.step('It should display an alert dialog with message when I click the "Open alert" button', async (): Promise<void> => {
      page.once('dialog', async (dialog: Dialog): Promise<void> => {
        expect(dialog.type()).toBe('alert')
        expect(dialog.message()).toBe('Hello from your web app!')
        await dialog.accept()
      })

      await page.getByRole('button', { name: 'Open alert' }).click()
    })
  })
})
