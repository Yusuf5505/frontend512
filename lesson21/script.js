/* let div=document.querySelector("div");
div.className="alert";
let activeDiv= document.querySelector(".active");
activeDiv.classList.add("hidden");
activeDiv.classList.toggle("hidden");
activeDiv.classList.replace("active","alert") */
/* 
let menu = document.querySelector(".menu");
let child = document.querySelectorAll(".menu li");

menu.addEventListener("click", (event) => {
    if (event.target.tagName == "LI") {
        for (let item of child) {
            item.classList.remove("active")
        }event.target.classList.add("active");
    }  
}) */

/* let menuElem =document.getElementById("sweeties");
let titlElem=menuElem.querySelector(".title");

titlElem.addEventListener("click",function(){
    menuElem.classList.toggle("open")
}); */

// let brush = document.createElement("div");
// brush.classList.add("brush");

// brush.hidden = true;
// document.addEventListener("mouseover", function () {
//     brush.hidden = false;

// })
// document.addEventListener("mouseout", function () {
//     brush.hidden = true;

// });

// document.addEventListener("mousemove", function (event) {
//     // console.log("Событие сработало",event.clientX,event.clientY);
//     brush.style.left = `${event.clientX}px`
//     brush.style.top = `${event.clientY}px`
//     if (event.buttons === 1){
//         let paint=document.createElement("div");
//         paint.classList.add("paint");
//         paint.style.left=`${event.clientX}px`
//         paint.style.top=`${event.clientY}px`
//         document.body.append(paint)
//     }



// });

// document.addEventListener("mousedown", function () {
//     brush.style.scale = "0.8"
// })

// document.addEventListener("mouseup", function () {
//     brush.style.scale = "1"
// })
// document.body.append(brush);
/* 
let frogImg=document.getElementById("green-frog");
console.log(frogImg.id);
console.log(frogImg.className);
console.log(frogImg.alt);
console.log(frogImg.title);
console.log(frogImg.src);
console.log(frogImg.getAttribute("src"));

frogImg.title="Новый текст подсказки";
// console.log(frogImg.removeAttribute("src"));
console.log(frogImg.hasAttribute("src"));
console.log(frogImg.data-frog);
console.log(frogImg.getAttribute("data-frog"));
console.log(frogImg.dataset.frog);
 */

let product = document.querySelector(".product-cover");

let data = new Array(18);

for (let i = 0; i < data.length; i++) {
    data[i] = document.createElement("div");
    data[i].classList.add("card");
    if (i % 3) {
        data[i].classList.add("blue")
    } else {
        data[i].classList.add("gray")
    }
    let node = document.createTextNode(i + 1);
    data[i].append(node);

    product.append(data[i]);
}




