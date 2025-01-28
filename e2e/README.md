# End-to-End (E2E) Test Cases for Storefront Demo App
## Overview:
This repository contains End-to-End (E2E) test cases for the Storefront Demo app. The tests are written in JavaScript, using Mocha as the test framework and WebDriverIO with Appium for automating the tests on a mobile app.

## Prerequisites:
Before running the E2E tests, ensure that your environment is set up correctly:

1. **Install Node.js and npm** I
- Node.js and npm are required to run the test scripts.
- Download and install Node.js from the official website: https://nodejs.org/.

2. **Install Appium** 
- Appium is used for automating the mobile app.
- Install Appium globally using the following command:

    `npm install -g appium`
    
- You can verify the installation by running:

    `appium --version`

3. **Install Java Development Kit (JDK)**
- Appium requires Java for Android automation.
- Download and install the JDK from Oracle’s official website.
- Ensure that JAVA_HOME is set in your environment variables.
  
4. **Install Android SDK**
- If you are running tests on an Android device/emulator, you will need the Android SDK.

## Setup Instructions:

1.  **Clone the repository**
Start by cloning the repository:

    `git clone https://github.com/your-repository/storefront-demo.git`
    `cd storefront-demo`

2.  **Install dependencies** 
Use npm to install the project dependencies:

    `npm install`
    
3. **Install additional dependencies Mocha, WebDriverIO, Appium (if needed)** 

    `npm install --save-dev @types/mocha @wdio/types @wdio/appium-service @wdio/cli @wdio/mocha-framework webdriverio appium`

4.  **Configure WebDriverIO and Appium**
- WebDriverIO is the automation framework used for running tests.
- Appium is the automation engine for controlling mobile devices.

## Tech stack:

1. **Node.js** LTS version recommended
2. **npm** Node package manager
3. **Appium** for mobile app automation
4. **Mocha** test framework
5. **WebDriverIO** mobile automation library
6. **Java Development Kit (JDK)** For running Appium
7. **Android Studio** To create the emulator

## Running the Test:

1.  **Navigate to the project directory:**

    `cd e2e`

2.  **Start Appium Server**
- Before running the tests, you need to start the Appium server. Run the following command in a terminal:
  
    `appium`
    
- This will start the Appium server on port 4723

3.  **Open the emulator or connect the device**
- Be sure the emulator or device is open and appium running
- Change the capabilities depending on the device you are using the path is '.e2e/utils/driver.js'
  - `deviceName`
  - `platformVersion`
  - `app: path to the apk location`

4.  **Run the Test**
- Once the Appium server is running and the Emulator too, you can execute the tests with Mocha.
- This will run all the test CompleteE2E file located in the e2e/tests/ directory.
  
  `npm run tests`
  
- You can run too:
  
  `npm run test-smoke`
  `npm run test-functional-home`
  `npm run test-functional-automated`
  `npm run test-functional-hydrogen`
   
- Mocha will execute the tests, and WebDriverIO (with Appium) will control the mobile app.

5. **Run a Specific Test Case**
If you only want to run a specific test case, you can use .only on the test in the CompleteE2E.js file.

## Troubleshooting
- Error: Cannot find webdriverio or mocha typings: Ensure that the required typings are installed by running npm install --save-dev @types/mocha @wdio/types.
- Appium Server Not Starting: Make sure your Appium server is running (appium command) and the device/emulator is connected.
- Tests Fail: Check the logs and verify the locators for elements. Make sure the capabilities of the devices are correct in device.js.
