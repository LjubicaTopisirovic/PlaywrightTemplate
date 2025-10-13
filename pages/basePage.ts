import { Page } from '@playwright/test';
import { BaseLocators } from '../locators/baseLocators';

export abstract class BasePage extends BaseLocators {
    private baseLocators = new BaseLocators();
  constructor(protected page: Page) {
    super();
  }
  
  async waitForElement(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }

  async isElementVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }
} 