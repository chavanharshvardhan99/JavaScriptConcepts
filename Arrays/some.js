let arr=[22,33,45,5,6,6,443,4];

let result= arr.some((el)=>{
   return el % 2 == 0 ;
});                   //some will return true even if condtion get satisfied for one of the element.

console.log(result);