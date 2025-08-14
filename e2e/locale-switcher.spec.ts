import { test, expect } from '@playwright/test';

test.describe('LocaleSwitcher', () => {
  const getLang = async (page: import('@playwright/test').Page) =>
    page.evaluate(() => document.documentElement.lang);

  test('toggles EN → ZH and updates <html lang> and URL', async ({ page }) => {
    await page.goto('/');

    // default is EN
    await expect.poll(async () => await getLang(page)).toBe('en');

    const toggle = page.locator('header').first().locator('button');
    
    await expect(toggle).toBeVisible();

    await toggle.click();
    await expect.poll(async () => await getLang(page)).toBe('zh');

    // URL check
    const url = new URL(page.url());
    const pathStartsWithZh = url.pathname === '/zh';
    expect.soft(pathStartsWithZh && (await getLang(page)) === 'zh').toBeTruthy();
  });

  test('toggles back ZH → EN', async ({ page }) => {
    await page.goto('/zh');

    await expect.poll(async () => await getLang(page)).toBe('zh');

    const toggle = page.locator('header').first().locator('button');
    
    await toggle.click();
    await expect.poll(async () => await getLang(page)).toBe('en');

    // URL check
    const url = new URL(page.url());
    const backToEn = !(url.pathname === '/zh');
    expect.soft(backToEn && (await getLang(page)) === 'en').toBeTruthy();
  });
});
