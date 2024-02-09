

// document.getElementById("id")
let heading1=document.getElementById("heading1");
heading1.innerText=`This text appeared from dommethods&properties.js file by using [ document.getElementById("heading1").innerHTML ]`;

// document.getElementsByClassName("class")  // return collection of object
let heading2=document.getElementsByClassName("heading2");
heading2[0].innerText=`This text appeared from dommethods&properties.js file by using [ document.getElementsByClassName("class") ]`;

// document.getElementByTagName("tag")  // return collection of object
let tag=document.getElementsByTagName("h2");
tag[0].innerText=`This text appeared from dommethods&properties.js file by using [ document.getElementByTagName("tag") ]`;

// document.querySelector("#heading3")
let heading3=document.querySelector("#heading3");
heading3.innerText=`This text appeared from dommethods&properties.js file by using [ document.querySelector("#heading3") ]`;


//document.querySelectorAll(".heading4")  //returns collection of object
let heading4=document.querySelectorAll(".heading4");
heading4[0].innerText=`This text appeared from dommethods&properties.js file by using [ document.querySelectorAll(".heading4") ]`;
heading4[1].innerText=`This text appeared from dommethods&properties.js file by using [ document.querySelectorAll(".heading4") ]`;
heading4[2].innerText=`This text appeared from dommethods&properties.js file by using [ document.querySelectorAll(".heading4") ]`;


//check result in console 

console.log(heading1.innerHTML);

console.log(heading2[0].innerText);

console.log(heading3.textContent);
