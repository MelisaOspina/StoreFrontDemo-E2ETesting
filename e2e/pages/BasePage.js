class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async waitForElementToBeDisplayed(selector, timeout = 90000) {
        const element = await this.driver.$(selector);
        await element.waitForDisplayed({ timeout: timeout, reverse: false });
    }

    async clickElement(selector) {
        const element = await this.waitForElementToBeDisplayed(selector);
        await element.click();
    }

    async getElementText(selector) {
        const element = await this.waitForElementToBeDisplayed(selector);
        return await element.getText();
    }
}

module.exports = BasePage;
