// Response objects

const jsonstr = "http://127.0.0.1:5500/local-sample.json"; // json file
const imgstr = "https://picsum.photos/id/237/300/200"; // image file
const fontstr =
  "https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2"; // font file
const htmlstr = "http://127.0.0.1:5500/"; //html file

let obj = {
  id: crypto.randomUUID(),
  name: "the one who knows",
  favouriteColor: "green",
};

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
