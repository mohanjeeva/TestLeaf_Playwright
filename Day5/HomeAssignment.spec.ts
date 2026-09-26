import test, { chromium, defineConfig } from '@playwright/test';

test("Salesforce login", async () => 
{
    /*Launch Chromium in non-headless mode */
    const browser = await chromium.launch({channel: 'chrome', headless: false });
    //Create a new browser context
    const context = await browser.newContext();
    //Open a new page within the browser context.
    const page = await context.newPage();
    //Load the URL in the page.
    await page.goto("https://login.salesforce.com/")

    //ENter Username and Password and click on login button
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator(".button.r4.wide.primary").first().click();
    await page.locator("[type='password']").fill("TestLeaf@2025");
    await page.locator(".button.r4.wide.primary").first().click();
    
    //Wait for 10 seconds to observe the result
    await page.waitForTimeout(10000);

    //Print the page title and the current url of the page
    const pageTitle = await page.title();
    const currentURL = page.url();

    console.log("Page title is : "+pageTitle);
    console.log("Current URL is : "+currentURL);

    await page.close();
}
)

/* As we are using page fixture, we don't need to create a new browser context and page. 
Playwright will automatically create a new browser context and page for each test. 
We can directly use the page fixture in our test. */

test.only("Salesforce login using page fixture", async ({page}) => 
{
    //Load the URL in the page.
    await page.goto("https://login.salesforce.com/")

    //ENter Username and Password and click on login button
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator(".button.r4.wide.primary").first().click();
    await page.locator("[type='password']").fill("TestLeaf@2025");
    await page.locator(".button.r4.wide.primary").first().click();
    
    //Wait for 10 seconds to observe the result
    await page.waitForTimeout(10000);

    //Print the page title and the current url of the page
    const pageTitle = await page.title();
    const currentURL = page.url();

    console.log("Page title is : "+pageTitle);
    console.log("Current URL is : "+currentURL);

    //Close the page after the test is completed
    await page.close();
}
)