const {config} = require('./wdio.conf');
const androidInfo = require('./android.info');
const path = require('path');

// appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        automationName: 'uiautomator2',
        maxInstances: 1,
        noReset: true,
        fullReset: false,
        deviceName: androidInfo.deviceName,
        platformVersion: androidInfo.platformVersion,
        appPackage: 'com.groverappstaging',
        appActivity: 'com.groverappstaging.MainActivity',
        // app: '/Users/rupakmansingh/Downloads/BrazeTest.apk'
        app: path.resolve('apps/' + androidInfo.app),
        sendKeyStrategy : 'oneByOne'
    }
];

config.specs = [
    './src/specs/androidNative/**/*.js'
];

exports.config = config;
