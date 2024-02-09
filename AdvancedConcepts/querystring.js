let url="https://restcountries.com/v3.1/name/";


async function getcountrydata(){
    let country=document.querySelector("input").value;
    let countrydata= await axios.get(url+country);
    let data=countrydata.data[1]
    // console.log(data);
    return data;
}

let btn=document.querySelector("button");

btn.addEventListener("click",()=>{
    let countrydata=getcountrydata();
    countrydata.then((res)=>{
        console.log(res);
        return res;
    })
    .then((res)=>{
        console.log(res.borders);
        countryborder=res.borders;
        let list=document.querySelector("#list");
   

    for(let i=0; i<countryborder.length; i++){
        let li=document.createElement("li");
        list.appendChild(li);
        li.innerText=countryborder[i];
    }
        
    });
    
});

