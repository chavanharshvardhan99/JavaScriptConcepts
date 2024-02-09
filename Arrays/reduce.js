let arr=[12,233,44,33,45,5,34];

//addition of all elemnts of array
let reducedarr= arr.reduce((accumalator, el)=>{  //initially accumalator=0
   return accumalator+el;                        //it will return each element of array by performing operation on it     
});                                              //it will reduce array on the basis of condition           

console.log(reducedarr);


//find max

let maxelement= arr.reduce((max, el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
 });

 console.log("max element from array is = "+maxelement);

