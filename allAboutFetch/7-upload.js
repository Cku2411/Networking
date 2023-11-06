let endpoint = "http://127.0.0.1:5000";

export const setData = async () => {
  const imgInput = document.getElementById("imgfile");
  const jsonInput = document.getElementById("jsonfile");

  document.getElementById("myform").addEventListener("submit", async (e) => {
    e.preventDefault();
    // update something
    let obj = {
      id: 123,
      name: "cku",
    };

    let jsonString = JSON.stringify(obj);

    let request = new Request(endpoint, {
      method: "POST",
      body: jsonString,
      headers: {
        "content-type": "application/json",
      },
    });

    try {
      const res = await fetch(request);
      console.log(await res.text());
    } catch (error) {}
  });
};
