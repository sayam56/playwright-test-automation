import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('#header_container div').nth(1)).toBeVisible();
  await expect(page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack');
  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await expect(page.locator('#shopping_cart_container')).toContainText('1');
  await page.getByRole('link', { name: '1' }).click();
  await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toBeVisible();
  await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
  await expect(page.getByRole('img')).toBeVisible();
  await expect(page.locator('#inventory_item_container')).toContainText('Sauce Labs Backpack');
  await page.getByRole('button', { name: 'REMOVE' }).click();
  await page.getByRole('button', { name: '<- Back' }).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.locator('[data-test="username"]')).toBeVisible();
});