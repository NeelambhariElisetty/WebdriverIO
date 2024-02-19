module.exports = new class ProductDescription {

    get productPrice() {
        return $('//div[@id="corePrice_feature_div"]//span[@class="a-price-whole"]');
    }

    get addToCart() {
        return $('//a[@title="Add to Cart"]');
    }

    get goToCartButton() {
        return $('#atc-declarative');
    }

    async addProducttoCartAndReturnTheprice(parentWindowId) {

        let allWindowHandles = browser.getWindowHandles();
        for (let i = 0; i <= allWindowHandles.length; i++) {
            if (allWindowHandles[i] != parentWindowId) {
                await browser.switchToWindow(allWindowHandles[i]);
                break;
            }
        }
        let price = await this.productPrice.getText();
        await this.addToCart.click();
        return price;

    }
    async navigateToGotoCartPage() {
        await this.goToCartButton.click();


    }

}