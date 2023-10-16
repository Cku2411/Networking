const dns = require("dns/promises");

const webAddress = "vnexpress.net";

(async () => {
  const result = await dns.lookup(webAddress);
  console.log(result);
})();

