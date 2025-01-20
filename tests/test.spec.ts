import { test, expect } from "@playwright/test";
import { CODILITY_URL, CODILITY_USER_EMAIL, CODILITY_USER_PASSWORD, CODILITY_SELECTORS, INVALID_CREDENTIALS } from "./variables";

// Test case for valid login credentials
test('Valid login', async ({ page }) => {
    await page.goto(CODILITY_URL); // Navigate to the login page
    await page.fill(CODILITY_SELECTORS.emailInput, CODILITY_USER_EMAIL); // Enter valid email
    await page.fill(CODILITY_SELECTORS.passwordInput, CODILITY_USER_PASSWORD); // Enter valid password
    await page.click(CODILITY_SELECTORS.loginButton); // Click the login button
    // Assert that a specific element visible after login is displayed. This is more reliable than checking for text.
    await expect(page.getByText(CODILITY_USER_EMAIL)).toBeVisible(); // Check for a welcome message or user-specific element 
});


// Test case for invalid login with incorrect email
test('Invalid login - incorrect email', async ({ page }) => {
    await page.goto(CODILITY_URL); // Navigate to the login page
    await page.fill(CODILITY_SELECTORS.emailInput, INVALID_CREDENTIALS.invalidEmail); // Enter an invalid email
    await page.fill(CODILITY_SELECTORS.passwordInput, CODILITY_USER_EMAIL); // Enter a  password
    await page.click(CODILITY_SELECTORS.loginButton); // Click the login button
    // Expect an error message specific to incorrect email to be visible
    await expect(page.getByText(CODILITY_SELECTORS.errorMessageText)).toBeVisible(); 
});


// Test case for invalid login with incorrect password
test('Invalid login - incorrect password', async ({ page }) => {
    await page.goto(CODILITY_URL); // Navigate to the login page
    await page.fill(CODILITY_SELECTORS.emailInput, CODILITY_USER_EMAIL); // Enter a valid email
    await page.fill(CODILITY_SELECTORS.passwordInput, ""); // Enter an invalid password (empty)
    await page.click(CODILITY_SELECTORS.loginButton); // Click the login button
    // Expect an error message specific to an empty password field.
    await expect(page.getByText(CODILITY_SELECTORS.emptypwd)).toBeVisible();
});


// Test case for invalid login with empty email and password
test('Invalid login - empty credentials', async ({ page }) => {
    await page.goto(CODILITY_URL); // Navigate to the login page
    // Clear any default values in input fields to ensure empty credentials
    await page.fill(CODILITY_SELECTORS.emailInput, ""); // Clear email input
    await page.fill(CODILITY_SELECTORS.passwordInput, ""); // Clear password input
    await page.click(CODILITY_SELECTORS.loginButton); // Click the login button
    // Expect error messages for both empty email and password.
    await expect(page.getByText(CODILITY_SELECTORS.emptyemail)).toBeVisible();
    await expect(page.getByText(CODILITY_SELECTORS.emptypwd)).toBeVisible();
});

// Test case for login using Tab and Enter keys for navigation
test('Login using Tab and Enter keys', async ({ page }) => {
    await page.goto(CODILITY_URL); // Navigate to the login page
    await page.focus(CODILITY_SELECTORS.emailInput); // Focus on the email input field
    await page.keyboard.type(CODILITY_USER_EMAIL); // Enter the valid email
    await page.keyboard.press('Tab'); // Press Tab to move to the password field
    await page.keyboard.type(CODILITY_USER_EMAIL); // Enter the valid password
    await page.keyboard.press('Tab'); // Press Tab to potentially move to the login button or another interactive element.
    await page.keyboard.press('Enter'); // Press Enter to submit credentials (simulating clicking the login button)

    // Wait for page navigation after login or for a specific element to appear.
    await page.waitForNavigation();  // If login results in navigation
    // OR use the following if no navigation occurs
    // await page.waitForSelector(CODILITY_SELECTORS.dashboardElement); // Wait for an element that confirms login

    // Assert that a user-specific element or welcome message is visible.
    await expect(page.getByText(CODILITY_USER_EMAIL)).toBeVisible();  
});
