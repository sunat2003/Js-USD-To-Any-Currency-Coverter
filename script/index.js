const URL="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ftMiLIEfqJacTPEA0c36oeS4StFm5ZfshrpRDxIP"

let select=document.querySelector("select");
let input=document.querySelector("input");
let button=document.querySelector("button");
let para=document.querySelector("p");

for(code in countryList){
    var option=document.createElement("option");
    option.innerText=code;
    option.value=code;
    if(code==='INR'){
        option.selected="selected";
    }
    select.append(option);
}

select.addEventListener("change",(evt)=>{
    var currCode=evt.target.value;
    var countyCode=countryList[currCode];
    var imgSrc=`https://flagsapi.com/${countyCode}/flat/64.png`;
    var image= select.parentElement.querySelector("img");
    image.src=imgSrc;
})


const exchageRate=async ()=>{
     var response=await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ftMiLIEfqJacTPEA0c36oeS4StFm5ZfshrpRDxIP');
     var data= await response.json();
     console.log(data);
     var rate=eval(input.value*data.data[select.value]);
     para.innerText=`${input.value} USD=${rate}${select.value}`;
}

button.addEventListener("click",()=>{
    exchageRate();
})

