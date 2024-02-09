// let savedatarequest= new Promise((resolve,reject)=>{
//     let data=null;
//     if(data){
//         resolve("resolved");
//     }
//     else{
//         reject("rejected");
//     }
//     });

// console.log(savedatarequest);

function saverequest(data){
    return new Promise((resolve,reject)=>{
        let internetspeed=Math.random()*10;
        if(internetspeed>3){
            resolve("data saved");
        }
        else{
            reject("data not saved,coonection weak");
        }
    });
}

let result=saverequest(123);

console.log(result);