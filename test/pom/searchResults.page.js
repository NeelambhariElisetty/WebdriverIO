

module.exports = new class searchResults{


    get ProductSearchResult(){
        return $$('//div[@class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small"]//span[@class="a-size-base-plus a-color-base a-text-normal"]')[1];
    }

    async clickOnFirstProductName(){

        let parentWindowid = browser.getWindowHandle();//It will return parent window Id
        await this.ProductSearchResult.click();
        return parentWindowid;
    }
}