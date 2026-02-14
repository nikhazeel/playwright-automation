const {test, expect} = require('@playwright/test');

test('Practice Software Testing',async ({page})=>
{
    await page.goto("https://practicesoftwaretesting.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
    await page.locator('a[href="/auth/login"]').click();
    await page.locator('#email').fill("test@gmail.com");
    await page.locator('#password').fill("Welcomemancode01!");
    await page.locator('[data-test="login-submit"]').click();
    await expect(page.locator('#menu')).toHaveText('Jay Zayn', {timeout: 30000}); // Verify logged-in user

}); 


