//higher order function
function func(fun,count){                        //taking function as argument
    for(let i=0; i<count; i++){
        fun();
    }

    return function fun(){
        console.log("return function gmgmg");   //returning a function
    }
}

//function expression
let greet= function fun(){
    console.log("welcome");
} 

//call to Higher order function
let returnfun=func(greet,5);

returnfun();
