// tests/e2e/main-section.spec.ts
import { test, expect, Locator } from '@playwright/test';


test.describe('MainSection', () => {
  // We don't have to test every section.
  const id = 'about';

  test('exposes a region with an accessible name from its heading', async ({ page }) => {
    await page.goto('/');

    const region = page.getByTestId(`main-section-${id}`);
    const heading = page.getByTestId(`main-section-${id}-title`);

    await expect(region).toBeVisible();
    await expect(heading).toBeVisible();

    // We added aria-labelledby to the region for better a11y.
    const text = await heading.textContent();
    
    expect(text).not.toBeNull();
    await expect(region).toHaveAccessibleName(text as string);
  });

  test('sticky header visibility matches responsive classes', async ({ page }) => {
    await page.goto('/');

    const sticky = page.getByTestId(`main-section-${id}-sticky`);

    // Mobile/tablet width: sticky header visible (not sr-only at lg)
    await page.setViewportSize({ width: 768, height: 900 });
    await expect(sticky).toBeVisible();

    // Large desktop width: sticky header is visually hidden due to `lg:sr-only` and `lg:opacity-0`
    await page.setViewportSize({ width: 1280, height: 900 });
    // We can’t rely purely on visibility since sr-only elements may still be "visible" to the DOM.
    // Instead, assert it has zero bounding box height (typical for sr-only) or opacity 0 via computed styles.
    const box = await sticky.boundingBox();
    const opacity = await sticky.evaluate((el) => window.getComputedStyle(el).opacity);

    expect(opacity).toBe('0');
    expect(box?.height ?? 0).toBeLessThan(2); // sr-only usually collapses visually
  });

  test('section anchors are reachable by id (scroll-mt behavior)', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 768, height: 900 });
    await page.evaluate((sectionId) => {
      document.querySelector<HTMLElement>(`#${sectionId}`)?.scrollIntoView();
    }, id);

    // After programmatic scroll, section should be in the viewport (rough check)
    const targetSection = page.getByTestId(`main-section-${id}`);
    const inViewport = await targetSection.evaluate((el: HTMLElement): boolean => {
      const rect = el.getBoundingClientRect();
      
      return rect.top < window.innerHeight && rect.bottom > 0;
    });

    expect(inViewport).toBeTruthy();
  });
});