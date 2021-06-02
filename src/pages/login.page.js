const ActionHelper = require('./../helpers/actionHelpers');

class LoginPage {

    getObjectLocator() {
        return require(`./../screens/native/${browser.capabilities.platformName.toLowerCase()}/`
            + 'login.screen.js');
    }

    launchApp() {
        ActionHelper.launchApp();
        // ActionHelper.switchToNativeContext();
        ActionHelper.pause(20);
    }

    enterUserNameAndPassword(userNameValue,passwordValue) {
        ActionHelper.clearAndSendText(this.getObjectLocator().userName, userNameValue);
        ActionHelper.clearAndSendText(this.getObjectLocator().password, passwordValue);
        ActionHelper.click(this.getObjectLocator().loginButton);
        ActionHelper.pause(10);
    }

    getTechValue() {
        return ActionHelper.getText(this.getObjectLocator().technicalRentButton);
    }

    clickRegisterButton() {
        ActionHelper.click(this.getObjectLocator().registerButton);
    }
}

module.exports = LoginPage;
