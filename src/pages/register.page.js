const { pause } = require('../helpers/actionHelpers');
const ActionHelper = require('../helpers/actionHelpers');

class RegisterPage {

    getObjectLocator() {
        return require(`./../screens/native/${browser.capabilities.platformName.toLowerCase()}/`
            + 'register.screen.js');
    }

    registration() {
       //Email text field
       ActionHelper.sendText(this.getObjectLocator().textField,'abc505010307@gmail.com');
       ActionHelper.click(this.getObjectLocator().signUpNow);
       pause(2);
       ActionHelper.clearAndSendText(this.getObjectLocator().firstName,'test1');
       ActionHelper.clearAndSendText(this.getObjectLocator().lastName,'test2');
       ActionHelper.click(this.getObjectLocator().confirmButton);
       //Date of birth field
       ActionHelper.clearAndSendText(this.getObjectLocator().textField,'01.01.2000');
       ActionHelper.click(this.getObjectLocator().confirmButton);
      // ActionHelper.clearAndSendText1(this.getObjectLocator().password,'Pass@123456');
       ActionHelper.clearAndSendText1(this.getObjectLocator().password,'GroverRupak1237867');
       ActionHelper.click(this.getObjectLocator().confirmButton);
       //Phone number field
       ActionHelper.clearAndSendText(this.getObjectLocator().textField,'5795002736');
       ActionHelper.click(this.getObjectLocator().thatsRightButton);
       //Phone pin field
       ActionHelper.clearAndSendText(this.getObjectLocator().textField,'1234');
       ActionHelper.click(this.getObjectLocator().yesPleaseButton);
       ActionHelper.click(this.getObjectLocator().gotItButton);
    } 
}

module.exports = RegisterPage;
