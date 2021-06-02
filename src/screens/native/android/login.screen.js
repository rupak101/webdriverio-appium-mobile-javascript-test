class LoginScreen {
    constructor(){
        this.userName = '(//*[@class="android.widget.EditText"])[1]';
        this.password = '(//*[@class="android.widget.EditText"])[2]';
        this.loginButton = '(//*[@class="android.widget.Button"])[2]';
        this.technicalRentButton = '//*[@class="android.widget.Button"]';
        this.registerButton = '//*[@text="Register"]';
    }
}

module.exports = new LoginScreen();
