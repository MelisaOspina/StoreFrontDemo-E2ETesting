const { expect } = require('chai');
const { initDriver, closeDriver } = require('../utils/driver');
const AutomatedCollectionPage = require('../pages/AutomatedCollectionPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const BottomBarMenu = require('../pages/BottomBarMenu');


let driver;
let automatedCollectionPage, productPage, cartPage, bottomTabBar;

before(async function () {
    this.timeout(90000);
    driver = await initDriver();
    automatedCollectionPage = new AutomatedCollectionPage(driver);
    productPage = new ProductPage(driver);
    cartPage = new CartPage(driver);
    bottomTabBar = new BottomBarMenu(driver);
});

describe('Complete user flow - Automated Collection', function () {
    this.timeout(90000);
    it('Scenario 1: Viewing the product list', async function () {
        await automatedCollectionPage.clickCollectionButton();
        const isProductItemDisplayed = await automatedCollectionPage.isProductItemDisplayed();
        expect(isProductItemDisplayed).to.be.true;
        const headerText = await automatedCollectionPage.isCollectionHeaderDisplayed();
        expect(headerText).to.equal('Automated Collection');
        console.log('Test Passed: Successfully navigated to the Automated Collection.');
    });
    it('Scenario 2: Viewing product details for a specific product', async function () {
        await productPage.viewProductDetails();
        const productName = await productPage.getProductName();
        expect(productName).to.equal('The Multi-managed Snowboard');
        //productPage.closeProductDetails();
        console.log('Test Passed: Navigated to product details.');
    });
    it('Scenario 3: Adding a product to the cart and verifying it is added', async function () {
        await productPage.addToCart();
        await bottomTabBar.navigateToCart();
        const cartItem = await cartPage.getCartItemName();
        expect(cartItem).to.equal('The Multi-managed Snowboard');
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
});
after(async function () {
    this.timeout(10000);
    await closeDriver(driver);
});
