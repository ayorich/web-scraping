const puppeteer = require("puppeteer");

(async () => {
  // const browser = await puppeteer.launch({
  //   headless: false,
  //   devtools: true,
  // });
  // const page = await browser.newPage();
  // await page.goto("https://google.com");
  // await page.type("[title~=Search]", "World", { delay: 100 });
  // await page.keyboard.press("Enter");
  // await page.waitForNavigation();
  // await page.screenshot({ path: "example.png" });
  // await browser.close();

  // /* 1. Creating a PDF from the website */
  // const browser = await puppeteer.launch({ headless: true });
  // const page = await browser.newPage();
  // await page.goto("https://google.com/");
  // await page.pdf({
  //   path: "./page.pdf",
  //   format: "A4",
  // });
  // await browser.close();

  // /* 2. Getting the URL or the Title of the current page */
  // const browser = await puppeteer.launch({ headless: false });
  // const page = await browser.newPage();
  // await page.goto("https://learnscraping.com/");
  // let title = await page.title();
  // console.log(`Title of the page is ${title}`);
  // let url = await page.url();
  // console.log(`URL of the page is ${url}`);
  // await browser.close();
  // // /* 3. Emulate a phone */

  // try {
  //   const browser = await puppeteer.launch({ headless: false });
  //   const page = await browser.newPage();
  //   await page.emulate(puppeteer.devices["iPhone X"]);
  //   await page.goto("https://learnscraping.com/");
  //   // await browser.close();
  // } catch (err) {
  //   console.log(err);
  // }

  //instagram login
  // const browser = await puppeteer.launch({
  //   headless: false,
  // });
  // const page = await browser.newPage();
  // await page.goto("https://instagram.com");
  // await page.waitForTimeout(1000);

  // await page.waitForSelector('input[name="username"]');
  // await page.type('input[name="username"]', "Hayo_man");
  // await page.type('input[name="password"]', "12345");
  // await page.click("#loginForm > div > div:nth-child(3) > button");

  //website loads faster
  // const browser = await puppeteer.launch({
  //   headless: false,
  // });
  // const page = await browser.newPage();

  // await page.setRequestInterception(true);

  // page.on("request", (request) => {
  //   if (["image", "stylesheet", "font"].includes(request.resourceType())) {
  //     request.abort();
  //   } else {
  //     request.continue();
  //   }
  // });

  // await page.goto("https://amazon.com/");

  // debugger;
  // // await browser.close()

  //basic auth

  // const browser = await puppeteer.launch({
  //   headless: false,
  // });
  // const page = await browser.newPage();

  // await page.authenticate({
  //   username: "admin",
  //   password: "1234",
  // });
  // await page.goto("https://httpbin.org/basic-auth/admin/1234");

  // debugger;

  //IGNORE HTTP ERRORS AND CHANGE VIEW PORT OF BROSWER
  // const browser = await puppeteer.launch({
  //   headless: false,
  //   ignoreHTTPSErrors: true,
  //   defaultViewport: {
  //     width: 920,
  //     height: 1080,
  //   },
  // });
  // const page = await browser.newPage();
  // await page.goto("https://google.com/");

  // debugger;

  //USING PROXY
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--proxy-server=60.246.7.4:8080"],
  });
  const page = await browser.newPage();

  await page.goto("https://httpbin.org/ip");

  debugger;
})();
