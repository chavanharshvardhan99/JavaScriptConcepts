// var type variable will be re-declared and re-assigned but it is old datatype
var a="vardatatype";
var a=10;  //redeclare 
a=23;      //re-assigned
console.log(a);

// let type variable will not be re-declared but re-assigned i.e. updated 
let b="letdatatype";
// let b=10;  // can not be redeclared;
b=45; // can be re-assigned or updated 
console.log(b); 

// const type variable will not be re-declared and will not be re-assigned 
const c="constdatatype";
// const c=55; // can not be redeclared;
// c=85; // can not be re-assigned or updated  
console.log(c);