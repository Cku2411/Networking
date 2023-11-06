const url = "https://jsonplaceholder.typicode.com/todoss";

export const getData = async () => {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error("was not valide response");
    const obj = await res.json(); //convert Json => object
    console.log(obj);
  } catch (err) {
    console.log(err.message);
  }
};
