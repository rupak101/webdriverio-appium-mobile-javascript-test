# Appium Mobile Automation Testing

Project to run native and browser for android and ios using mocha with page object pattern.

## Based on

- WebdriverIO v6 or higher
- Mocha v6 or higher
- Node version 10.16 or higher
- Appium

## Supports
- Native Android and iOS apps
- Android Chrome browser 
- iOS Safari browser 
- Supports Page Object Model
- Contains sample test scenarios in mocha
- Supports eslint
- Supports allure reporting

## Running test
Follow the below commands -
- Clone the project -

- Install dependencies using `npm i` in the terminal.

- Update the deviceName and platFormVersion in `config/android.info.js` and `config/ios.info.js` respectively.

- Execute `npm run ios` to run ios native app

- Execute `npm run iosBrowser` to run ios safari browser

- Execute `npm run android` to run android native app

- Execute `npm run androidBrowser` to run android chrome browser

- Execute `npm run lint` to run the eslint for the project

- Execute `npm run allure` to generate the allure report
