

class BlazePage {

    get parent() {

        return $('ul.menu.menu-level-0.dropdown')
    }

    get childElements() {
        return this.parent.$$('li');
    }

    get getTextfromLI() {
        return this.childElements.filter(elem => {

            console.log(elem.getText())
        })
    }

    get ProductLink() {
        return $('ul.menu.menu-level-0 li:nth-child(1) span')
    }

    clickProductLink() {

        if (this.ProductLink.isDisplayed() === true) {
            this.ProductLink.Click();
        }
    }

    getCheckboxElement(index) {
        return $(`form#checkboxes input:nth-child(${index})`)
    }

    ClickonCheckbox(index){
        this.getCheckboxElement(index).waitForDisplayed();
        this.getCheckboxElement(index).click();
    }

    

}

module.exports = new BlazePage();