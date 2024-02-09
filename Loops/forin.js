let arr=[1,23,44,33,22];

let str="jajjaj";

let obj={
    a:"value1",
    b:"value2",
    c:"value3"
};



for(x in arr){
    console.log(x); //access indexes of array
}

for(x in str){
    console.log(x); //access indexes of string
}

for(x in obj){
    console.log(x); //access keys of object
}