const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.programsbuzz.com/
  await page.goto('https://www.programsbuzz.com/');

  // Click #block-mainnavigation >> text=Tutorials
  await page.locator('#block-mainnavigation >> text=Tutorials').click();
  // assert.equal(page.url(), 'https://www.programsbuzz.com/#');

  // Click text=Playwright
  await page.locator('text=Playwright').click();
  // assert.equal(page.url(), 'https://www.programsbuzz.com/course/playwright-tutorial');

  // ---------------------
  await context.close();
  await browser.close();
})();