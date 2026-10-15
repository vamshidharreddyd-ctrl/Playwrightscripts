
import { test as base, expect, Page } from '@playwright/test';
import { CommonMethods } from '../Commonmethods/Commonmethods';
import { registers } from '../pages/register';

export const test = base.extend<{register: (url: string) => Promise<void>,create:(username:string,email:string)=>Promise<void>}>({
    register: async ({ page }, use) => {

        const commonMethods: CommonMethods = new CommonMethods(page);

        await use(async (url: string): Promise<void> => {
            await page.goto(url);
           await (await commonMethods.clickSignupLogin()).click();
        });
        // await (await commonMethods.clickSignupLogin()).click();
    },
    create:async({page},use)=>{
        const commonMethods: CommonMethods = new CommonMethods(page);
        await use(async (username:string,email:string): Promise<void> => {
            await commonMethods.register(username,email);

        }); 
    }
});

export { expect };
