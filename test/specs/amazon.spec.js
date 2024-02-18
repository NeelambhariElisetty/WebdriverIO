describe('Amazon home page test', async () => {

    xit('Should be able to launch amazon homepage', async () => {
        await browser.url('https://www.amazon.in');

        console.log(await browser.getTitle());
        //await expect(browser).toHaveUrl('https://www.amazon.in/');
        //await expect(browser).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
        expect(await browser.getUrl()).to.include('amazon');
        expect(await browser.getTitle()).to.equal('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')

    })

    xit('Search for Mobile', async () => {
        // locators - xpath, css
        await $('//input[@id="twotabsearchtextbox"]').setValue('Mobile');
        await $('#nav-search-submit-button').click();

        // clicking the link using text ---- *=
        await $('*=Update location').click();
        await browser.pause(5000);
        await $('span[class="a-button a-button-primary a-button-span12"]').getText();
    })
    //scroll into view handling
    it('Scroll into view method', async () => {
        await browser.url('https://www.amazon.in');
        await $('//input[@id="twotabsearchtextbox"]').setValue('Bean bag');
        await $('#nav-search-submit-button').click();
        await browser.pause(4000);
        let minInputBox = await $('#low-price');
        await minInputBox.scrollIntoView();
        await minInputBox.setValue(5000)
        let clickGo = await $('#a-autoid-1');
        await clickGo.click();
        await browser.pause(9000);
    })



})

