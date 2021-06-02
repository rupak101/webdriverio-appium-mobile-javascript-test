const LoginPage = require('../../pages/login.page');
const loginPage = new LoginPage();
const RegisterPage = require('../../pages/register.page');
const registerPage = new RegisterPage();
const assert = require('assert');
// const reporter = require('wdio-allure-reporter')

describe('User register screen', () => {
    beforeEach(() => {
        loginPage.launchApp();
    });
    it('New user register into the grover app', () => {
        // reporter.feature('Feature')
        // reporter.addDescription({ description: 'foo', descriptionType: 'bar' })
        loginPage.clickRegisterButton();
        registerPage.registration();
        const yourTech = loginPage.getTechValue();
        assert.equal(yourTech, 'Technik entdecken');
    });
});