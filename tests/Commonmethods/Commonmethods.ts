
import { Locator, Page } from '@playwright/test';

export class CommonMethods {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickSignupLogin() {

        return this.page.getByRole('link', { name: 'Signup / Login' })
    }
    async register(username: string, emaill: string) {
        await this.page.getByRole('textbox', { name: 'name' }).fill(username);
        await this.page.getByRole('textbox', { name: 'email' }).nth(1).fill(emaill);
        await this.page.locator(`//*[@id="form"]/div/div/div[3]/div/form/button`).click();
    }
    async typetext(locators:Locator,text:string){
        await locators.fill(text);
    }
    async clickaction(locators:Locator){
        await locators.click();
    }
    async featchtext(locator:Locator){
        return await locator.textContent();
    }

    // for dropdown validations
   async selectoptions(locator: Locator, aproch: string, value: string) {
    if (aproch === "visibleText") {
        await locator.selectOption({ label: value });
    }
    else if (aproch === "value") {
        await locator.selectOption({ value: value });
    }
    else if (aproch === "index") {
        await locator.selectOption({ index: Number(value) });
    }
}
// Window / new tab validation
async windowshift(locator: Locator, page: Page) {
    const [newpage] = await Promise.all([
        page.waitForEvent("popup"),
        locator.click()
    ]);

    return newpage;
}
}
