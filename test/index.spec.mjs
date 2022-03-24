import { test, expect } from "@playwright/test";
import {
  injectAxe,
  checkA11y
} from "axe-playwright";

let testLocation = "http://localhost:8080";

let pageUrls = ["/", "/get-started/","/components/","/components/page-navigation/readme/"];

pageUrls.forEach(pageUrl => {

  test("a11y page tests "+pageUrl, async ({ page }) => {

    await page.goto(testLocation+pageUrl);
  
    await injectAxe(page);

    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    })
  
  });
});

test("base css preview theme switcher test ", async ({ page }) => {

  await page.goto(testLocation+'/components/base-css/preview/');

  await injectAxe(page);

  await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true },
  })

  await page.click('#drought');

  const themeCSSUrl = await page.evaluate(() => {
    return Promise.resolve(document.querySelector('#theme-stylesheet').href);
  },);
  expect(themeCSSUrl.indexOf('drought') > -1).toBe(true);

});
