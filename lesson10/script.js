// function Declaration

/* 
function имя (аргументы){
тело функции
}
 */
/* function hello(name) {
    document.writeln("Hello, " + name + "<br>");
}
hello();
hello("irina");// параметр
 */

/* function caption() {
    for(let i=1;i<=6;i++){
        document.writeln("<h"+i+">Заголовок "+i+"</h"+i+">");
    }
}
caption(); */
/* 
function test(a, b, c) {
    // alert(a + b + c);
    let res = a + b + c;
    return res;
}
let a = 10, b = 20, c = 30;
test(a, b, c);
let sum = test(5, 5, 5);
console.log(sum);
 */
/* 
function test2(n, m) {
    if(m==0){
        return "Делить на 0 нельзя"
    }
    return n / m
}
let a1 = test2(10, 2);
let a2 = test2(10, 0);
alert(a1);
alert(a2); */

/* function result(n, m) {
    if (n > m) {
        return n - m;
    } else {
        return n + m;
    }
}
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let res = result(a, b);
alert(res) */
/* 
function sum(arr) {
    let res = 0;
    for(let i=0;i<arr.length;i++){
        res+=arr[i];
    }
    return res;
}
document.writeln(sum([3, 8, 9, 4, 1, 2, 5]) + "<br>")

document.writeln(sum([1, 2, 5]) + "<br>") */

function max(a,b) {
   if (a>b) {
    return a;
   }else if (a==b) {
  return "Два числа являются равными"
   }else{
    return b
   }
}
document.writeln(max(5,2)+"<br>");
document.writeln(max(5,9)+"<br>");
document.writeln(max(5,5)+"<br>");
