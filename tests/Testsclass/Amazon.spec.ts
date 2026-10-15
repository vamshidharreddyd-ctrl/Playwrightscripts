
import {
    test,
    chromium,
    Browser,
    BrowserContext,
    Page
} from "@playwright/test";

import { Amazon } from "../pages/Amazon";

test.describe("Amazon", () => {

    let browser: Browser;
    let context1: BrowserContext;
    let page1: Page;
    let amazonpage: Amazon;

    test.beforeEach("Launch browser", async () => {
        browser = await chromium.launch({ headless: false });

        context1 = await browser.newContext();
        page1 = await context1.newPage();

        await page1.goto("https://www.amazon.in");

        amazonpage = new Amazon(page1);
    });

    test("Search product and read cashback", async () => {

        await amazonpage.Searchtext.fill("mobile");
        await amazonpage.Searchtext.press("Enter");

        // Wait for search results
      //  await amazonpage.Amazonsearchresult.first().waitFor();
      await page1.waitForTimeout(3000);
      console.log(await amazonpage.Amazonsearchresult.count());
        for(let i=0;i<await amazonpage.Amazonsearchresult.count();i++){
          // Capture a new tab when clicking the result
        const [page3] = await Promise.all([
            context1.waitForEvent("page"),
            amazonpage.Amazonsearchresult.nth(i).click()
        ]);

        await page3.waitForLoadState("domcontentloaded");

        // Initialize Page Object for the new tab
        amazonpage = new Amazon(page3);

        await amazonpage.cashbacklink.click();

        const text = await amazonpage.cashboxlink.first().textContent();
        console.log(text);
        await amazonpage.close.click();
        await page3.close();
          amazonpage = new Amazon(page1);
          await page1.bringToFront();
        }
        

        await page1.pause();
    });

    test.afterEach(async () => {
      //  await browser.close();
    });

});
