let form=document.querySelector("form");

// form.addEventListener("submit", (event)=>{
//     event.defaultPrevented(); 
//     console.dir(event);
//     // let user=document.querySelector("username");
//     // let pass=document.querySelector("password");
// });


form.addEventListener("submit",(event)=>{
    alert("form submitted");
    event.preventDefault(); 
    console.log(event);      
    console.dir(event);         // submit is formEvent
    //getting input value
    let username=document.querySelector("#user");
    let password=document.querySelector("#pass");
    alert(`username: ${username.value}, password: ${password.value}`);
});
