window.addEventListener("load", () => {
  "use strict";

  const siteKey = "6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-";

  const form = document.querySelector(".contact");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // get all the field
    let fields = document.querySelectorAll(".contact .form-control");
    let valid = true;

    for (let i = 0; i < fields.length; i++) {
      // remove no-error class from all field
      fields[i].classList.remove("no-error");

      if (fields[i].value === "") {
        // if field is empty
        fields[i].classList.add("has-error");
        fields[i].nextElementSibling.style.display = "block";
        valid = false;
      } else {
        fields[i].classList.remove("has-error");
        fields[i].classList.add("no-error");
        fields[i].nextElementSibling.style.display = "none";
      }
    }

    if (valid) {
      document.querySelector(".formfields").style.display = "none";
      document.querySelector("#alert").innerHTML =
        "Processing your submission, please wait...";

      grecapcha.ready(() => {
        grecapcha
          .execute(siteKey, () => {
            action: "contact";
          })
          .then((token) => {
            let recapchaResponse = document.getElementById("recaptchaResponse");
            recapchaResponse.value = token;

            // send 
          });
      });
    }
  });
});
