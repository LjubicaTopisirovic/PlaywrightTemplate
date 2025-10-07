import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new (class extends LoginPage {})(page)
    await loginPage.navigate('/');
  });

  test.describe('Positive Scenarios', () => {
    test('TC001: Valid Login with Correct Credentials', async ({ page }) => {
      await test.step('Navigate to login page', async () => {
        // Already done in beforeEach     
      });
      await test.step('Enter valid username', async () => {
        await loginPage.fillUsername(process.env.VALID_USERNAME || '');
      });
      await test.step('Enter valid password', async () => {
        await loginPage.fillPassword(process.env.VALID_PASSWORD || '');
      });
      await test.step('Click Login button', async () => {
        await loginPage.clickLogin();
      });
      await test.step('Verify user is redirected to dashboard', async () => {
        await expect(page).toHaveURL(/dashboard/);
      });
    });
  });

  test.describe('Negative Scenarios', () => {
    test('TC002: Invalid Login with Incorrect Credentials', async ({ page }) => {
      await test.step('Navigate to login page', async () => {
        // Already done in beforeEach    
      });
      await test.step('Enter invalid username', async () => {
        await loginPage.fillUsername(process.env.INVALID_USERNAME || '');
      });
      await test.step('Enter invalid password', async () => {
        await loginPage.fillPassword(process.env.INVALID_PASSWORD || '');
      });
      await test.step('Click Login button', async () => {
        await loginPage.clickLogin();
      });
      await test.step('Verify the User remains on the login page', async () => {
        await expect(page).toHaveURL(/login/);
      });
      await test.step('Verify alert error apears', async () => {
        await expect(loginPage.isElementVisible(loginPage.errorMessage)).toBeTruthy();
      });
    });
  });

});  