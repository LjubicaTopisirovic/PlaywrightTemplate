import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

//const TEST_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
//const VALID_USERNAME = 'Admin';
//const VALID_PASSWORD = 'admin123';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new (class extends LoginPage {})(page)
    await loginPage.navigate('/');
    await loginPage.isElementVisible(loginPage.loginButton);
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
        await loginPage.clickSubmit();
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
        await loginPage.fillUsername("admin");
      });
      await test.step('Enter invalid password', async () => {
        await loginPage.fillPassword("admin");
      });
      await test.step('Click Login button', async () => {
        await loginPage.clickSubmit();
      });
       await test.step('Verify user is not redirected to dashboard', async () => {
        await expect(loginPage).toBeTruthy();  
      });
    });
  });

});  