// const url = "https://jsonplaceholder.typicode.com/todos";

export const getData = async () => {
  let str = "http://127.0.0.1:5000";

  let url = new URL(str);
  let sp = url.searchParams;
  sp.append(`Hello`, "world");
  sp.append("x-api-key", "rerererererere");
  let h = new Headers();

  h.append("x-api-key", "rerererererere");
  h.append("Authorization", "Bearer rerererererere ");

  let request = new Request(url, {
    method: "GET",
    headers: h,
    cache: "default",
    credentials: "omit",
  });

  try {
    await fetch(request);
  } catch (error) {
    console.log(`Something went wrong`);
  }
};
