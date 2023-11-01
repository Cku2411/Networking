(async () => {
  const tx = await fetch("https://sepoliafaucet.com/api/v1/transfer", {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      authorization: "Bearer CXOUGGFw3AHnI63-2c83K9mFuhlp-vZL",
      "content-type": "application/json",
      "sec-ch-ua":
        '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie:
        "_ga=GA1.1.1249929696.1690515461; ph_phc_4Zsoj8TsNoQqKQFsLFiYaw1PX9AGq0q63YBj0HBDFGx_posthog=%7B%22distinct_id%22%3A%22u_MfwasU%22%2C%22%24device_id%22%3A%221899a92d3312f9-00802cac496fd5-26031d51-1fa400-1899a92d332e15%22%2C%22%24user_state%22%3A%22identified%22%2C%22%24sesid%22%3A%5B1698387207600%2C%2218b6fc39882c09-07bb594fc1a571-26031151-1fa400-18b6fc39883f47%22%2C1698387171458%5D%2C%22%24session_recording_enabled_server_side%22%3Afalse%2C%22%24autocapture_disabled_server_side%22%3Atrue%2C%22%24active_feature_flags%22%3A%5B%5D%2C%22%24enabled_feature_flags%22%3A%7B%7D%2C%22%24feature_flag_payloads%22%3A%7B%7D%2C%22%24user_id%22%3A%22u_MfwasU%22%2C%22%24stored_person_properties%22%3A%7B%22internalId%22%3A2107665%2C%22teamId%22%3A3575674%2C%22email%22%3A%22simonne3t1y910%40gmail.com%22%2C%22isStaff%22%3Afalse%2C%22firstName%22%3A%22Bessy%22%2C%22lastName%22%3A%22Simonne%22%7D%7D; _ga_Z0VL2VTYST=GS1.1.1698387171.13.1.1698387209.0.0.0",
      Referer: "https://sepoliafaucet.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: '{"networkInfo":{"network":"sepolia","chain":"eth"},"toAddress":"0xA70BAD089B3b24b4e13A15cb95d09368e0FCFdA3","clientRequestId":"alch_faucet_storage_v1_d7247c37-3bf7-45b7-9497-e7cf77904d58","reCAPTCHAValue":"03AFcWeA6aPWVGmvuuDMJtucnzMKS90UKfMaE51Mdwj3mah1Y5uHxsQxnIeLEJy2B90IzfxTdvb83b238oZZlcwBPN8W0_HH7ra6lW6ZhCtxOriKGcIYyA9PAkrHJsqjqxj4v2NTET2GoBaQ5-Nt-fKILJ-Omnv_-ovo76IbiWFzWnIUJKtyDl7ghnICXWHQ_Tok__0B23nOhXm_p8bCzxpPMh3FhjNBfZbHps7E3IFTY7aLV4naC3v4zSYAo4kfqp_-QMXBxnWj1dOwgy6roFg7ftW6OGOAbbgqOpM9W6cY8QAF9rh-uJU6j31ojYwl5k4rrPTl61mM3toE9Jfbxid0mJ6RS0C3T30srmBkcf2ODCMwQjxtldRutIh92WA19iaZJ8nMY05BlCPSpUI7YD6Lk20u5pck49hDQZrJ0Q5_cTcafNmKidBAd7KtgP0i77eN_eQhq_FG7sMIF3QxhYUYfzLx3m9MQNv-Ah7W9ybsoawlx8W5EYKfhwzc_tuPvWY_81T6hFNAFCN3clZJMpOXzbgyYD3Z2EcS4Sw8LOaxPU9qthYBgs_6t-UoKBgcgNyBzSC_Aigd8cVRdCP7twB04oqgppDLhRDyzlKV7CiuJ4SqcSCN3T9pi64HFNMNiNYHa99399cBUoGMTBBIMdDcaPeUYZwgVof603onigBXKJDtcYtuVJ5jJisN90yxpZK0Gj6rfz5voCdrS7Y7uGhtoIqghnzGmYbm0ykGqLqLw_gAI-OLIureqIgGQiAe4d66sFjTWBF6hmXScbSFqpj5DKj3h7Z7tE-939yevmzckEGIR_zdKDmqBOYqYy4Y0pGSjv39-c3XwhSfQwyMUJxaSemTgcQK4JNhCg4-9_lge2HuzvGNVnkfnmEmmVWaUXE7xugcuCC_DkIYeFcMrm8UI-8y4gNK587PITc5SPlYWwysGGLR_00QsU56322xHUPdVkhNknenp5FnfjOIXJS-O2E8kd3NjRR4SqNUrGiyr3jvp9YbyayyKaMZN7w8ybHSz5yJ9IuuRIPVjFp0m34uhcLv6K5sQ_Cj4HFD2Y_v7bAuJEWKTVNmqPWzCI97IjGMpO1j8GwrJltkFsErG7knuw4hh_w0MKwXBAuCpwr7g4Uc8wjPwl2L64_CvEZgvfohznBsdBzxeoyU27RZ3wRkPApimmgVZoKRj6o1F1bTuYcDycUwjmguC7O_6clKRjgVOitWU3VQ6tZVEIFqgD9sSMfqNMuBHplWasczC2iYDOtWQS03VoJR88zPKjFWzoXfHBuMORoyeKagtkkaz2RPIFBhZ-mMvZQrlfBxpFKxhwA-4C4lWP2aclENHWq-Bj6viauRrjRj963sgJSUNg6vRJUUuAdc-6SvWSBTj1lW3uZSBiwUnUf8chbxSjm4I1d7pYOi8cWT-VfR9SmASGk0HPvwHd6aPTBiupTt9hE0bhpHy2K9IIcmmFSEfhktC1aQUG06XJZRAKLOHU28YZLDZi-FNApGD76JHrpBLiY96ZuTpi0IF0dW5LSVYHCvFKVNBDuOz0AO9brmGeFZX-ckeLgqrrVbPINw","alchemyUserId":"2107665"}',
    method: "POST",
  });

  console.log(tx);
})();
