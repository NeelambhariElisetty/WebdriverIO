
describe('Demo tests', function () {

    it('My First test', async ()=> {
        browser.url('https://google.com')
        await $('[name="q"]').setValue('Webdriverio')
    //    await (await $('[name="btnK"]')).click()
       browser.keys('Enter')
        browser.pause(50000)

    })

})