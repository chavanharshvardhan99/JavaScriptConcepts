//spread with arrays
let arr=[22,33,44,55,66,667,77,7,88];
console.log(...arr);              // 22,33,44,55,66,667,77,7,88

//spread with string
let str="spreadstring";
console.log(...str);             // s p r e d s t r i n g

// spread with object
let obj ={
    email :'jhaaha',
    pass :"jsjsj"
};

let obj1={
    ...obj,                   
    salary:"unlimited"
};

console.log(obj1);           //{ email: 'jhaaha', pass: 'jsjsj', salary: 'unlimited' }
