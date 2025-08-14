// tests/main-section.spec.ts
import { test, expect } from '@playwright/test';

test.describe('MainSection', () => {
  test('header remains visible when scrolling (sticky behavior)', async ({ page }) => {
    await page.goto('/');

    const sticky = page.locator('section').first().locator('> div').first();

    // Create enough scroll
    await page.evaluate(() => window.scrollTo({ top: 2000, behavior: 'instant' }));

    await expect(sticky).toBeVisible();
    await expect(sticky).toHaveCSS('position', 'sticky');
  });
});
