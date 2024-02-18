const blazePage = require('../pom/blazePage.page')


describe('Blaze Tests', () => {

    xit('Get list names from UI', async () => {
        browser.url("https://www.blazemeter.com/")
        await blazePage.getTextfromLI;
    })

    it('Click on the product link is displayed', async () => {
       // await blazePage.clickProductLink();
        //browser.pause(5000);
        await browser.url('https://the-internet.herokuapp.com/checkboxes');
        await expect(await browser.getUrl()).toHaveUrl(`${browser.options.baseUrl}`);
    })

    it('Click the checkbox', async () => {
        await browser.url('https://the-internet.herokuapp.com/checkboxes');
        await blazePage.ClickonCheckbox(1);
        await expect(blazePage.getCheckboxElement(1)).toBeSelected();
        browser.pause(10000);
        

    })
})
