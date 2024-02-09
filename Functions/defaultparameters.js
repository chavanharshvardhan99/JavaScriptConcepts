function fun(a,b=3){
    let c= a+b;
    console.log(c);
}

fun(a=3);  // 6
fun(a=4, b=8); // 12