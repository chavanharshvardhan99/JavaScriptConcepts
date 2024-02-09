let dogsimages= axios.get("https://dog.ceo/api/breeds/image/random"); //asynchronous by default and it will return promise

let btn = document.querySelector("button");

let img = document.querySelector("#img");

btn.addEventListener("click",async ()=>{
   await dogsimages.then((response)=>{
        console.log("clicked");
        console.log(response);
        return response;   // while using axios we don't need to parse data to javascript object using json();
                           // by default it provides js object
    })
    .then((response)=>{
        let path=response.data.message;
        img.setAttribute("src",path);
    });
})