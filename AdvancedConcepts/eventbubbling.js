let div = document.querySelector("div");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");

div.addEventListener("click", (event) => {
    event.stopPropagation();           // to stop event bubbling
    console.log("div was clicked");
});

ul.addEventListener("click", (event) => {
    event.stopPropagation();           // to stop event bubbling
    console.log("ul was clicked");
});


for (li of list) {
    li.addEventListener("click", (event) => {
        event.stopPropagation();           // to stop event bubbling
        console.log("li was clicked");
    });
}