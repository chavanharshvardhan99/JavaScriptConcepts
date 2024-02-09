// document.querySelector("#button").addEventListener("click",display);

// function display(){
//     alert("display");
// };

let btn=document.querySelector("#button");

//addEventListener(event, callback)

btn.addEventListener("click",()=>{
    alert("clicked on button");
});

btn.addEventListener("mouseenter",()=>{
    console.log("mouse enetered in button");
});