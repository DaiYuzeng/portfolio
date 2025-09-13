import { test, expect } from '@playwright/test';

test.describe('Social Icons', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('exposes labeled links and hides icons from AT', async ({ page }) => {
    const list = page.locator('ul[aria-label="Social links"]');
    await expect(list).toBeVisible();

    const links = list.locator('a');
    await expect(links).toHaveCount(3);

    // Each has an accessible label and the SVG is aria-hidden
    const labels = [
      'GitHub (opens in a new tab)',
      'LinkedIn (opens in a new tab)',
      'Instagram (opens in a new tab)'
    ];
    for (const name of labels) {
      const link = page.getByRole('link', { name });
      await expect(link).toBeVisible();
      await expect(link.locator('svg')).toHaveAttribute('aria-hidden', 'true');
    }
  });
});

