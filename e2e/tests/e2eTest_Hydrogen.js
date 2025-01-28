const { expect } = require('chai');
const { initDriver, closeDriver } = require('../utils/driver');
const HydrogenCollectionPage = require('../pages/HydrogenCollectionPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const BottomBarMenu = require('../pages/BottomBarMenu');


let driver;
let hydrogenCollectionPage, productPage, cartPage, bottomTabBar;

before(async function () {
    this.timeout(90000);
    driver = await initDriver();
    hydrogenCollectionPage = new HydrogenCollectionPage(driver);
    productPage = new ProductPage(driver);
    cartPage = new CartPage(driver);
    bottomTabBar = new BottomBarMenu(driver);
});

describe('Complete user flow Hydrogen-Collection', function () {
    this.timeout(90000);

    it('Scenario 1: Viewing the product list', async function () {
        await hydrogenCollectionPage.clickCollectionButton();
        const isProductItemDisplayed = await hydrogenCollectionPage.isProductItemDisplayed();
        expect(isProductItemDisplayed).to.be.true;
        const headerText = await hydrogenCollectionPage.isCollectionHeaderDisplayed();
        expect(headerText).to.equal('Hydrogen');
        console.log('Test Passed: Successfully navigated to the Hydrogen Collection.');
    });
    it('Scenario 2: Viewing product details for a specific product', async function () {
        await productPage.viewProductDetails();
        const productName = await productPage.getProductName();
        expect(productName).to.equal('The Collection Snowboard: Liquid');
        //productPage.closeProductDetails();
        console.log('Test Passed: Navigated to product details.');
    });
    it('Scenario 3: Adding a product to the cart and verifying it is added', async function () {
        await productPage.addToCart();
        await bottomTabBar.navigateToCart();
        const cartItem = await cartPage.getCartItemName();
        expect(cartItem).to.equal('The Collection Snowboard: Liquid');
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
