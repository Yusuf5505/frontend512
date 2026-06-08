/* let el=document.querySelector("#elem");

el.addEventListener("click", function(){
    el.innerHTML="new text";
});

el.addEventListener("contextmenu",function(){
    el.style.color="green";
       el.style.background="yellow"  
}) */
/* 
let searchInput=document.querySelector("#searchInput");
let list= document.querySelectorAll(".list li")

searchInput.addEventListener("input",function () {
    let searhTerm=this.value.toLowerCase();
    
    
    for(let i=0;i<list.length;i++){
        let item=list[i];
        if (item.textContent.toLowerCase().indexOf(searhTerm) !== -1) {
            item.style.display="block"
        } else{
            item.style.display="none"
        }
       
        
    }
    
}) */
/* let but =document.querySelector("button");

but/addEventListener("click",function (event) {
    console.log(event);
    
}) */
/* 
let buttons= document.querySelectorAll("input");
let handleClick= function (event) {
    console.log(" Кликнули по:",event.target.value);
    
}

for(let i=0; i<buttons.length;i++){
        buttons[i].addEventListener("click",handleClick)
    } */

// document.addEventListener("mousemove", function (event) {
//     let c = document.querySelector("#ev");
//     let x= event.clientX
//     let y=event.clientY
//     c.textContent="x="+x +", Y = " +y;
//     c.addEventListener("dblclick",function (event) {
//         event.target.style.background="red"
//     })
// })

/* let section = document.querySelector("section");
let div = document.querySelector("div");
let p = document.querySelector("p");

section.addEventListener("click",function () {
    section.style.background="red";
});
div.addEventListener("click",function (event) {
    div.style.background="orange";
    event.stopPropagation()
});
p.addEventListener("click",function () {
    p.style.background="yellow";
}); */

// let  link= document.querySelector("a");

// link.addEventListener("click",function (event) {
//     event.preventDefault()
//     console.log("Переход отменен");
    
// })

/* let input= document.querySelector("#but");
input.addEventListener("click",handle)

function handle() {
    alert("Спасибо")
    input.removeEventListener("click",handle)
} */

// setTimeout("alert('Text')",3000)
/* setTimeout("alert('Text')",3000)

function helo() {
    alert("text")
} */
/* 
document.writeln("<div id='dt'>Создание анимировонного текста</div>");

let tag= document.querySelector("#dt");
let text =document.querySelector("#dt").innerHTML;
let i=0;
window.addEventListener("load",animText)

function animText() {
    tag.innerHTML=text.substring(0, i)
    i++;
    setTimeout(animText,100)
    
    
}
 */

let d= new Date();
document.writeln(d +"<br>");
document.writeln(d.toDateString() +"<br>");