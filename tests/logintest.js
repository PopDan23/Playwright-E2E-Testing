const { test, expect } = require("@playwright/test");

test("Login test", async ({ page }) => {
  await page.goto("https://www.roblox.com/login");
  await page.fill("#username", "TRTestAccount001");
  await page.fill("#password", "TRTestAccount001");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("https://www.roblox.com/homed");
  await expect(page.locator("text=Welcome, testuser")).toBeVisible();
});
