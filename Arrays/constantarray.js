//we can update const array but can not re-assign it with new set of elements.

const arr=[1,2,3,344,45,55,5];

//updating array
arr.push(23); //adding element at the end
arr.shift(); // removing element from start

//printing arr
console.log(arr);

//assigning arr with new set of elements will throw TypeError: Assignment to constant variable.
arr=[24,53,55,76,77,7];