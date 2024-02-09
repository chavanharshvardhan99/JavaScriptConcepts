let input=document.querySelector("input");
let p=document.querySelector("p");
let form=document.querySelector("form");
let form2=document.getElementById("changeform");

// addEventListener sends a default 'event' argument in callback function, event object holds all properties
// and information about occurred event

input.addEventListener("click", (event)=>{
    alert("pointer event");
    console.log(event);       // click is a  PointerEvent
    console.dir(event);
});

input.addEventListener("keydown", (event)=>{
    console.log(event);       // keydown is KeyboardEvent
    console.dir(event);
});

p.addEventListener("dblclick", (event)=>{
    alert("double clicked which is a  Mouse event");
    console.log(event);      
    console.dir(event);         // dblclick is MouseEvent
});

form.addEventListener("submit",(event)=>{
    alert("form submitted");
    event.preventDefault();
    console.log(event);      
    console.dir(event);         // submit is formEvent
});

form2.addEventListener("change",(event)=>{
    alert("form submitted");
    event.preventDefault();
    console.log("input changed");
});