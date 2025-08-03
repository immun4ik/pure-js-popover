const puppeteer = require('puppeteer');

describe('Popover widget', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Popover appears on button click and hides on outside click', async () => {
        await page.click('#btn1');
        const popoverExists = await page.$('.popover') !== null;
        expect(popoverExists).toBe(true);

        await page.click('body');
        const popoverGone = await page.$('.popover') === null;
        expect(popoverGone).toBe(true);
    });
});