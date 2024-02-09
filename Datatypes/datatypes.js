//javascript is dynamically typed
// nn bb ss u

//number
let a=122;       
console.log("a= "+a, typeof(a));

//null i.e. object
let b=null;  
console.log("b= "+b, typeof(b));

//boolean
let c=true;
console.log("c= "+c, typeof(c));
   //or
let d=false;
console.log("d= "+d, typeof(d));

//bigInt
let e=54545n
console.log("e= "+e, typeof(e));   
   //or
let f=BigInt(54545);
console.log("f= "+f, typeof(f));

//string
let g='stsrss';
console.log("g= "+g, typeof(g));
   //or
let h="fsfsf";
console.log("h= "+h, typeof(h));

//symbol
//Symbols are immutable (cannot be changed) and are unique
//To access the description of a symbol, we use the . operator.
let i=Symbol("power");
console.log("i= "+i.description, typeof(i));

//undefined
let j=undefined;
console.log("j= "+j, typeof(j));
   //or
let k; //value not assigned
console.log("k= "+k, typeof(k));


