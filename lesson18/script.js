/* 
document.writeln("<input type='button' value='Start/stop'>");
document.querySelector("input").addEventListener("click", st);

function setColor() {
    let x = document.body;
    x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";
}
let act, run;
function st() {
    if (!run) {
        act = setInterval(setColor, 1000);
        // run=true;

    } else {
        clearInterval(act);
        // run=false
    }
    run= !run
}
 */
/* 
document.writeln("<input type='button' value='Start'>");

document.writeln("<input type='button' value='Stop'>");
document.querySelector("input").addEventListener("click", st);
document.querySelectorAll("input")[1].addEventListener("click", st2);

function setColor() {
    let x =document.body;
    x.style.background=(x.style.background == "yellow") ? "orange" : "yellow";
}

let act;
function st() {
     act= setInterval(setColor, 1000);
     console.log(act);
     
}

function st2() {
    clearInterval(act)
} */
/* 
document.writeln("<div id='text'>Время</div>");

window.addEventListener("load", () =>
    setInterval(Time, 1000)
)

function Time() {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    if (min < 10) {
        min = "0" + min
    }
    if (sec<10) {
        sec= "0" + s
    }
    let t = hour + ":" + min + ":" + sec;
    document.querySelector("#text").innerHTML = t

} */

  /*   document.writeln(`
        <input type="text" id="timer" value="0.0" size="4">
        <input type="button" value="Start/Stop">
        <input type="button" value="Clear">`);

document.querySelector("input[value='Start/Stop']").addEventListener("click",startTimer);
document.querySelector("input[value='Clear']").addEventListener("click",resetTimer)

let run,act;
function startTimer() {
    if (!run) {
           act= setInterval(incTimer,100); 
    }else{
        clearInterval(act)
    }
    run=!run

}
let tsec=0;
function incTimer() {
    tsec++;
    let t= tsec/10.0;
    if (tsec%10==0) {
        t+=".0"
    }
    document.getElementById("timer").value= t;
}

function resetTimer() {
     document.getElementById("timer").value= "0.0";
    tsec=0
} */
/* 
let countdownElement= document.querySelector(".countdown");
let items=document.querySelectorAll(".countdiwn-item >h4");

let countdownDate = new Date(2026, 3, 20, 15, 0, 0).getTime();
function getCountTime() {
    let now= new Date().getTime();

    let distance =countdownDate-now;

    let oneDay= 24 *60*60*1000;
    let oneHour =60*60*1000;
    let oneMinute=60*1000;

    let days= Math.floor( distance / oneDay);
    let hours = Math.floor(distance%oneDay / oneHour);
    let minutes= Math.floor(distance %oneHour /oneMinute);
    let seconds = Math.floor(distance % oneMinute /1000);
    let values =[days,hours,minutes,seconds];
    items.forEach(function (item, index) {
        item.textContent = values[index]
    })
    if (distance <0) {
        clearTimeout(countdown);
        countdownElement.innerHTML="<h4 class= 'expired'>Время вышло!</h4>"
    }
}

  let countdown= setInterval(countdownDate,1000);

getCountTime(); */
// ===========================

let but =document.querySelector("#cl");
but.addEventListener("click",myMove);
function myMove() {
    
    but.style.display="none"
    let elem= document.getElementById("animate");
    let pos=0;
    let id= setInterval(frame,10);
    function frame() {
        if (pos==350) {
            clearInterval(id)
             but.style.display="block"
        }else{
             pos++
          elem.style.top= pos + "px";
    elem.style.left= pos +"px"
        }
       
    }
  

}