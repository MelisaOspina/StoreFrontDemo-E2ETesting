const BasePage = require("./BasePage");

class ProductPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.productName = '//android.widget.TextView[@text]';
        this.addToCartButton = '//android.widget.TextView[@text="ADD TO CART"]';
        this.productDetailsButton = '//android.view.ViewGroup[@content-desc]/android.widget.ImageView';
        this.closeButton = '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]';
    }
    async addToCart() {
        await this.waitForElementToBeDisplayed(this.addToCartButton, 20000);
        const addToCartButton = await this.driver.$(this.addToCartButton);
        await addToCartButton.click();
    }
    async getProductName() {
        return await this.driver.$(this.productName).getText();
    }
    async viewProductDetails() {
        await this.waitForElementToBeDisplayed(this.productDetailsButton, 60000);
        console.log('Product details are displayed.');
        const detailsButton = await this.driver.$(this.productDetailsButton);
        await detailsButton.click();

    }
    async closeProductDetails() {
        await this.driver.touchAction({
            action: 'tap',
            x: 985,
            y: 217
        });
    }
}

module.exports = ProductPage;
