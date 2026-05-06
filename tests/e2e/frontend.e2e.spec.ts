import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('can change homepage fragment without document scrolling', async ({ page }) => {
    await page.goto('http://localhost:3000')

    await expect(page).toHaveTitle(/Gnosi/)

    const heading = page.locator('h1').first()

    await expect(heading).toHaveText("L'Essenza")

    const dimensions = await page.evaluate(() => ({
      scrollHeight: document.documentElement.scrollHeight,
      viewportHeight: window.innerHeight,
    }))
    expect(dimensions.scrollHeight).toBeLessThanOrEqual(dimensions.viewportHeight + 1)

    await page.mouse.wheel(0, 600)
    await expect(heading).toHaveText('La Forma')
    await page.waitForTimeout(450)

    await page.mouse.wheel(0, 600)
    await expect(heading).toHaveText('Il Cerchio')
    await page.waitForTimeout(450)

    await page.mouse.wheel(0, 600)
    await expect(heading).toHaveText('La Luce')

    const finalDimensions = await page.evaluate(() => ({
      scrollHeight: document.documentElement.scrollHeight,
      viewportHeight: window.innerHeight,
    }))
    expect(finalDimensions.scrollHeight).toBeLessThanOrEqual(finalDimensions.viewportHeight + 1)
  })
})
