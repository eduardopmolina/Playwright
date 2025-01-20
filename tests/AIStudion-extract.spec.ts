import { test, expect } from "@playwright/test";
import { CODILITY_URL, CODILITY_USER_EMAIL, CODILITY_USER_PASSWORD, CODILITY_SELECTORS, INVALID_CREDENTIALS } from "./variables";

test('Valid login', async ({ page }) => {
    await page.goto(CODILITY_URL);
    await page.fill(CODILITY_SELECTORS.emailInput, CODILITY_USER_EMAIL);
    await page.fill(CODILITY_SELECTORS.passwordInput, CODILITY_USER_PASSWORD);
    await page.click(CODILITY_SELECTORS.loginButton);
    // Use a more specific assertion.  Waiting for an element that appears *after* successful login is more robust
    await expect(page.getByText(CODILITY_USER_EMAIL)).toBeVisible(); //  Or another element that confirms login
});


test('Invalid login - incorrect email', async ({ page }) => {
    await page.goto(CODILITY_URL);
    await page.fill(CODILITY_SELECTORS.emailInput, INVALID_CREDENTIALS.invalidEmail);
    await page.fill(CODILITY_SELECTORS.passwordInput, CODILITY_USER_EMAIL);
    await page.click(CODILITY_SELECTORS.loginButton);
    await expect(page.getByText(CODILITY_SELECTORS.errorMessageText)).toBeVisible();
});


test('Invalid login - incorrect password', async ({ page }) => {
    await page.goto(CODILITY_URL);
    await page.fill(CODILITY_SELECTORS.emailInput, CODILITY_USER_EMAIL);
    await page.fill(CODILITY_SELECTORS.passwordInput, "");
    await page.click(CODILITY_SELECTORS.loginButton);
    await expect(page.getByText(CODILITY_SELECTORS.emptypwd)).toBeVisible();
});

test('Invalid login - empty credentials', async ({ page }) => {
    await page.goto(CODILITY_URL);
    // Clear any default values
    await page.fill(CODILITY_SELECTORS.emailInput, "");
    await page.fill(CODILITY_SELECTORS.passwordInput, "");
    await page.click(CODILITY_SELECTORS.loginButton);
    await expect(page.getByText(CODILITY_SELECTORS.emptyemail)).toBeVisible();
    await expect(page.getByText(CODILITY_SELECTORS.emptypwd)).toBeVisible();
});

test('Login using Tab and Enter keys', async ({ page }) => {
    await page.goto(CODILITY_URL);
    await page.focus(CODILITY_SELECTORS.emailInput);
    await page.keyboard.type(CODILITY_USER_EMAIL);
    await page.keyboard.press('Tab');
    await page.keyboard.type(CODILITY_USER_EMAIL);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    // Wait for navigation if it occurs or use other success criteria if not
    await page.waitForNavigation();  // If a redirect occurs
    // OR
    // await page.waitForSelector(CODILITY_SELECTORS.dashboardElement); // If no navigation, wait for an element indicating success
    await expect(page.getByText(CODILITY_USER_EMAIL)).toBeVisible();  // Make sure this assertion is valid
});

