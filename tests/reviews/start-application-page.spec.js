import { test, expect } from "@playwright/test";
import { CommonUI } from "./CommonUI";

test.describe("Start Application Step", () => {

  test.beforeEach(async ({ page }) => {
   
    await CommonUI.login(page);
    
  });

  test("Verify that clicking the Terms & Conditions link opens a new Terms & Conditions tab", async ({
    page,
  }) => {
    let windowPopupEventListener = page.waitForEvent("popup");

    let termsConditionLink = page.getByRole("link", {
      name: "Terms and conditions",
    });
    //a[text()='Terms and conditions']
    await expect(termsConditionLink).toBeVisible();
    await expect(termsConditionLink).toBeEnabled();

    await termsConditionLink.click(); // triggers pop up window
    let page2 = await windowPopupEventListener;

    let termsConditionsHeading = page2.getByRole('heading', { name: 'Terms and Conditions' });

    await expect(termsConditionsHeading).toBeVisible();
    
  });



  test("Verify that the first stepper is blue initially and changes to green once Step 1 is completed", async ({
    page,
  }) => {

  });

  test("Verify that personal input fields are enabled and accept user input", async ({
    page,
  }) => {
    
  });

});

/*
<a _ngcontent-ng-c3758746842="" href="https://cydeo.com/terms-conditions/" target="_blank">Terms and conditions</a>
*/

//tageName[@attributeName='attributeValue']

//a[@href='https://cydeo.com/terms-conditions/']
