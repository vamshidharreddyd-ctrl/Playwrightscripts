import { test, expect } from '@playwright/test';



test.only("screenshot assert ",async ({page})=>{
    
    await page.goto("https://playwright.dev/")

    await expect(page).toHaveScreenshot("image.png");   
})

