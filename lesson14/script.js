/* let mas = ["копеек", "копейка", "копейки", " - число за пределами диапазона"];
let firs = 1;
let last = 99;
let ch = prompt("Введите  количество копеек", 5);
console.log(ch, countKop(firs, last, ch)(mas));

function countKop(start, end, num) {
    let n = num % 10;
    let m = num % 100;
    let chislo = n == 1 && m != 11 ? 1
        : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
            : start <= num && num <= end ? 0 : 3

    return function (arr) {
        return arr[chislo];
    }
}
 */

let str = "I\'m a JavaScript \"programmer\"";

document.writeln(str + "<br>")/* 

document.writeln(str + "<br>")/* 
document.writeln(str[2] + "<br>")

/* str = str[2] + "у"
document.writeln(str + "<br>"); */
document.writeln(str.length + "<br>");
/* document.writeln(str[6] + "<br>");
document.writeln(str.at(6) + "<br>");
document.writeln(str.at(-2) + "<br>");

for(let ch of str){
    console.log(ch);
    
} */
/* document.writeln(str.toLocaleUpperCase()+"<br>")

document.writeln(str.toLocaleLowerCase()+"<br>")

document.writeln(str + "<br>") */

/* let s = "Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте";
countLetters(s)

function countLetters(st) {
    let letters = ["а", "б", "в"];
    for (let i = 0; i < letters.length; i++) {
        let count = 0;
        for (let j = 0; j < st.length; j++) {
            if (st[j] == letters[i]) {
                count++;
            }
        }
        document.writeln("Символ '" + letters[i] + "встретился: " + count + "<br>")
    }
} */
/* 
let n=prompt("Введите имя","aleX");
alert(first(n))

function first(st) {
    let newStr= st.at(0).toUpperCase();

    for(let i=1;i<st.length;i++){
        newStr+=st.at(i).toLocaleLowerCase()
    }
    return newStr
} */
/* 
let str1 = "Я учу JavaScript.Мне нравиться JavaScrript";

str = str.concat(". ", str1)
document.writeln(str+"<br>");

let message="*";
document.writeln(message.repeat(30)+"<br>")
document.writeln(str.indexOf("JavaScript")+"<br>")
document.writeln(str.indexOf("JavaScript",7)+"<br>")
document.writeln(str.lastIndexOf("JavaScript")+"<br>")

let email;

do {
   email=prompt("Введите email:","test");
   if (email.indexOf("@")==-1) {
    alert("Некорректно повторите оперцию")
   }else{
    break
   }
} while (true); */

document.writeln(str.includes("JavaScript")+"<br>")
document.writeln(str.startsWith("JavaScript")+"<br>")
document.writeln(str.endsWith("JavaScript")+"<br>")