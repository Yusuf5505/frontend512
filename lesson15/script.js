let str = "I\'m a JavaScript \"programmer\"";
let str1 = "Я учу JavaScript. Мне нравиться JavaScript";
str = str.concat(". ", str1);
document.writeln(str + "<br>");
/* console.log(str.split(" ",3));
console.log(str.split(". "));
console.log("05-04-2026".split("-")); */
/*  */
/* let arr= str.split *//* ("JavaScript") */
/*   console.log(arr); */
/*      */
// /* let st= arr.join("C++ */");
/* document.writeln(st *//* +"<br>"); */
/*  */
// /* /* let text = st.repl */ace/* ("C++","JavaScript"); */
/* document.writeln(t *//* +"<br>"); */
// /* let text = st.replace */All/* ("C++","JavaScript"); */
/* document.writeln(text *//* +"<br>"); */

// document.writeln(str.slice(0,3)+"<br>");

// document.writeln(str.slice(6)+"<br>");
// document.writeln(str.slice(-23,-10)+"<br>");

// document.writeln(str.substring(0,3)+"<br>")
// document.writeln(str.substring(6)+"<br>")

/* let style = prompt("Введите свойство CSS", "background-color");
alert(def(style));

function def(st) {
    let arr = st.split("-");
    console.log(arr);
    for (let i = 1; i < arr.length; i++) {
        // arr[i] = arr[i].at(0).toUpperCase()+ arr[i].slice(1);
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join("")
} */
/* 
let hello = "  Hello  ";
console.log(">" + hello + "<");
let beforeLength = hello.length
console.log(beforeLength);

hello = hello.trim()
console.log(hello.length);

let afterLength = hello.length
console.log(afterLength);

let add= hello.padStart(15,"_");
console.log(">" + add + "<");

add=hello.padEnd(15,"_");
console.log(">"+add +"<");
document.writeln()
 */
/* document.writeln("hello">"Hello")
document.writeln("hello".charCodeAt(0))
document.writeln("Hello".charCodeAt(0))
document.writeln("Й".charCodeAt(0))
document.writeln("А".charCodeAt(0))
document.writeln("Я".charCodeAt(0))
document.writeln("Е".charCodeAt(0))
document.writeln("е".charCodeAt(0)) */

// document.writeln(String.fromCodePoint(104))
// document.writeln(String.fromCodePoint(1025))

/* let a = 97;
let b = 122;
/* for(let i=b;i<a;i++){
    document.writeln(String.fromCodePoint(i)) */
/* for (let i = a; i < b; i++) {
    document.writeln(String.fromCodePoint(i))
} */
/* let shortest= 12;
let longest=18;
let minAsci = 33;
let macAsci = 126;
function randomPassword() {
    let randomLength=rand(shortest,longest)
    let res="";
    for(let i=0;i<randomLength;i++){
        let randomChar = String.fromCodePoint(rand(minAsci,macAsci));
        res=res+randomChar
    }
    
    return res
}
function  rand(min,max) {
    return Math.floor (Math.random()
 * (max -min + 1)+min);
}
document.writeln("Ваш случайный пароль: " + randomPassword()) */

// рекурсивная функция
/* 
function elevator(n){
if (n==0) {
    document.writeln("Вы в подвале<br>");
    return;
}
console.log(n);

    elevator(n-1);
    document.writeln(n+" ")
}

let m1=prompt("На каком вы этаже: ",5);
elevator(m1) */
/* function sum(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum(n - 1);
}

document.writeln(sum(5)) */

/* let chislo=+prompt("Число: ",1);
let stepen=+prompt("Степень",4);

document.writeln(chislo," в степени ",stepen, " = ",degree(chislo,stepen));

function degree(ch,st) {
    if (st) {
        return ch *degree(ch,st-1)
    }
    return 1;
} */

function factorial(n) {
    
    if (n <= 0) {
        return 1
    }
    
    return n * factorial(n - 1)
}
factorial(5)
console.log(factorial(5));
let a =+prompt("Введите число")
document.writeln(factorial(a))
