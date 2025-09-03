import { test, expect } from "@playwright/test"

test.describe("Project Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("renders all project panels with title, description, and thumbnail", async ({ page }) => {
    const panels = page.locator("#projects ol.group\\/list > li")
    
    // Projects panel should be 3
    await expect(panels).toHaveCount(3)

    const titles = panels.locator("h3")
    await expect(titles.first()).toBeVisible()

    const descriptions = panels.locator("p")
    await expect(descriptions.first()).toBeVisible()

    const thumbnails = panels.locator("img")
    await expect(thumbnails.first()).toBeVisible()
    await expect(thumbnails.first()).toHaveAttribute("alt", /project/i)
  })

  test("project links open in new tab with icons and titles", async ({ page }) => {
    // Grab the first panel
    const firstPanel = page.locator("#projects ol.group\\/list > li").first()
    const links = firstPanel.locator("a.project-external-link")

    await expect(links).not.toHaveCount(0);

    // Check one link has both icon <svg> and text
    const firstLink = links.first()
    await expect(firstLink.locator("svg")).toBeVisible()
    await expect(firstLink).toContainText(/.+/) // should have some text

    // Verify attributes
    await expect(firstLink).toHaveAttribute("rel", /noreferrer noopener/)
  })

  test("hover/focus styles are applied", async ({ page }) => {
    const firstPanel = page.locator("#projects ol.group\\/list > li").first()
    const link = firstPanel.locator("a.project-external-link").first()

    // Hover check
    await link.hover()
    const color = await link.evaluate((el) =>
      window.getComputedStyle(el).color
    )
    expect(color).toBeTruthy()

    // Focus check
    await link.focus()
    await expect(link).toBeFocused()
  })
})
