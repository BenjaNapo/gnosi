import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('can go on homepage', async ({ page }) => {
    await page.goto('http://localhost:3000')

    await expect(page).toHaveTitle(/Gnosi/)

    const heading = page.locator('h1').first()

    await expect(heading).toHaveText("L'Essenza")
    await expect(page.getByRole('heading', { name: 'La Forma' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Il Cerchio' })).toBeVisible()
  })
})
