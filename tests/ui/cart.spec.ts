import { test, expect } from '@playwright/test';

test('adding one product updates the cart badge to 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.getByText('Products', { exact: true })).toBeVisible();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await expect(
    page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveText('1');
});