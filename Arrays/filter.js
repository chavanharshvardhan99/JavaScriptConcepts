let arr=[2,33,4,44,55,433];

let newarr = arr.filter((el)=>{
      return el % 2 == 0;
});
                               //filter will returns new array on the basis of conddition
                               //if condition satisfy for that element it will add that element in newarray.
console.log(newarr);