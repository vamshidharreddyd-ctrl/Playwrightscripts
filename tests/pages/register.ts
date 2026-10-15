import { Locator, Page } from "@playwright/test";

export class registers{
     page: Page;
      gender:Locator;
     date:Locator;
     month:Locator;
     year:Locator;

    constructor(page:Page){
    this.page=page;
   this.gender=page.locator(`//*[@value='Mr']`);
   this.date=page.locator(`//*[@id="days"]`);
   this.month=page.locator(`//*[@id="months"]`);
   this.year=page.locator(`//*[@id="years"]`);
}
}

