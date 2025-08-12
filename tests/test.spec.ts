import { test, expect } from '@playwright/test';

const baseURL = 'https://www.riamoneytransfer.com/en-us/';


test('Outer test', async ({ page }) => {
  await page.goto('https://www.riamoneytransfer.com/en-us/');
  await expect(page.locator('h1')).toBeVisible(); // Moved the assertion directly into the outer test
  await page.locator('.sc-f8be054-1 iXZhrs').click(); // Example selector, replace with actual one
//   await page.getByText('Get Started').click(); // Example interaction, replace with actual selector
});

test('Valid login and send to functions', async ({ page }) => {
  const validUsername = process.env.VALID_USERNAME || '';
  const validPassword = process.env.VALID_PASSWORD || '';

  // Navigate to the homepage
 test.setTimeout(20000); // Example: 20 seconds for this test only
  await page.goto(baseURL);
  // Example: Interact with "Send to" functions
  // Replace selectors with actual ones from your page
  // For example, click "Send Money" dropdown
  test.setTimeout(200000000); // Example: 20 seconds for this test only
  await page.click('selector-for-send-to-dropdown');  // Replace with actual selector
  // Choose a specific method or option
  await page.click('selector-for-send-to-option');    // Replace with actual selector

  // Wait for the "Get Started" button to appear
  const getStartedButton = page.locator('button:has-text("Get Started")');
  await expect(getStartedButton).toBeVisible();

  // Optionally click the "Get Started" button
  await getStartedButton.click();

  // Add further assertions as needed
});
