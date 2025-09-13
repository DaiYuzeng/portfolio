import { test, expect } from '@playwright/test';

test.describe('Locale Switcher A11y', () => {
  test('has role switch and toggles aria-checked', async ({ page }) => {
    await page.goto('/');

    const sw = page.getByRole('switch', { name: 'Locale Switcher' });
    await expect(sw).toBeVisible();

    // Default locale en => aria-checked should be false
    await expect(sw).toHaveAttribute('aria-checked', 'false');

    await sw.click();
    await expect(sw).toHaveAttribute('aria-checked', 'true');

    // Toggle back
    await sw.click();
    await expect(sw).toHaveAttribute('aria-checked', 'false');
  });
});

