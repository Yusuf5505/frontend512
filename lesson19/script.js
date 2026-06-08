/* document.image.border="1";
document.writeln("<br>Ширина ихображения: "+document.image.width);
document.writeln("<br>высота ихображения: "+document.image.height);
document.writeln("<br>=================")
document.image.width=200;
document.image.height=100;
document.writeln("<br>Ширина ихображения: "+document.image.width);
document.writeln("<br>высота ихображения: "+document.image.height);

document.image.src="blue_star.png"; */


/* document.image.addEventListener("click", changeImage);

let flag = 0;
function changeImage() {
    if (flag == 0) {
        document.image.src = "blue_star.png";
        flag=1;
    } else{
        document.image.src="golden_star.png"
        flag=0;
    }
} */
/* 
let array = new Array("2.jpg", "3.jpg", "4.jpg");
document.writeln("<input type='button' value='<' name='left'>")
document.writeln("<img id='sl' src='" + array[0] + "'>");
document.writeln("<input type='button' value='>' name='right'>");

document.getElementsByName("right")[0].addEventListener("click",setRight);

document.getElementsByName("left")[0].addEventListener("click",setLeft);

let i=0;

let img= document.getElementById("sl")

function setRight() {
    i++
    if (i==array.length) {
        i=0
    }
    img.src=array[i]
}

function setLeft() {
    i--;
    if (i<0) {
        i=array.length-1
    }
    img.src=array[i]
} */

let imgTime = ["c0.gif", "c1.gif", "c2.gif", "c3.gif", "c4.gif", "c5.gif", "c6.gif", "c7.gif", "c8.gif", "c9.gif"];

/* let masImg = document.querySelectorAll("#block img");

clock()
function clock() {
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let second = time.getSeconds()
    getImg(hours, min, second);
    setTimeout(clock, 1000)

}
function getImg(h, m, s) {
    masImg[0].src = imgTime[parseInt(h / 10)]
    masImg[1].src = imgTime[h % 10]

    masImg[3].src = imgTime[Math.floor(m / 10)];
    masImg[4].src = imgTime[m % 10];
    if (s < 10) {
        masImg[6].src = imgTime[0];
         masImg[7].src = imgTime[String(s)[0]]
    }
     else {
        masImg[6].src = imgTime[String(s)[0]];
        masImg[7].src = imgTime[String(s)[1]]
    }

}
 */

// alert(document.body.innerHTML)
// let myTitle=document.querySelector("h1").innerHTML
// console.log(myTitle);
// let title3=document.querySelector("h3").lastChild.nodeValue
/* let title3=document.querySelector("h3").childNodes[0].nodeValue
console.log(title3);

document.querySelector("h1").innerHTML=document.querySelector("h3").innerHTML
 */

// let myTitle=document.querySelector("h1").firstChild;
// alert(myTitle.nodeName)
// alert(myTitle.nodeType)

// let elem= document.querySelector("#root");

// let tag= document.createElement("p");
// let node= document.createTextNode("Новый текст !!!");
// tag.append(node);
// elem.append(tag);

// elem.prepend(tag);
// elem.before(tag);
// elem.after(tag);
// elem.replaceWith(tag)
let three=document.querySelector(".tree");
for(let li of three.querySelectorAll("li")){
    let span= document.createElement("span");
    li.prepend(span);
    span.append(span.nextSibling)
}

three.addEventListener("click",function(event){
    if (event.target.targetName !="SPAN") {
       return 
    }
    let childrenConteiner=event.target.parentNode.querySelector("ul");
    if (!childrenConteiner) {
        return
    }
    childrenConteiner.hidden= !childrenConteiner.hidden
})