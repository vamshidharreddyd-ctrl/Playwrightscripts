import { Locator, Page } from "@playwright/test";
export class Amazon{
    page:Page;
    Searchtext:Locator;
    Amazonsearchresult:Locator;
    cashbacklink:Locator;
    cashboxlink:Locator;
    close:Locator;

    constructor(page:Page){
      this.page=page;
      this.Searchtext=page.locator(`//*[@id='twotabsearchtextbox']`);
      this.Amazonsearchresult=page.locator(`((//*[contains(@*,'MAIN-SEARCH_RESULTS')])//img)`);
      this.cashbacklink=page.locator(`//*[@id="itembox-GCCashback"]/span/div/span`);
      this.cashboxlink=page.locator(`//*[contains(@id,"tnc_title")]/../..//li[1]`);
      this.close=page.locator('//*[@id="twister-plus-dp-bg"]/span/i');
    }
}