const homePage = require('../pom/homePage.page');
const basePage = require('../pom/basePage.page');
const searchResults = require('../pom/searchResults.page');
const productDescription = require('../pom/productDescription.page');
const allureReporter = require('@wdio/allure-reporter').default

describe('Place order journey',async()=>{
    it('Should be able to place order',async()=>{
        allureReporter.addStep("Opening the url");
        await basePage.navigateToUrl();
        allureReporter.addStep("Search for Bean bag");
        await homePage.searchForGivenKeyword('Bean bag');
        allureReporter.addDescription("<b>Bean bag search is done</b>","html");
        allureReporter.addArgument("platform","Windows")
        let parentId = await searchResults.clickOnFirstProductName();
        let price = productDescription.addProducttoCartAndReturnTheprice(parentId);
        productDescription.navigateToGotoCartPage();
        await browser.pause(10000);

    })
})