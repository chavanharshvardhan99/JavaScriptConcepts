let arr=[1,23,3,44,4,5,55];

console.log("array elements");
//array elements
console.log(arr);

console.log("element at index 2");
//element at index 2
console.log(arr[2]);


console.log("accessing element of array using for loop");
//accessing element of array using for loop
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


console.log("accessing element of array using for of loop");
//accessing element of array using for of loop
for(x of arr){
    console.log(x);
}


console.log("accessing index and element of array using for in loop");
//accessing index and element of array using for in loop
for(x in arr){
    console.log("index "+x);        //index
    console.log("element "+arr[x]);   //element
}