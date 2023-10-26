(async () => {
  const result = await fetch(
    "https://discord.com/api/v9/user-profile-effects",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,vi;q=0.8",
        authorization:
          "ODI3NDM1NTgyMzAwNDg3Njkw.YJjTUg.y21GzP6hdtLnkyecnF4THHHP3Q8",
        "sec-ch-ua":
          '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "en-US",
        "x-discord-timezone": "Asia/Bangkok",
        "x-super-properties":
          "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExOC4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTE4LjAuMC4wIiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjIzNzU0NiwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=",
        cookie:
          "__dcfduid=718bbcf01f2f11ecb4146179c09a8159; __sdcfduid=718bbcf11f2f11ecb4146179c09a8159b1e8a56b85edff17bc142a84ae684275c09bc71324276d2402588c1824724063; _ga=GA1.2.1362600432.1643701735; OptanonConsent=isIABGlobal=false&datestamp=Sun+Feb+19+2023+09%3A35%3A16+GMT%2B0700+(Indochina+Time)&version=6.33.0&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1&AwaitingReconsent=false; __cfruid=dad544619a34ffb39435fdb09d56348032583e92-1697526367; _cfuvid=78SlCsCWqaH_70JKVxFRWJjSA6H3.LVSgHIDIBfe2rQ-1697526367231-0-604800000; cf_clearance=uqGI81lp4wzVKYeeyZIBl6T8JtzNLH8Iu1A0xcm9kIg-1697528223-0-1-571db5ef.2bec2d57.af830023-0.2.1697528223",
        Referer: "https://discord.com/channels/@me",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }
  );

  console.log(result);
})();
