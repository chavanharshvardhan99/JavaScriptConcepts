let article = fetch("https://catfact.ninja/fact");  // fetch is asynchronous by default and it will return promise

let btn = document.querySelector("button");

let p = document.querySelector("#para")

btn.addEventListener("click", async () => {
    console.log("clicked");
    await article.then((res) => {
        return res.json();      // res is in a JSON and res.json() will return a javascript object
    })
        .then((data) => {
            console.log(data.fact); // data is javascript obj and fact is the key of object
            p.innerText = data.fact;
        });
})
