import { test, expect } from '@playwright/test';

test('homepage has Playwright in title', async ({ page }) => {
  await page.goto('https://github.com/microsoft/playwright');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
