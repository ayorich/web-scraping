const requestPromise = require("request-promise");
const cheerio = require("cheerio");
const request = require("request");

(async () => {
  const USERNAME = "willsmith";
  const BASE_URL = `https://instagram.com/${USERNAME}`;

  let response = await request(BASE_URL);

  let $ = cheerio.load(response);
  let script = $('script[type="text/javascript"]');

  console.log(script);
})();
