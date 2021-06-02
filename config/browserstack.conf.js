const {config} = require('./wdio.conf');

// appium capabilities
config.capabilities = [
          {
            platformName: 'Android',
            automationName: 'uiautomator2',
            maxInstances: 1,
            noReset: true,
            fullReset: false,
            deviceName: 'Google Pixel 4',
            platformVersion: androidInfo.platformVersion,
            appPackage: 'com.groverappstaging',
            appActivity: 'com.groverappstaging.MainActivity',
            app: '/Users/rupakmansingh/Downloads/BrazeTest.apk'
        }
        ];
        config.specs = [
            './src/specs/androidNative/**/*.js'
        ];
        
        exports.config = config;
