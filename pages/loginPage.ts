import { Page } from '@playwright/test';
import { LoginLocators } from '../locators/loginLocators';

export abstract class LoginPage extends LoginLocators {
  constructor(protected page: Page) {
    super();
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async waitForElement(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }

  async isElementVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }

   async fillUsername(username: string): Promise<void> {
    await this.page.fill(this.usernameInput, username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.page.fill(this.passwordInput, password);
  }

  async clickSubmit(): Promise<void> {
    await this.page.click(this.loginButton);
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickSubmit();
  }

  async isErrorMessageVisible(): Promise<boolean> {
    return await this.isElementVisible(this.errorMessage); 
  }
} 
