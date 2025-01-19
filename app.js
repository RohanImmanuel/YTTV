const { Builder, Capabilities } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

// Set up Chrome options
const options = new chrome.Options();

// Use minimal UI mode (Headless new is recommended for full minimal UI behavior)
// options.addArguments('--start-maximized'); // Ensures full screen
options.addArguments('--kiosk'); // Removes infobars
options.addArguments('--disable-infobars'); // Removes infobars
options.addArguments('--disable-extensions'); // Disables extensions for minimal UI
options.addArguments('--enable-automation'); // Prevents automation warnings
// options.addArguments('--incognito'); // If you want private mode
options.addArguments('--no-default-browser-check'); // Avoids default browser prompts

// Set a custom Roku user agent
const rokuUserAgent = "Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1";
options.addArguments(`--user-agent=${rokuUserAgent}`);

// Set a persistent user data directory to retain sessions
const userDataDir = path.join(__dirname, 'chrome-data');
options.addArguments(`--user-data-dir=${userDataDir}`);

// Initialize WebDriver
(async function openBrowser() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://youtube.com/tv/');
    } catch (error) {
        console.error("Error launching browser:", error);
    }
})();
