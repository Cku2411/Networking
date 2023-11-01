const axios = require("axios");

const url =
  "https://airdrop.pyth.network/api/grant/v1/amount_and_proof?ecosystem=evm&identity=0x2B4D30465aA5ed5Bf41f2222C41099D961e16Ab0";

(async () => {
  try {
    const result = await axios.get(url);

    console.log(await result.data);
  } catch (error) {
    console.log(error);
  }
})();
