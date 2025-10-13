import { Page } from '@playwright/test';
import { BasePage } from './basePage';
import { LoginLocators } from '../locators/loginLocators';

export class LoginPage extends BasePage {
  private loginLocators = new LoginLocators();

  constructor(page: Page) {
    super(page);
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

   async fillUsername(username: string): Promise<void> {
    await this.page.fill(this.loginLocators.usernameInput, username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.page.fill(this.loginLocators.passwordInput, password);
  }

  async clickLogin(): Promise<void> {
    await this.page.click(this.loginLocators.loginButton);
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

} 
