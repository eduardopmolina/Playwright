import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.riamoneytransfer.com/en-us/');
});

