const BasePage = require('./BasePage');

class AutomatedCollectionPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.automatedCollectionButton = '//android.widget.TextView[@text="AUTOMATED COLLECTION"]';
        this.automatedCollectionHeader = '//android.view.View[@text="Automated Collection"]';
        this.productItem = '//android.widget.TextView[@text]'
    }

    async clickCollectionButton() {
        await this.waitForElementToBeDisplayed(this.automatedCollectionButton, 90000);
        const automatedCollectionButton = await this.driver.$(this.automatedCollectionButton);
        await automatedCollectionButton.click();
        console.log('Clicked on "AUTOMATED COLLECTION" button.');
    }

    async isCollectionHeaderDisplayed() {
        const automatedHeader = await this.driver.$(this.automatedCollectionHeader);
        const headerText = await automatedHeader.getText();
        return headerText;
    }

    async getProductItem() {
        return await this.driver.$$(this.productItem);
    }
    async isProductItemDisplayed() {
        await this.waitForElementToBeDisplayed(this.productItem, 90000);
        const productItem = await this.driver.$(this.productItem);
        return await productItem.isDisplayed();
    }
}

module.exports = AutomatedCollectionPage;