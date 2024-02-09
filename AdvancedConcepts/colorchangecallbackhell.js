let h1=document.querySelector("#head");
console.dir(h1);

function changecolor(color,delay, nextcolor){
    
    setTimeout(()=>{
        h1.style.color=color;
        if(nextcolor){
            nextcolor();
        }
    },delay);
}

changecolor("green",1000,()=>{
    changecolor("orange",2000,()=>{
        changecolor("yellow",3000);
    });
});