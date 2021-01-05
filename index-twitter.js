const browser = await puppeteer.launch({
  headless: false,
});
const page = await browser.newPage();
await page.goto("https://instagram.com");
await page.waitForTimeout(1000);

await page.waitForSelector('input[name="username"]');
await page.type('input[name="username"]', "Hayo_man");
await page.type('input[name="password"]', "12345");
await page.click("#loginForm > div > div:nth-child(3) > button");
