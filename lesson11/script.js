/* function showArrayContent(arrayToShow) {
    if (arrayToShow) {
        if (arrayToShow.length == 1) {
            return arrayToShow
        } else {
            let last = arrayToShow.pop();
            console.log(last);
            let res=arrayToShow+" и "+last
            return res
        }
    }
}
// Определяем массивы.
let a = new Array('Текст');
let b = new Array('день', 'ночь');
let c = new Array('зима', 'весна', 'лета', 'осень');
alert(showArrayContent(a)); // Выводим содержимое массивов,
 alert(showArrayContent(b)); // используя созданную выше функцию.
alert(showArrayContent(c));  */

// function expression (функциональное выражение)

/* 
let func = function(аргументы){
    // тело функции
}
func(параметры);
*/
/* 
function sum1(a, b) {
    return a + b;
}

let sum2 = function (a, b) {
    return a + b;
}

 alert(sum1(20,30));//50
alert(sum2(2,3));// 5
 */

/* let average = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length).toFixed(2);
}
document.writeln(average([3, 8, 9, 4, 1, 2, 5]) + "<br>");
document.writeln(average([8, 2, 4]) + "<br>"); */
/* 
let sum = function (mas) {
    let max = 0;
    for (let i = 0; i < mas.length; i++) {
        if (max < mas[i]) {
            max = mas[i]
        }
    }
    return max
}

document.writeln(sum([3, 8, 9, 4, 1, 2, 5]) + "<br>")
document.writeln(sum([1, 2, 5]))
 */
/* (function(){
    alert("hello world");
})() */

/* (function(n){
    alert(n*n);
})(4) */

// Arrow Function(Стрелочная функция)

/* function test(a, b, c) {
    let res = a + b + c
    return res
}

alert(test(10,20,30));

let test1=(a, b, c) =>a + b + c;
alert(test1(1,2,3)); */
/* 
let double= n=>n**2;
let arr=[5,3,8,2];
let res=[];
for(let i=0;i<arr.length;i++){
    res[i]=double(arr[i]);
}

console.log(res);
 */

/* let symbol=(count,a,b)=>{
    for(let i=0;i<count;i++){
      document.writeln(i%2 ? b:a)  
    }
    document.writeln("<br>")
}
symbol(9,"+","-");
symbol(7,"X","0"); */
/* 
let change = (lst) => {
    let last = lst.pop();
    let first = lst.shift();
    lst.push(first);
    lst.unshift(last)
    return lst;
}
document.writeln(change([1, 2, 3]) + "<br>");
document.writeln(change([9, 12, 33, 54, 105]) + "<br>");
document.writeln(change(["с", "л", "о", "н"]) + "<br>"); */

/* let a=5;
let b=7;
console.log("a =",a,"b=",b);
 */

/* let isGreater = (x, y) => x > y ? true : false;
document.writeln(isGreater(10,5)+"<br>");

document.writeln(isGreater(5,10)+"<br>") */
/* 
let checkPassword = password => {
    let hasUpper = false;
    let hasLower = false;
    let hasNum=false;
    for (let ch of password) {
        console.log(ch);
        if ("A" <= ch && ch <= "Z") {
            hasUpper = true
        } if ("a" <= ch && ch <= "z") {
            hasLower = true;
        }
        if (0<=ch && ch<=9) {
            hasNum=true;
        }
    }
    if (password.length >= 8 && hasUpper) {
        return true;
    } else {
        return false;
    }

}

let psw = prompt("Введите пароль:")
if (checkPassword(psw)) {
    document.writeln("Это надежный пароль");
} else {
    document.writeln("Это ненадежный пароль")
} */
/* 
let factorial = n => {
    let fact = 1
    for (let i = 1; i <= n; i++) {
   
        fact *= i;
    }
    return fact
}
document.writeln(factorial(5)) */

function getNames() {
    let firstName="Irina",lastName="Vetrova";
    return [firstName,lastName];
}

let names=getNames();
console.log(names);
// let sirname= names[1];

let [names1,sirname]=getNames();
console.log(names1);
console.log(sirname);

