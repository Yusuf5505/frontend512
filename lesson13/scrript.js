"use strict";
/* function fn(a,b, ...args) {
    console.log("a =",a,",b ="+b," args",args);
    
}
fn(1,2,3,"A","B","C");
 */

/* function sum(...args){
  let total =0;
  for(let a of args){
    total+=a
  }
  return total
} */
/* 
  function sum(...args){
  return args
  .filter(e=>
     typeof e==="number"
  )
  .reduce((prev, curr)=> prev +curr)
}

console.log(sum(10,"hi",null,undefined,20)); */
/* 
let combine= (...arg)=> arg.reduce((prev,curr)=>prev+ " "+ curr);

console.log(combine("hello","world","!"));
 */
/* 
function hello(name) {
    name=name || "незнакомец"
    document.writeln("Привет, "+name+"!<br>")
} */

/* 
function hello(name= "незнакомец") {
    
    document.writeln("Привет, "+name+"!<br>")
}

hello("Юсуф")
hello() */

// function rectangle(w, h=100, fon='gold') {
//     document.writeln("<div id='shape'></div>");
//     let id = document.getElementById("shape");
//     id.style.width = w + "px";
//     id.style.height = h + "px";
//     id.style.background = fon;

// }

// rectangle(200, 100, "green");

// rectangle(200, 100);
// rectangle(50,50,"red");

/* let j=2;

function ch() {
    let j=3;

} */

/* let j=2;

function ch() {
     j=3;

}
ch();
console.log(j);
 */

// let square= num => num*num
/* 
function func(num1, num2) {

    function square(num) {
        return num * num
    }

    return square(num1) + square(num2)
}
console.log(func(2, 3));
 */
/* let num = 5;
function test(num1,num2) {
    function func() {
        console.log(num1+num2);
        
    }
    num1=2
    func()
}
test(4,2) */

/* function test(num) {
    function func(localNum) {
        console.log(localNum);

    }
    func(num + 2)
}

test(5); */
/* 
function func(num1) {
    return function (num2) {
        return function (num3) {
            return function (num4) {
                return function (num5) {
                    return [num1, num2, num3, num4, num5]
                }
            }
        }
    }
}
console.log(func(1)(2)(3)(4)(5));
 */
/* 
function hello() {
    console.log("Привет");
    
}
console.log(hello());
 */
/* 
function test() {
    let num = 5;

    return function () {
        console.log(num);

    }
}

let func = test()
console.log(func()); */
/* 
function outer(n) {
    return function (x) {
        return n + x;
    }
}
let add5= outer(5);
console.log(add5(4));

let add6 = outer(6);
console.log(add6(10));
 */
/* 
function  test(citi) {
    let num=0;
    return function(){
    num++;
    console.log(citi, num)
}
    
}
let func1= test("Москва");
test("Москва");
func1()
func1()
let func2 = test("Сочи")
func2()
func2()
func2() */
/* 
function isBetween(a,b) {
   return function(x) {
    return x>=a && x<=b;

   }
}



 
 console.log(arr.filter(isBetween(3,6)));
  */

function isArray(arr) {
    return function(x){
        return arr.includes(x);
    }
}
let arr= [1,2,3,4,5,6,7]; 
console.log(arr.filter(isArray([1,2,10])));
