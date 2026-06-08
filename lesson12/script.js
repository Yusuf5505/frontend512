"use strict";

/* function isOdd(number) {
    return number % 2// 0 или 1
    
}

function isEven(number) {
    return number % 2==0
}

function filter(numbers, fn) {
    let result = [];
    for (let number of numbers) {
        if (fn(number)) {
            result.push(number)
        }
    } return result
}

let num = [1, 2, 3, 4, 5, 6];

console.log(filter(num,isOdd));
console.log(filter(num,isEven));
 */
/* 
function filter(numbers, calback) {
    let result = [];
    for (let number of numbers) {
        if (calback(number)) {
            result.push(number)
        }
    } return result
}

let num = [1, 2, 3, 4, 5, 6]; */
/* 
let oddNumbers = filter(num, function (number) {
    return number % 2
}) */
/* let oddNumbers = filter(num, number => number % 2)
let evenNumbers = filter(num, number => number % 2 == 0)
console.log(oddNumbers);
console.log(evenNumbers);
 */

// forEach() -цикл
// let numbers = [1, 2, 3, 4, 5, 6, 7];

/* numbers.forEach(function(n){
    document.writeln("Квадрат числа: "+ n + " Равен: " + n * n + "<br>")
});
 */
/* 
numbers.forEach(n=> document.writeln("Квадрат числа: "+ n + " Равен: " + n * n + "<br>")
); */

/* ["Hello","world"].forEach(alert) */

/* let text=["Hello","world"];
for(let i=0;i<text.length;i++){
    alert(text[i])
} */

/*  ["Hello","world"].forEach(console.log); */

/*  ["Hello","world"].forEach( (item,index,array)=>{
   alert(`У ${item} индекс ${index} в ${array}`) 
 }) */
/* 
let numbers = [1, 2, 3, 4, 5, 6];

let squares = numbers.map(n=>n**3)
console.log(squares);

let length=["Hello","world","!"].map(item =>item.length)

console.log(length);
 */

/* let number=[1,-12,8,-4,25,42,];

let passed= number.filter(n => n>0);
console.log( passed);
 */
/* let colors = ["red", "orange", "green", "yellow"];

let newColors = colors.filter(color => color.length > 5);

console.log(newColors);
 */
/* let colors = ["red", "orange", "green", "yellow"];
let newColors = colors.filter(function (color) { return color.length > 5 });

console.log(newColors); */
/* let numbers=[1,-12,8,-4,25,42,];
let passed=numbers.some(number => number>0);// проверяет все ли элементы соотвествуют определенному условию
console.log(passed);
 */

// массив.reduce и массив.reduceRight
// используется для вычислене единого значения на основе массива

/* let arr=[1,2,3,4,5];
let result= arr.reduce((sum,current)=> sum+current,0);
document.writeln(result)
 */
/* let arr=[1,2,3,4,5];
let result= arr.reduce((sum,current)=> sum+current);
document.writeln(result) */
/* 
document.writeln(Math.floor(7.9)+"<br>");// округление в нижнюю сторону

document.writeln(Math.ceil(7.2)+"<br>");// округление в нижнюю сторону
document.writeln(Math.round(7.6)+"<br>");// округление в нижнюю сторону
 */
/* 
(function () {
    document.writeln(Math.random()+"<br>");
})()//  генерирует случайное число от 0 до 1 (не включая)
 */
/* 
(function (min, max) {
    document.writeln(Math.floor(Math.random()*(max-min)+min)+"<br>");
})(2,9)// случайное число из диапазона от 2 до 9(не включая)
document.writeln(Math.floor(Math.random()*9)+"<br>")// от 0 до 9 (не включая) 
document.writeln(Math.floor(Math.random()*9)+"<br>")// от 0 до 9 (не включая) 
 */
/* 
document.writeln(Math.floor(Math.random() * 8 + 6) + "<br>") */
/* 
let pickRandom = function(arr){
    return arr[Math.floor(Math.random()* arr.length)];
}

let randomWorld = ["Цикл","Массив","Условие","Функция","Переменная"];

let word = pickRandom(randomWorld);
document.writeln(word) */
/* document.writeln("<div id='block'></div>");

let id = document.getElementById("block");
id.style.height = "100px";
id.style.width = "100px";
// id.style.background = "rgb(255,0,0)";

createColor();

function createColor() {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    // id.style.background = "rgb(" + r + ","+ b+","+ g+")";
    id.style.background = `rgb(${r},${g},${b})`
}
 */

