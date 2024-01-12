let cullter = "";
let Timer = 60;
let score = 0;
let HitVal 

const Make_bubble = ()=>{
    
    for (var i = 1; i < 177; i++) {
        var rn = Math.floor(Math.random()*10);
        cullter  += ` <div class="bubble">${rn}</div>`   ;
    }
    document.querySelector("#panale_bottom").innerHTML = cullter;
}
const TimeVal =()=>{
   let TimeRun = setInterval(function(){
    if(Timer){
        Timer--;
        document.querySelector("#TimeVal").innerText=Timer
    }
    else{
        clearInterval(TimeRun);
        document.querySelector("#panale_bottom").innerHTML = "<h1>Game Over</h1>"
    }
   },1000);
}
const Scores = ()=>{
    score +=10;
    document.querySelector("#Score").innerText=score;
}
const Hit_Bubble = ()=>{
    HitVal = Math.floor(Math.random()*10);
    document.querySelector("#HitVal").innerText = HitVal;
}

document.querySelector("#panale_bottom").
addEventListener("click",function(detail){
   let Value = (Number(detail.target.innerText));
   if(Value == HitVal){
    Scores();
    Hit_Bubble();
    Make_bubble();
   }
})

Make_bubble();
TimeVal();
Hit_Bubble();

