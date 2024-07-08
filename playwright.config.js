// playwright.config.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  testMatch: "*.js", // This will match all .js files in the test directory
  use: {
    browserName: "chromium", // or 'firefox', 'webkit'
    headless: true, // Set to false if you want to see the browser
  },
  reporter: [
    ["list"],
    ["html", { outputFolder: "test-results", open: "never" }],
  ],
});
