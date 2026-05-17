
import { test } from '@playwright/test';

test.describe('Start Application Step', () => {

    test.beforeEach(async ({ page }) => {

        let encodedCredentials = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString('base64'); // token ....

        await page.setExtraHTTPHeaders({
            'Authorization': `Basic ${encodedCredentials}`
        });

        await page.goto(process.env.SEP_QA_URL);
        await page.waitForTimeout(3000);
    })
    


  test('Verify that clicking the Terms & Conditions link opens a new Terms & Conditions tab', async ({ page }) => {
     page.waitForEvent("popup");
    
  });


  test('Verify that the first stepper is blue initially and changes to green once Step 1 is completed', async ({ page }) => {

  });

  test('Verify that personal input fields are enabled and accept user input', async ({ page }) => {

  });

  
});


