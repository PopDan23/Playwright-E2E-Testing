const { test, expect } = require("@playwright/test");

test("Navigation test", async ({ page }) => {
  await page.goto("https://www.roblox.com/home");
  await page.click('a[href="/about"]');
  await expect(page).toHaveURL("hhttps://www.roblox.com/my/avatar");
  await expect(page.locator("h1")).toHaveText("Avatar");
});
