const LoginPage = require('../pom/login.page')


describe('Demo Tests', () => {
    it('Login test', async () => {
        browser.url('https://the-internet.herokuapp.com/login')

        await LoginPage.Login('tomsmith','SuperSecretPassword!')
        await LoginPage.checkMessage('You logged into a secure area!')

        
        // await $('[id="username"]').setValue('tomsmith')
        // await $('[id="password"]').setValue('SuperSecretPassword!')
        // await $('button[type="submit"]').click()
        // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')
        
    })




})