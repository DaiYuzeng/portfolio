import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('aria-current reflects the visible section', async ({ page }) => {
    const link = page.locator('nav[aria-label="Section navigation"] a[href="#projects"]');
    await page.locator('#projects').scrollIntoViewIfNeeded();
    await expect(link).toHaveAttribute('aria-current', 'location');
  });
});

