/*  function toStr(n, base) {
    let convert = "012345678ABCDEF"
    if (n < base) {
        return convert[n]
    }
    else {
        return toStr(parseInt(n / base),base) + convert[n % base];
    }
}

document.writeln(toStr(254,16));
 */
/* 
function loadStr() {
    alert("Страница была загружена")
}

function over() {
    let m = document.getElementById("mes"); m.style.color = "red";

}

function out() {
    document.getElementById("mes").style.color = "yellow";
}
function change() {
    let id = document.querySelector("h2");
    id.style.color = "blue"
}

function randomBg() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.background=`rgb(${r},${g},${b})`
}

let newimg= document.getElementById("newimg");

function on(){
    newimg.src="night.png"
}
function off(){
    newimg.src="day.png"
} */

// let but =document.getElementById("but");

// but.onclick=function(){
//     alert("Спасибо")
// }
/* function hello(params) {
    alert("good")
}
but.onclick=hello *//* 
let hex= "0123456789ABCDEF".split("");
console.log(hex);

let button= document.getElementById("btn");
let color= document.querySelector(".color");

button.onclick=function(){
    let hexcolor=generateHex();
    console.log(hexcolor);
    color.textContent=hexcolor
    document.body.style.background= hexcolor
    
}
function generateHex() {
    let hexColor="#";
    for(let i=0;i<6;i++){
        hexColor+=hex[getRandobNumber()]
    }
    return hexColor;
}

function getRandobNumber() {
    return Math.floor(Math.random()*hex.length)
} */

    // function change(id) {
    //     id.innerHTML="Новый текст";
    //     id.style.color="red"
    // }
/* 
    function change(id) {
        id.innerHTML="Новый текст";
        id.style.color="red"
    } */


function setColor(color) {
    document.body.style.background=color.className
}