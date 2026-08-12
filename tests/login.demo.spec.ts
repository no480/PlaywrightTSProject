import {test, expect, Locator} from '@playwright/test';

test('login test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const usernameInput: Locator = page.locator('#user-name');
    const passwordInput: Locator = page.locator('#password');
    const loginButton: Locator = page.locator('#login-button');

    await usernameInput.fill('standard_user');
    await passwordInput.fill('secret_sauce');
    await loginButton.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});