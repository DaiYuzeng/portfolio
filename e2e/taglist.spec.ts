import { test, expect } from '@playwright/test';

test.describe('TagList (skills)', () => {
  test('exposes list with label and shows tags', async ({ page }) => {
    await page.goto('/');

    const list = page.locator('#experience ul[aria-label="Skill tags"]').first();
    await expect(list).toBeVisible();

    const items = list.locator('li');
    await expect(await items.count()).toBeGreaterThan(3);

    // Spot-check a few likely skills
    await expect(list).toContainText(/JavaScript|TypeScript|React/);
  });
});
