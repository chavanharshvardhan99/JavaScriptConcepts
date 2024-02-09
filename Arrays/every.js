let arr=[2,34,44,33,3,545,44];

let result=arr.every((el)=>{
    el % 2 == 0 ;
});                     // every function returns true or false on the basis of the condition.
                        // it will check condition for each and every element of array
                        //  if it get failed for one of the element it returns false.
                        // if condition gets satisfied for all element it returns true.
console.log(result);  
                      