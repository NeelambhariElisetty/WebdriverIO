


describe('Amazon home page test', async () => {

    it('Should be able to launch amazon homepage', async () => {
        await browser.url('https://www.amazon.in');
        
        console.log(await browser.getTitle());
        await expect(browser).toHaveUrl('https://www.amazon.in/');
        await expect(browser).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
        await expectChai(browser).to.include('amazon');
    })
})