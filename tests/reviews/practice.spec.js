

import { test, chrome, firefox, webkit } from '@playwright/test';

test.describe('user story', () => {

  test('test case 1', async ({ page }) => {  // browser, context, request & baseUrl
  });

  test('test case 2', async ({ page }) => {
  });

  test('test case 3', async ({ page }) => {
  });

});

test('test case 3', async () => {

  let browser = await first.launch();
  let context = await browser.newContext();
  let page = await context.newPage();

  user(page);

  await page.close();

});