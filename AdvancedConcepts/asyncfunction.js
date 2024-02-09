async function greet(){
    console.log("success");
}
                             //async function by default return a promise
greet()
.then(()=>{
    console.log("no error");
})
.catch((error)=>{
    console.log("error= "+error)
});
