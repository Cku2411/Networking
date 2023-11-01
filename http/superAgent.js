const superagent = require("superagent");

const login = async () => {
  const tx = await superagent
    .post("https://sellaccount247.com/sign-in.php")
    .send({
      usernames,
    });

  console.log(tx.text);
};
login();
