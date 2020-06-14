const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/div[3]/div[3]/div[4]/div/div[4]/div/div/a/img');
    const src = await el.getProperty('src');
    const imgURL = await src.jsonValue();

    console.log({imgURL});

    browser.close();
}

scrapeProduct('https://en.wikipedia.org/wiki/Visa_requirements_for_South_African_citizens');