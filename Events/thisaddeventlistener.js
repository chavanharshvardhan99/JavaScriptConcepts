let btn=document.querySelector("button");
let para=document.querySelector("p");
let head=document.querySelector("h2");

// this refer to current calling object in addeventlistener

// btn.addEventListener("click",()=>{
//        alert(this);
//        console.log(this);  // here this will refer to window object because of the arrow function 
// });


btn.addEventListener("click", function fun() {
    alert(this);
    console.log(this);      // now here this will point to current calling object
});


//changing bgcolor
function changecolor(){
    console.log(this);
    this.style.backgroundColor ="yellow";
}

btn.addEventListener("mouseenter",changecolor);
para.addEventListener("click", changecolor);
head.addEventListener("click", changecolor);