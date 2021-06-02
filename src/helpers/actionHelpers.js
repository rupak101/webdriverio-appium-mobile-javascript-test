class ActionHelper {

    static launchBrowserUrl(urlToLaunch) {
        browser.url(urlToLaunch)
    }

    static getTitle() {
        return browser.getTitle();
    }

    static launchApp() {
        driver.reset();
        driver.launchApp();
    }

    static switchToNativeContext() {
        browser.switchContext('NATIVE_APP');
    }

    static pause(seconds) {
        browser.pause(seconds * 1000);
    }

    static isVisible(locator) {
        return $(locator).isDisplayed() ? true : false;
    }

    static click(locator) {
        this.waitForElement(locator,20)
        $(locator).click();
    }

    static waitForElement(locator, waitTimeInSeconds) {
        $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
    }

    static clearText(locator) {
        $(locator).clearValue();
    }

    static sendText(locator, inputText) {
        this.waitForElement(locator,5)
        $(locator).addValue(inputText);
    }

    static getText(locator) {
        this.waitForElement(locator,5)
        return $(locator).getText();
    }

    static clearAndSendText(locator, inputText) {
        this.waitForElement(locator,5);
        $(locator).clearValue();
        $(locator).addValue(inputText);
    }

    static clearAndSendText1(locator, inputText) {
        this.waitForElement(locator,5);
        // $(locator).click();
        // driver.sendKeys(inputText.split(""));
        // browser.executeScript("Pintu@12")
    //   driver.execute(document.querySelector("#signup_password"),"213Nevinha@nino");
        // browser.executeScript('document.querySelector("#signup_password").value = "213Nevinha@nino"');

        // const elem = $(locator);
        // elem.$(function () { return this.setAttribute('value', '213Nevinha@nino')});
        // driver.sendKeys()
        // $(locator).sendKeys('213Nevinha@nino');
         $(locator).addValue('Abtd1256', {translateToUnicode : true});
          this.pause(10);
        // driver.keys(['Meta', 'a']);
        // driver.keys(['Meta', inputText]);
        // browser.keys(['Meta', 'a']);
        // this.pause(3);
        // browser.keys(['Meta', inputText]);
        //  $(locator).setValue(inputText);
        //  $(locator).setValue("");
        // this.pause(120000000);
        
        // $(locator).addValue("Enter");
        // locator.sendKeys("\t");
        
    }

    static setElementValue(locator, inputText) {
        this.waitForElement(locator,5);
        locator.sendValue(inputText);
        // $(locator).sendKeys(inputText);
    }
}

module.exports = ActionHelper;
