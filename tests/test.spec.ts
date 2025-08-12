import {test, expect} from "@playwright/test";

// Test case for valid login credentials
test('Valid login', async ({ page }) => {
    await page.goto("https://www.riamoneytransfer.com/en-us/");
    await page.click('button:has-text("Log in")');
    await page.fill('input[name="email"]', 'validuser@example.com');
    await page.fill('input[name="password"]', 'validpassword');
    await page.click('button[type="submit"]');
    // Optionally, check for a successful login indicator
    await expect(page).toHaveURL(/dashboard|account|home/i);
});

// Test case for invalid login credentials
test('Invalid login', async ({ page }) => {
    await page.goto("https://www.riamoneytransfer.com/en-us/");
    await page.click('button:has-text("Log in")');
    await page.fill('input[name="email"]', 'invaliduser@example.com');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');
    // Optionally, check for an error message
    await expect(page.locator('text=Invalid email or password')).toBeVisible();
});

// Test case for checking the presence of the login button
test('Login button is visible', async ({ page }) => {
    await page.goto("https://www.riamoneytransfer.com/en-us/");
    await expect(page.locator('button:has-text("Log in")')).toBeVisible();
});

// Test case for navigation to the registration page
test('Navigate to registration page', async ({ page }) => {
    await page.goto("https://www.riamoneytransfer.com/en-us/");
    await page.click('a:has-text("Sign up")');
    await expect(page).toHaveURL(/.*register.*/);
});
