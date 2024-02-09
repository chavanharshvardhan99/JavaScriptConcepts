//then and cath are methods of Promise Object.
function saveToDbPromise(data){
     new Promise((resolve,reject)=>{
        let internetspeed=Math.random()*10;
        if(internetspeed>3){
            resolve("data saved");
        }
        else{
            reject("data not saved");
        }
    })
    .then((e)=>{
        console.log("result= "+e);
    })
    .then(()=>{
        console.log("great job");
    })
    .catch((e)=>{
        console.log("result= "+e)
    });
}

saveToDbPromise(123);
