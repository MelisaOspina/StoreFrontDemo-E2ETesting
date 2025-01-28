const { initDriver, closeDriver } = require('../utils/driver');
const { expect } = require('chai');
const HomePageCollection = require('../pages/HomePageCollection');
const AutomatedCollectionPage = require('../pages/AutomatedCollectionPage');
const HydrogenCollectionPage = require('../pages/HydrogenCollectionPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const BottomBarMenu = require('../pages/BottomBarMenu');

let driver;
let homePageCollection, automatedCollectionPage, hydrogenCollectionPage, productPage, cartPage, bottomTabBar;

before(async function () {
    this.timeout(120000);
    driver = await initDriver();
    homePageCollection = new HomePageCollection(driver);
    automatedCollectionPage = new AutomatedCollectionPage(driver);
    hydrogenCollectionPage = new HydrogenCollectionPage(driver);
    productPage = new ProductPage(driver);
    cartPage = new CartPage(driver);
    bottomTabBar = new BottomBarMenu(driver);
});
describe('Complete user flow -All Collections ', function () {
    this.timeout(90000);

    it('Scenario 1: Viewing the product list', async function () {
        await homePageCollection.clickCollectionButton();
        const isProductItemDisplayed = await homePageCollection.isProductItemDisplayed();
        expect(isProductItemDisplayed).to.be.true;
        const headerText = await homePageCollection.isCollectionHeaderDisplayed();
        expect(headerText).to.equal('Home page');
        console.log('Test Passed: Successfully navigated to the Home Page Collection.');
    });
    it('Scenario 2: Viewing product details for a specific product', async function () {
        await productPage.viewProductDetails();
        const productName = await productPage.getProductName();
        expect(productName).to.equal('The Inventory Not Tracked Snowboard');
        //productPage.closeProductDetails();
        console.log('Test Passed: Navigated to product details.');
    });
    it('Scenario 3: Adding a product to the cart and verifying it is added', async function () {
        await productPage.addToCart();
        await bottomTabBar.navigateToCart();
        const cartItem = await cartPage.getCartItemName();
        expect(cartItem).to.equal('The Inventory Not Tracked Snowboard');
        console.log('Test Passed: Product added to the cart.');
    });
    it('Scenario 4: Removing a product from the cart and verifying it is removed', async function () {
        await cartPage.removeProduct();
        await cartPage.confirmRemoveProduct();
        const emptyCart = await cartPage.isCartEmpty();
        expect(emptyCart).to.be.true;
        console.log('Test Passed: Product deleted from the cart.')
        await cartPage.startShopping();
    });

    it('Scenario 5: Viewing the product list', async function () {
        this.timeout(120000);
        await automatedCollectionPage.clickCollectionButton();
        const isProductItemDisplayed = await automatedCollectionPage.isProductItemDisplayed();
        expect(isProductItemDisplayed).to.be.true;
        const headerText = await automatedCollectionPage.isCollectionHeaderDisplayed();
        expect(headerText).to.equal('Automated Collection');
        console.log('Test Passed: Successfully navigated to the Automated Collection.');
    });
    it('Scenario 6: Viewing product details for a specific product', async function () {
        await productPage.viewProductDetails();
        const productName = await productPage.getProductName();
        expect(productName).to.equal('The Multi-managed Snowboard');
        //productPage.closeProductDetails();
        console.log('Test Passed: Navigated to product details.');
    });
    it('Scenario 7: Adding a product to the cart and verifying it is added', async function () {
        await productPage.addToCart();
        await bottomTabBar.navigateToCart();
        const cartItem = await cartPage.getCartItemName();
        expect(cartItem).to.equal('The Multi-managed Snowboard');
        console.log('Test Passed: Product added to the cart.');
    });
    it('Scenario 8: Removing a product from the cart and verifying it is removed', async function () {
        await cartPage.removeProduct();
        await cartPage.confirmRemoveProduct();
        const emptyCart = await cartPage.isCartEmpty();
        expect(emptyCart).to.be.true;
        console.log('Test Passed: Product deleted from the cart.')
        await cartPage.startShopping();
    });
    it('Scenario 9: Viewing the product list', async function () {
        await hydrogenCollectionPage.clickCollectionButton();
        const isProductItemDisplayed = await hydrogenCollectionPage.isProductItemDisplayed();
        expect(isProductItemDisplayed).to.be.true;
        const headerText = await hydrogenCollectionPage.isCollectionHeaderDisplayed();
        expect(headerText).to.equal('Hydrogen');
        console.log('Test Passed: Successfully navigated to the Hydrogen Collection.');
    });
    it('Scenario 10: Viewing product details for a specific product', async function () {
        await productPage.viewProductDetails();
        const productName = await productPage.getProductName();
        expect(productName).to.equal('The Collection Snowboard: Liquid');
        //productPage.closeProductDetails();
        console.log('Test Passed: Navigated to product details.');
    });
    it('Scenario 11: Adding a product to the cart and verifying it is added', async function () {
        await productPage.addToCart();
        await bottomTabBar.navigateToCart();
        const cartItem = await cartPage.getCartItemName();
        expect(cartItem).to.equal('The Collection Snowboard: Liquid');
        console.log('Test Passed: Product added to the cart.');
    });
    it('Scenario 12: Removing a product from the cart and verifying it is removed', async function () {
        await cartPage.removeProduct();
        await cartPage.confirmRemoveProduct();
        const emptyCart = await cartPage.isCartEmpty();
        expect(emptyCart).to.be.true;
        console.log('Test Passed: Product deleted from the cart.')
        await cartPage.startShopping();
    });
});
after(async function () {
    this.timeout(10000);
    await closeDriver(driver);
});