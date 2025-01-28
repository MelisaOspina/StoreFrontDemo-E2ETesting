class BottomBarMenu {
    constructor(driver) {
        this.driver = driver;

        this.collectionsMenu = '~Collections';
        this.cartMenu = '~1, Cart';
    }

    async navigateToCart() {
        await this.driver.$(this.cartMenu).click();
    }

    async navigateToCollections() {
        await this.driver.$(this.collectionsMenu).click();
    }
}

module.exports = BottomBarMenu;