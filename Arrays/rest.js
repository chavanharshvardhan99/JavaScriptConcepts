function add(...args){   // now args will be an array which stores all comming arguments
   let addition= args.reduce((sum,el)=>{
         return sum+el;      
   });

   console.log(addition);
}


add(1,2,3,4); //passing multiple arguments