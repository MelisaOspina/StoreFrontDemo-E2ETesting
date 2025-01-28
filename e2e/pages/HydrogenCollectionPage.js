const BasePage = require('./BasePage');

class HydrogenCollectionPage extends BasePage {
    constructor(driver) {
        super(driver);

        this.hydrogenButton = '//android.widget.TextView[@text="HYDROGEN"]';
        this.hydrogenCollectionHeader = '//android.view.View[@text="Hydrogen"]';
        this.productItem = '//android.widget.TextView[@text]';
    }

    async clickCollectionButton() {
        await this.waitForElementToBeDisplayed(this.hydrogenButton, 90000);
        const hydrogenButton = await this.driver.$(this.hydrogenButton);
        await hydrogenButton.click();
        console.log('Clicked on "HYDROGEN" button.');
    }

    async isCollectionHeaderDisplayed() {
        const hydrogenHeader = await this.driver.$(this.hydrogenCollectionHeader);
        const headerText = await hydrogenHeader.getText();
        return headerText;
    }
    async getProductItemText() {
        return await this.driver.$(this.productName).getText();
    }
    async isProductItemDisplayed() {
        await this.waitForElementToBeDisplayed(this.productItem, 90000);
        const productItem = await this.driver.$(this.productItem);
        return await productItem.isDisplayed();
    }

    async getProductItem() {
        return await this.driver.$$(this.productItem);
    }

}

module.exports = HydrogenCollectionPage;
