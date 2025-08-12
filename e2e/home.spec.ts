import { test, expect } from '@playwright/test';

test('home renders', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('home-root')).toBeVisible();
  await expect(page.getByTestId('home-root')).toHaveText('Yuzeng Dai');

});