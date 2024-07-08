const { test, expect } = require("@playwright/test");

test("Search functionality test", async ({ page }) => {
  await page.goto("https://www.roblox.com/home");
  await page.fill("#search", "Red");
  await page.click("#search-button");
  await expect(page.locator(".search-results")).toBeVisible();
  await expect(page.locator(".search-results")).toContainText("Playwright");
});
