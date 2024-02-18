class LoginPage {

    get userNameTextBox() {
        return $('#username')
    }

    get passwordTextbox() {
        return $('#password')
    }

    get loginButton() {
        return $('button[type="submit"]')
    }

    get SuccessLoginMessage() {
        return $('#flash')
    }

    async Login(username, password) {
        await this.userNameTextBox.setValue(username)
        await this.passwordTextbox.setValue(password)
        await this.loginButton.click()

    }

    async checkMessage(Message) {
        await expect(this.SuccessLoginMessage).toHaveTextContaining(Message)
    }
}

module.exports = new LoginPage()