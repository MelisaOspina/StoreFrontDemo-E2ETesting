// Function to navigate back to the Collections page
async function navigatebackToCollectionsPage(driver, timeout = 5000) {
    try {
        const backButton = await driver.$('//android.widget.Button[@content-desc="Go back"]/android.widget.ImageView');
        if (await backButton.isDisplayed()) {
            await backButton.click();
            console.log('Navigated back to Collections Page');

        } else {
            console.error('Back button not found.');
            return;
        }

        const collectionsHeader = await driver.$('//android.widget.TextView[@text="HOME PAGE"]');
        await collectionsHeader.waitForDisplayed({ timeout: 15000 });
        console.log('Collections Page header is displayed.');
    } catch (error) {
        console.error('Error navigating back to Collections Page:', error);
    }
}

module.exports = { navigatebackToCollectionsPage };