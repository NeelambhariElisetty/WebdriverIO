
//handling popups

describe('To handle popups',async()=>{
    it('To login into rediff mail and validate popup',async()=>{
        await browser.url('https://mail.rediff.com/cgi-bin/login.cgi');
        await $('#login1').setValue('youcanautomate');
        (await $('.signinbtn')).click();
        await browser.pause(4000);

        //to validate alert box
        expect(await browser.isAlertOpen()).to.equal(true);
        let alertMessage = "Please enter your password";

        //to validate alert message
        await expect(await browser.getAlertText()).to.equal(alertMessage);
        //console.log(await browser.getAlertText());
        await browser.acceptAlert();
    })
})