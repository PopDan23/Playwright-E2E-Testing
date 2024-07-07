const { test, expect } = require("@playwright/test");

test("Complex element visibility test on Roblox homepage", async ({ page }) => {
  // Navigate to the Roblox homepage
  await page.goto("https://www.roblox.com");

  // Check visibility of the Roblox logo
  const logo = page.locator('a[aria-label="Roblox"]');
  await expect(logo).toBeVisible();

  // Check presence and visibility of navigation bar links
  const navLinks = page.locator('nav[role="navigation"] a');
  const expectedNavLinks = ["Games", "Avatar Shop", "Create"];

  for (const linkText of expectedNavLinks) {
    const link = navLinks.locator(`text=${linkText}`);
    await expect(link).toBeVisible();
    await expect(link).toContainText(linkText);
  }

  // Check visibility of the search bar
  const searchBar = page.locator('input[type="search"]');
  await expect(searchBar).toBeVisible();

  // Check visibility of featured games section
  const featuredGamesSection = page.locator('div[aria-label="Featured Games"]');
  await expect(featuredGamesSection).toBeVisible();

  // Ensure there are some games listed in the featured section
  const featuredGames = featuredGamesSection.locator('a[role="link"]');
  await expect(featuredGames).toHaveCountGreaterThan(0);

  // Check visibility of the login or sign-up buttons
  const loginButton = page.locator('a[href*="login"]');
  const signUpButton = page.locator('a[href*="signup"]');
  await expect(loginButton).toBeVisible();
  await expect(signUpButton).toBeVisible();
});
