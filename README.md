# PlaywrightTemplate

Playwright is an open-source framework for web test automation, designed for end-to-end testing of web applications across various browsers (Chromium, Firefox, and WebKit). It is known for its speed, reliability, and ease of use, making it suitable for beginners.
Getting Started with Playwright:
Prerequisites:
Node.js: Playwright relies on Node.js, so ensure it is installed on your system.
Visual Studio Code (or preferred IDE): A code editor like VS Code is recommended for writing and managing your tests.
Basic JavaScript/TypeScript knowledge: Familiarity with JavaScript or TypeScript concepts like variables, functions, and asynchronous operations (async/await) is beneficial.

## Installation:
Using the VS Code Extension: The Playwright VS Code extension simplifies the setup process, handling the installation of Playwright and its required browsers.
Using the Command Line:
Create a new project folder and navigate into it.
Initialize a Node.js project: **` npm init -y `**
Install Playwright: **` npm init playwright@latest `** (This command will prompt you to choose your language, test location, and whether to install browsers).
Alternatively, install Playwright and then install browsers separately:
npm i -D @playwright/test
npx playwright install


## Writing Your First Test:
Playwright provides a code generator (**` npx playwright codegen <URL> `**) that records your interactions with a webpage and generates a basic test script. This is an excellent way for beginners to understand the mapping between UI actions and Playwright code.

Alternatively, you can manually write tests using Playwright's API. Common actions include:
Navigating to a URL: await page.goto('https://example.com');
Clicking elements: await page.click('button');
Filling forms: await page.fill('input[name="username"]', 'my_username');
Assertions: await expect(page.locator('h1')).toHaveText('Welcome');


## Running Tests:
Tests can be run from the command line (e.g., npx playwright test) or through the test explorer in VS Code.
Playwright supports running tests in headless mode (without a visible browser UI) or headed mode (with a visible browser UI).

### Key Concepts for Beginners:
Locators: Used to identify elements on a webpage (e.g., by text, CSS selector, XPath).
Assertions: Used to verify expected outcomes in your tests.
Async/Await: Playwright's API is asynchronous, requiring the use of async and await for handling promises.
Page Object Model (POM): A design pattern for organizing your test code, making it more maintainable and readable.
Test Reports: Playwright can generate HTML reports to visualize test results. Command is npx playwright show-report

Command to run brower when test are ruined **` npx playwright test --headed `**


Add two folders to the root of the project named locators and pages
Add files named loginPage.ts and loginLocators.ts , same for the basePage and baseLocators files.

