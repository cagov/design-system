import { test, expect } from "@playwright/test";
import {
  injectAxe,
  checkA11y
} from "axe-playwright";

let testLocation = "http://localhost:8080";

let pageUrls = ["/", "/get-started/","/components/","/components/content-navigation/readme/"];

pageUrls.forEach(pageUrl => {

  test("a11y page tests "+pageUrl, async ({ page }) => {

    console.log(testLocation+pageUrl)

    await page.goto(testLocation+pageUrl);
  
    await injectAxe(page);

    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    })
  
  });
});
