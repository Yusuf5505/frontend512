/* let string="Мой номер телефона: +7 (999) 123-45-67. Номер телефона моего друга: +7 (987) 654-32-10";
 let ex=
/\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g;
let phoneNumbers= string.match(ex);
console.log(phoneNumbers);

 */
/*
let regex = /\d{2}[-:]\d{2}/g
document.writeln("Завтрак в 09:00. Ужин в 21-30".match(regex)); */

/*
\D - все кроме цифр
\S - не пробел
\W - Все кроме цифр,букв (латиница) и символов подчеркивания
\b - граница слова
*/

// document.writeln("Hello, Java!".match(/\bJava\b/)+"<br>");

// document.writeln('1 23 456 78'.match(/\b\d\d\b/g));

// document.writeln("Заврак в 09:00 в комнате 123:456.".match(/\d{2}:\d{2}/g))

/* 
^-Начало строки (перед последовательностью ничего не должно быть)
$ - конец строки(перед последовательностью ничего не должно быть)
*/

/* let html='909';
let exp=/\d{3}/;
document.writeln(html.match(exp)+"<br>") */

/* function capitalize(st) {
    return st.replace(/^[а-я]/, u=>u.toUpperCase());
}
console.log(capitalize("несколько слов"));
 */

/* Количество повторений
+ => от 1 до бескрнечности {1,}
? => от 0 до 1{0,1}
* => от 0 до бесконечности {0,}
 */

// let st= '+7(903)-123-45-67';
// document.writeln(st.match(/\d+/g)+ "<br>")

/* function extractlincs(text) {
    let regex= /https?:\/\/[^\s]+/g;
    return text.match(regex) || [];
}

console.log(extractlincs("<a href='https://htmlbook.ru/'> и <a href='https://htmlbook.ru/css'>"));

function validateEmail(email) {
    let reghxp=/[a-z0-9-%_+.]+@/;
    return reghxp.test(email)
}
console.log(validateEmail("user@example.com"));
 */
/* 
let s=`Javascript
 javascript
 JAVASCRIPT`;

 console.log(s.match(/^\w+/gm)); */

//  let re=/CS.3/;
//  document.writeln("Стандарт CS-3".match(re)+"<br>");
//  document.writeln("Сталь CS3".match(re)+"<br>");

// let regxp=/html|css|java(script)?/gi;
// let str="Сначала появился Java,затем HTML,потом JavaScript";
// document.writeln(str.match(regxp));

// let html=`
// <b>my text</b>
// <img src='222.jpg'>
// <span>else</span>
// <img src='fff222.png'>
// <img src='img.png'>
// <img src='uio.gif'>`

 
// let ex=/\w+\.jpg|png|jpeg|gif/ig;
// document.writeln(html.match(ex))

function validatePhone(ePhone) {
    let phoneRegxp=/^(\+7|8)?\d{10}/;
    return phoneRegxp.test(ePhone)
}

let phone='+79123456789';
if (validatePhone(phone)) {
    console.log('Номер телефона валиден');
    
}else{
    console.log('Номер  телефона не валиден');
    
}