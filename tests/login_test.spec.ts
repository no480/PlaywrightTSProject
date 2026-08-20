import { expect, test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.ts';
import loginData from '../Test-data/loginData.json';


// webhook test

loginData.forEach((data) => {


    if (!data.run) return;

    test(`Login Test - ${data.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(data.username, data.password);

        if (data.expected === 'success') {
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        } else {
            await expect(loginPage.errorMessage).toBeVisible();
        }
    })

});


// test(' Valid Login Test', async ({ page }) => {

//     const loginPage = new LoginPage(page);

//     await loginPage.gotoLoginPage();
//     // await loginPage.login('standard_user', 'secret_sauce');
//      await loginPage.login(
//         loginData.valid_user.username,
//         loginData.valid_user.password
//      );
//     // await loginPage.verifyLoginSuccess();

//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

// });


// test('Invalid Login Test', async ({ page }) => {

//     const loginPage = new LoginPage(page);

//     await loginPage.gotoLoginPage();
//     // await loginPage.login('standard_user', 'secret_sauce');
//      await loginPage.login(
//         loginData.invalid_user.username,
//         loginData.invalid_user.password
//      );
//     // await loginPage.verifyLoginSuccess();

//     await expect(loginPage.errorMessage).toBeVisible();

// });