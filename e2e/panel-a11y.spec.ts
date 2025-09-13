import { test, expect } from '@playwright/test';

test.describe('Panel and external links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Panel title link indicates new tab and icon is hidden from AT', async ({ page }) => {
    // Use first experience panel title link
    const firstTitleLink = page.locator('#experience h3 a').first();
    await expect(firstTitleLink).toBeVisible();
    // sr-only text is in DOM
    await expect(firstTitleLink).toContainText('(opens in a new tab)');
    // SVG icon immediately next span has aria-hidden on the svg
    const svg = firstTitleLink.locator('svg').first();
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  test('Project external links indicate new tab and hide icons', async ({ page }) => {
    const link = page.locator('#projects a.project-external-link').first();
    await expect(link).toBeVisible();
    await expect(link).toContainText('(opens in a new tab)');
    await expect(link.locator('svg')).toHaveAttribute('aria-hidden', 'true');
  });
});

