import { test, expect } from '@playwright/test';

test.describe('Spotlight', () => {
  test('is decorative and hidden from assistive tech', async ({ page }) => {
    await page.goto('/');

    const s = page.locator('.spotlight').first();
    await expect(s).toBeVisible();
    await expect(s).toHaveAttribute('aria-hidden', 'true');
    await expect(s).toHaveAttribute('role', 'presentation');
  });
});

