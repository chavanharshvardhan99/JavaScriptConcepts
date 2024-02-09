let arr=[[1,0],[2,3],["gaga",4]]; //array in array

console.log(arr[0][1]); //0
console.log(arr[2][0]); //"gaga"

console.log("\"accessing elements using for loop\"");
//accessing elements using for loop
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        console.log(arr[i][j]);
    }
}