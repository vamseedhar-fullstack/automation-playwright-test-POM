const { test, expect } = require('@playwright/test');

test('basic login page title check', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});
