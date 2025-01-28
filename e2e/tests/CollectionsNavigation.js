
const { initDriver, closeDriver } = require('../utils/driver');
const { expect } = require('chai');
const HomePageCollection = require('../pages/HomePageCollection');
const AutomatedCollectionPage = require('../pages/AutomatedCollectionPage');
const HydrogenCollectionPage = require('../pages/HydrogenCollectionPage');
const { navigatebackToCollectionsPage } = require('../utils/navigationUtils');

let driver;
let homePageCollection, automatedCollectionPage, hydrogenCollectionPage;

before(async function () {
    this.timeout(120000);
    driver = await initDriver();
    homePageCollection = new HomePageCollection(driver);
    automatedCollectionPage = new AutomatedCollectionPage(driver);
    hydrogenCollectionPage = new HydrogenCollectionPage(driver);
});

describe('Collections Navigation Tests', function () {
    this.timeout(90000);
    it('should navigate to the Home Page Collection successfully', async function () {
        this.timeout(120000);
        await homePageCollection.clickCollectionButton();
        const headerText = await homePageCollection.isCollectionHeaderDisplayed();
        expect(headerText).to.equal('Home page');
        console.log('Test Passed: Successfully navigated to the Home Page Collection.');
        await navigatebackToCollectionsPage(driver);
    });

    it('should navigate to the Automated Collection page successfully', async function () {
        await automatedCollectionPage.clickCollectionButton();
        const headerText = await automatedCollectionPage.isCollectionHeaderDisplayed();
        expect(headerText).to.equal('Automated Collection');
        console.log('Test Passed: Successfully navigated to the Automated Page Collection.');
        await navigatebackToCollectionsPage(driver);
    });
    it('should navigate to the Hydrogen Collection page successfully', async function () {
        await hydrogenCollectionPage.clickCollectionButton();
        const headerText = await hydrogenCollectionPage.isCollectionHeaderDisplayed();
        expect(headerText).to.equal('Hydrogen');
        console.log('Test Passed: Successfully navigated to the Hydrogen Page Collection.');
        await navigatebackToCollectionsPage(driver);
    });
});
after(async function () {
    this.timeout(10000);
    await closeDriver(driver);
});

