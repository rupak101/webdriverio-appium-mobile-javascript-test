class RegisterScreen {
    constructor(){
        this.textField = '//*[@class="android.widget.EditText"]';
        this.privateCustomer = '//*[@text="Private customer"]';
        this.signUpNow = '//*[@text="Sign up now"]';
        this.firstName = '(//*[@class="android.widget.EditText"])[1]';
        this.lastName = '(//*[@class="android.widget.EditText"])[2]';
        this.confirmButton = '//*[@text="Confirm"]';
        this.password = '//*[@resource-id="signup_password"]';
        this.onWardsButton = '//*[@text="Onwards"]';
        this.thatsRightButton = '//*[@text="That’s right"]';
        this.noThanksButton = '//*[@text="No thanks"]';
        this.yesPleaseButton = '//*[@text="Yes please"]';
        this.gotItButton = '//*[@text="Got it!"]';        
}
}

module.exports = new RegisterScreen();
