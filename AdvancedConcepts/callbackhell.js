
function save(savedata,success,failed,nextdata) {
    let internetspeed=(Math.floor(Math.random()*10));
    if (internetspeed > 3) {
        success();
        if (nextdata) {
            nextdata();
        }
    }
    else{
       failure(); 
    }
    
}

let success=()=>{
    console.log("success")
};

let failure=()=>{
    console.log("failure")
};


//callbackhell
save(255, success, failure , ()=>{
    save(8228,success,failure,()=>{
        save("haha",success,failure,()=>{
            save("585", success,failure);
        })
    });
});

