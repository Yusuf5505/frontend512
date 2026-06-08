// document.getElementById("slider").addEventListener("input",function(){
//     document.getElementById("slider-value").textContent=this.value
// })

/* let tds = document.querySelectorAll("td");

for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener('click',function fumc(){
        let input=document.createElement("input");
        input.value=this.innerHTML;
        this.innerHTML='';
        this.append(input);
        let td=this;
        input.addEventListener("blur",function(){
            td.innerHTML=this.value;
            td.addEventListener("click",fumc)

        })
        this.removeEventListener("click",fumc);
    })
} */

/* let userInput=document.getElementById("userInput");
let namei =document.getElementById("displayName");

userInput.addEventListener("input",function(){
    namei.textContent=this.value || "Гость"
}) */
/* 
let form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
        event.preventDefault()
        alert("Заполните все поля корректно")
    }

    //     let username=form.username.value;
    //     let password=form.password.value
    //    console.log(username);
    //    console.log(password);

    // let formData=new FormData(form);
    // console.log(formData.get("username"));
    // console.log(formData.get("password"));
    // console.log(formData);

    let username = form.username.value;
    let password = form.password.value
    if (username.length < 3) {
        event.preventDefault();
        alert("Имя пользователя должно быть более 3 символов")
    }
    if (password.length<6) {
        event.preventDefault();
         alert("Пароль пользователя должно быть более 6 символов");
    }


    console.log(typeof username);
    console.log(typeof password);
    
}) */

/* Методы:
    search - Возращает позицию,на которой регулярное выражение совпадает с вызывающей строкой, или "-1"

    match- получить все совпадение с регурным выражением

    replace- поиск и замена

    split- делить строку на массив, разбивая ее по указаной подстроке

    test- выполняет поиск совпадения регулярного выражения со строкой.Возращает true или false


*/

/* Синтаксис ваписи
let regxp=new RegExp("шаблон", флаги);
let regxp = /Шаблон/флаги
 */

let str = "Я ищу совпадения в 2026 году";

// let regxp=/[2026]/g;
// document.writeln(str +"<br>");
// document.writeln(str.search(regxp)+"<br>");
// document.writeln(str.match(regxp)+"<br>");
// document.writeln(regxp.test(str)+"<br>");


/* Флаги
    g (global) - исчет все совпадения с шаблоном поиска(глобальный поиск);
    i (ignoreCase) - регистрозвависимый поиск
 */

/* Диапазон
    [0-9]-любая цифра от 0 до 9
 */
/* 
let regxp = /[а-я]/gi;
document.writeln(str + "<br>");
document.writeln(str.match(regxp) + "<br>"); */

/* function lowerCase(str) {
    return str.replace(/[А-Я]/g, u => u.toLowerCase());
}

console.log(lowerCase("Несколько слов"));
 */
/* 
{3}-количество символов идущих подряд
{1,} -от 1 до бесконечности
{2,5}- от 2 до 5 повторений*/
// let regxp=/[0-9]{3}/g;
// document.writeln(str.match(regxp)+"<br>")
/* 
let html = `
<table>
    <tr>
    <td bgcolor="#CCC">
    <img src="222.png" /></td>
    <td bgcolor="#003399">
    <img src="af3.png" /></td>
    <td bgcolor="#00CCC">
    <img src="fff.png" /></td>
    </tr>
    </table>`;

let exp=/#/ig;
console.log(html.match(exp)); */


/* 
\d (digit)-любая цифра
\s (space)- пробельний символ,включая табуляцию и перевод строки
w (word) -любая цифра буква и  подчепкивание */
// let regxp=/\d/g;
// document.writeln(str.match(regxp)+"<br>")

let w="Я изучаю JavaScript";

let regxp=/\s/g
document.writeln(w.replace(regxp,"_"))
