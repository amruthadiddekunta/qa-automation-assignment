import { test, expect } from '@playwright/test';

const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';

test('standard user can log in and sees the Products title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator(usernameInput).fill('standard_user');
  await page.locator(passwordInput).fill('secret_sauce');
  await page.locator(loginButton).click();

  await expect(page.getByText('Products', { exact: true })).toBeVisible();
});

test('locked-out user sees an error message', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator(usernameInput).fill('locked_out_user');
  await page.locator(passwordInput).fill('secret_sauce');
  await page.locator(loginButton).click();

  await expect(page.locator('[data-test="error"]')).toContainText(/locked out/i);
});