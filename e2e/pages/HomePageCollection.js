const BasePage = require("./BasePage");

class HomePageCollection extends BasePage {

    constructor(driver) {
        super(driver);
        this.homePageButton = '//android.widget.TextView[@text="HOME PAGE"]';
        this.homePageHeader = '//android.view.View[@text="Home page"]';
        this.productItem = '//android.view.ViewGroup[@content-desc]/android.widget.ImageView';
    }
    async clickCollectionButton() {
        await this.waitForElementToBeDisplayed(this.homePageButton, 60000);
        const homePageButton = await this.driver.$(this.homePageButton);
        await homePageButton.click();
    }
    async getProductItemText() {
        return await this.driver.$(this.productName).getText();
    }

    async isProductItemDisplayed() {
        await this.waitForElementToBeDisplayed(this.productItem, 90000);
        const productItem = await this.driver.$(this.productItem);
        return await productItem.isDisplayed();
    }
    async isCollectionHeaderDisplayed() {
        const homePageHeader = await this.driver.$(this.homePageHeader);
        const headerText = await homePageHeader.getText();
        return headerText;
    }
}

module.exports = HomePageCollection;

