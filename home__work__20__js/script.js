let div= document.querySelectorAll("div")[1];
let div1= document.querySelectorAll("div")[2];
let div2= document.querySelectorAll("div")[3];
let mas=[div,div1,div2];
for(let i=0;i<mas.length;i++){
    let span= document.querySelectorAll("span")[i].addEventListener("click",()=>{ mas[i].remove()});
}

