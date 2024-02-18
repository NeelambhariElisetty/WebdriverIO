describe('Handling dropdowns',async()=>{
    it('Selecct IND country',async()=>{
        await browser.url('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
        //select by attribute
        let country = await $('#post-2646 > div.twelve.columns > div > div > div > p > select');
        await country.selectByAttribute('value','IND');
        await browser.pause(4000);

        await country.selectByVisibleText('Canada');
        await browser.pause(4000);

        await country.selectByIndex(9);
        await browser.pause(4000);
    })
   
})