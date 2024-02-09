
//you can only use labels with break or continue.
//it only applicable to block or loop



// label for block 
block :
{
    console.log("block code executed");
    break block;
    console.log("this will not get execute");
}



// label for loop
let str = '';

loop1: for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
// Expected output: "0234"


