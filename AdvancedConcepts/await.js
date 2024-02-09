function demo(){
    return new Promise((resolve,reject)=>{
        let number = Math.random()*10;
        setTimeout(()=>{
            console.log(number);
         }, 2000);
         resolve("promise resolved");
    });
   
}


async function greet(){
     await demo();
     await demo();
     demo();
}

greet();