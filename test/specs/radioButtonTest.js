describe('Automating Radio button', async () => {
    it('Click two way button', async () => {
        await browser.url('https://www.spicejet.com/')
        let roundTripbutton = await $('//div[text()="round trip"]')
        await roundTripbutton.click();
        await browser.pause(4000);

        
        let oneWayButton = await $('//div[text()="one way"]')

        //isEnabled
        console.log(" Is one way button enabled" +await oneWayButton.isEnabled());

        //isDisplayed
        console.log("is one way displayed"+ await oneWayButton.isDisplayed());

        //isClickable
        console.log("is one way clickable"+ await oneWayButton.isClickable());

    })
})