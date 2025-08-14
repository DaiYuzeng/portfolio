import { test, expect } from '@playwright/test';

test.describe('Header', () => {
  test('renders expected headings and copy', async ({ page }) => {
    await page.goto('/');

    const h1 = page.getByRole('heading', { level: 1, name: 'Yuzeng Dai' });
    const h2 = page.getByRole('heading', { level: 2, name: 'Front End Engineer' });
    const tagline = page.getByText('I build accessible, pixel-perfect digital experiences for the web.');

    await expect(h1).toBeVisible();
    await expect(h2).toBeVisible();
    await expect(tagline).toBeVisible();

    // Check for semantic structure
    await expect(page.locator('h1')).toHaveCount(1);
  });
});