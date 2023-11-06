const url = "https://jsonplaceholder.typicode.com/todos";

export const getData = async () => {
  const urlObj = new URL(url);
  //   create request obj
  const request = new Request(url, {
    headers: { "x-cku": "hello" },
    method: "GET",
    cache: "no-store",
  });

  try {
    const res = await fetch(request);

    if (!res.ok) throw new Error("was not valide response");
    const obj = await res.json(); //convert Json => object
    console.log(obj);
  } catch (err) {
    console.log(err.message);
  }
};
