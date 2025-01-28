class CartPage {
    constructor(driver) {
        this.driver = driver;
        this.cartItem = '//android.widget.TextView[@text]';
        this.removeButton = '~REMOVE';
        this.incrementButton = '#stepper-decrement-button';
        this.decrementButton = '#stepper-increment-button';
        this.confirmRemoveButton = 'android=resourceId("android:id/button1")';
        this.cancelRemoveButton = 'android=resourceId("android:id/button2")';
        this.emptyCartMessage = '//android.widget.TextView[@text="Your cart is empty"]';
        this.startShoppingButton = '//android.widget.TextView[@text="Start shopping"]';
    }

    async getCartItem() {
        return await this.driver.$(this.cartItem);
    }

    async getCartItemName() {
        return await this.driver.$(this.cartItem).getText();
    }
    async removeProduct() {
        const removeButton = await this.driver.$(this.removeButton);
        await removeButton.click();
    }
    async incrementProduct() {
        const incrementButton = await this.driver.$(this.incrementButton);
        await incrementButton.click();
    }
    async decrementProduct() {
        const decrementButton = await this.driver.$(this.decrementButton);
        await decrementButton.click();
    }
    async waitForCartPageToLoad() {
        const cartItems = await this.driver.$$(this.cartItems);
        await cartItems[0].waitForDisplayed({ timeout: 10000 });
    }

    async cancelRemoveProduct() {
        const cancelButton = await this.driver.$(this.cancelRemoveButton);
        await cancelButton.click();
    }
    async confirmRemoveProduct() {
        const confirmButton = await this.driver.$(this.confirmRemoveButton);
        await confirmButton.click();
    }

    async isCartEmpty() {
        const emptyCart = await this.driver.$(this.emptyCartMessage);
        return await emptyCart.isDisplayed();
    }
    async startShopping() {
        const startShopping = await this.driver.$(this.startShoppingButton);
        await startShopping.click();
    }
}

module.exports = CartPage;