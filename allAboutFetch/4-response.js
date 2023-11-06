// Response objects

const jsonstr = "https://random-data-api.com/api/v2/users?size=10"; // json file
const imgstr = "https://picsum.photos/id/237/300/200"; // image file
const fontstr =
  "https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2"; // font file
const htmlstr = "http://127.0.0.1:5000/"; //html file

let obj = {
  id: crypto.randomUUID(),
  name: "the one who knows",
  favouriteColor: "green",
};

let header = document.querySelector("header");
let list = document.querySelector("#list");
// let jsonString = JSON.stringify(obj);

// console.log(jsonString);

// //   create new file
// let file = new File([jsonString], "mydata.json", {
//   type: "application/json",
// });

// let response = new Response(file, {
//   status: 200,
//   statusText: "say my name",
//   headers: {
//     "content-type": "application/json",
//     "content-length": file.size,
//     "x-cky": "start with something",
//   },
// });

export const getData = async () => {
  fetch(jsonstr)
    .then((res) => {
      if (!res.ok) throw new Error("Invalid");
      return res.json();
    })
    .then((dataArray) => {
      list.innerHTML = dataArray
        .map(({ uid, first_name, last_name }) => {
          return `<li data-uid=${uid}>
        <p>${first_name}</p>
        <p>${last_name}</p>
      </li>`;
        })
        .join("");
    })
    .catch((err) => {
      console.log(err.message);
    });

  fetch(htmlstr)
    .then((res) => {
      if (!res.ok) throw new Error("Invalid");
      return res.text();
    })
    .then((text) => {
      console.log(text);
      /////
      header.innerHTML = `<h2>${text}</h2>`;
    })
    .catch((err) => {
      console.log(err.message);
    });

  try {
    const res = await fetch(imgstr);

    if (!res.ok) throw new Error("was not valide response");
    const blobObj = await res.blob(); //binary large object, chubk of memort
    //we also have
    // res.text() text, html, fiel

    // create a url
    let url = URL.createObjectURL(blobObj);
    let img = document.getElementById("pic");
    img.src = url;
    console.log(obj);
  } catch (err) {
    console.warn(err.message);
  }
};
