// "use strict"

let hor=0;
let min=0;
let sec=0;
let ten=0;

let addmin=document.querySelector("#min");
let addsec=document.querySelector("#sec");
let addten=document.querySelector("#ten");
let addhor=document.querySelector("#hor");

let start =document.querySelector("#start");
let stop =document.querySelector("#stop");
let reset =document.querySelector("#reset");



let interval;

start.addEventListener("click",()=>{
    clearInterval(interval);
  interval=setInterval(()=>{
    ten++;
    if(ten<=9){
        addten.innerHTML="0"+ten;
    }
    if(ten>9){
        addten.innerHTML=ten;
    }
    if(ten>99){
        sec++;
        addsec.innerHTML="0"+sec;
        ten=0;
        addten.innerHTML="0"+0;
    }
    if(sec>9){
        addsec.innerHTML=sec;
    }
    if(sec>59){
        min++;
        addmin.innerHTML="0"+min;
        sec=0;
        addsec.innerHTML="0"+0;
    }
    if(min>59){
        hor++;
        addhor.innerHTML="0"+hor;
        min=0;
        addmin.innerHTML="0"+0;
    }
    },10)
})

stop.addEventListener("click",()=>{
    clearInterval(interval);
})

reset.addEventListener("click",()=>{
    clearInterval(interval);
    ten=00;
    sec=00;
    min=00;
    addten.innerHTML=ten;
    addsec.innerHTML=sec;
    addmin.innerHTML=min;
})


