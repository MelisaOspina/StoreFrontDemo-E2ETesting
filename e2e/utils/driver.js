
const { remote } = require('webdriverio');

async function initDriver() {
    try {
        const driver = await remote({
            protocol: 'http',
            hostname: 'localhost',
            port: 4723,
            path: '/',
            capabilities: {
                platformName: 'Android',
                'appium:deviceName': 'Pixel_8',
                'appium:platformVersion': '15.0',
                'appium:automationName': 'UiAutomator2',
                'appium:app': '/Users/melisaospina/VsCodeProjects/storefront_Demo/android/app/build/outputs/apk/debug/app-debug.apk',
                'appium:avdLaunchTimeout': 60000,
                'appium:disableNotification': true,
            },
        });
        return driver;
    } catch (error) {
        console.error('Failed to initialize the driver:', error);
        throw error;
    }
}

async function closeDriver(driver) {
    if (driver) {
        await driver.deleteSession();
        console.log('Session ended successfully.');
    }
}
module.exports = { initDriver, closeDriver };
