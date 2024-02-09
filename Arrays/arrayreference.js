let arr=[1,23,3,44,4,5,55]; // arr is reference variable holds the refence to assigned array. Arrays are objects & mutable in js.

console.log([1]==[1]); //returns false because of both array holds different memory location.

console.log(arr); //print array

let newarr=arr;  //assigning one array refence to another. now newarr also points to same array.

console.log(newarr); //print assigned array 

console.log(newarr==arr); //return true because holds same reference

console.log(newarr===arr); //return true because holds same reference and values as well.