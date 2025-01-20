import { test, Page,  expect, firefox, TestDetails } from '@playwright/test';
import { BASE_URL, SELECTORS, USER_EMAIL, USER_PASSWORD } from './variables';
import { TIMEOUTS } from './variables';

async function login(page: Page) {
  await page.goto(BASE_URL); // Navigate to the base URL
  await page.getByPlaceholder(SELECTORS.loginEmail).click();
  await page.getByPlaceholder(SELECTORS.loginEmail).fill(USER_EMAIL);
  await page.getByPlaceholder(SELECTORS.loginPassword).press('Tab');
  await page.getByPlaceholder(SELECTORS.loginPassword).fill(USER_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  // Optionally, wait for navigation or a specific element to ensure login success
}

test.describe('Logon', () => {
  test.beforeEach(async ({ page }) => {
    await login(page); // Use the login function before each test
  });

  test('Sanity Navigation', async ({ page }) => {
    // Verify that Clusters tab should be present.

    await expect(page.getByRole('tab', { name: 'Fraud Pattern' })).toBeVisible({ timeout: TIMEOUTS.longOperation });
   
    await page.getByRole('tab', { name: 'Suspected Fraud' }).click({timeout: TIMEOUTS.longOperation });
    await page.getByRole('tab', { name: 'Fraud Pattern' }).click({timeout: TIMEOUTS.longOperation });
    await page.getByRole('tab', { name: 'Fraud in %' }).click({timeout: TIMEOUTS.longOperation });

   /*  await page.getByRole('button', { name: 'Export Data' }).click();
    await page.getByRole('button', { name: 'Export table' }).click();
    await page.getByRole('button', { name: 'Export Data' }).click();

    await page.getByRole('button', { name: 'Export graph' }).click({timeout: TIMEOUTS.longOperation });

    await page.getByText('Fraud detectionDashboardLogout').click({timeout: TIMEOUTS.longOperation });
    await page.getByText('Fraud detectionDashboardLogout').hover({timeout: TIMEOUTS.longOperation });
    await page.getByText('Fraud detectionDashboardLogout').click({timeout: TIMEOUTS.longOperation });
 */
    await page.locator('a').filter({ hasText: 'Logout' }).hover().then(() => console.log('hovered'));
    const logoutLink = await page.locator('a').filter({ hasText: 'Logout' }).hover();
    await page.mouse.click(0, 100);
    await page.locator('a').filter({ hasText: 'Logout' }).click();
   //await page.close();
   
  });
});
