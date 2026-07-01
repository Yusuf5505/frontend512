// console.log(location);
// console.log(location.href);
// alert(location)
// location.href='https://htmlbook.ru/';

/* let open=document.querySelector("#snow");
open.addEventListener("click",function(){
    window.location.assign("https://htmlbook.ru/");
}) */
/* 
let btn=document.querySelector("#snow");

btn.addEventListener("click",()=>{
 let url= document.querySelector("#url").value;
 location.assign(url);
}) */

//  console.log("В истории "+history.length+" Страниц");
/* 
 try{
    // где можеть произойти ошибка
 } catch(error){
    // выполнится, если произошла ошибка
 }finally{
    // выполнитьтся в любом случае
 }
  */

/* let a = 5;
try {
    console.log(b);

} catch (error) {
    console.error("Ошибка " + error.message);

}
 */

/* try{
    
let num =16;
console.log(num());
}catch(e){
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
    
} */
/* try {
    let arr = new Array(-5);
} catch (e) {
    let text = e.name + "<br>" + e.message + "<br>" + e.stack;
    document.getElementById("demo").innerHTML = text;
}
 */
/* try{
    setTimeout(function () {
    alert(x);
    alert(2 + 2);
}, 10);
} catch(e){
    alert(e.name +": "+ e.message);
}
 */
/* 
try{
    alert(x);
    alert(2+2);
} catch(e){
    alert(e.name+": "+e.message);
}
finally{
    alert("Код блоке finally");
} */
/* 
let flag=false;
let but=document.querySelector("#btn");
but.addEventListener("click",function(){
try{
    if (!flag) {
        document.body.style.background='yellow';
    }else{
        document.body.style.background="greenyellow";
    }
}catch(e){
    alert(e)
}finally{
    flag=!flag
}
}); */
/* 
function divide(a,b) {
    if(b==0){
        throw new Error("Делить на 0 нельзя")
    }
    return a/b
}

let res;
try{
    res=divide(5,0);
    console.log(res);
    
} catch(e){
    console.log(e.name+": "+e.message);
    
} */
/* 
let but=document.querySelector("button");
but.addEventListener("click",myFunction);
function myFunction(){
    let message=document.querySelector("#txt");
    let x=document.getElementById("demo").value;
    message.innerHTML='';
    try{
        if (x=="") {
            throw "Пусто";
        }if (isNaN(x)) {
            throw "Не число";
        }
        if (x<5) {
            throw "Слишком мало";
        }
        if (x>10) {
            throw "Слишком много"
        }
    } catch(er){
        message.innerHTML='Вы вели: '+er
    }

} */
/* 
function calculate(a, b) {
    if (typeof a!='number') {
        throw 'a-не число'
    }
    return a + (b ** 2);
}

console.log(calculate(5, 3));
console.log(calculate("Hello", 3)); */

// Классы
/* 
function Person(name,age){
    this.name=name,
    this.age=age
}

const person1=new Person('Андрей',19);
console.log(person1);
class Person2{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
}

const person2= new Person2("alex",23);
console.log(person2);
 */
/* 
class Person2{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    sayHi(){
        document.writeln("Привет"+this.name+"!")
    }
}

const person2= new Person2("Андрей",23);
console.log(person2);
person2.sayHi();
alert(typeof Person2)
 */
/* 
let User= class{
    saHi(){
alert("Hello")
    }
}
let user= new User();
user.saHi() */
/* 
class Rectangle{
    constructor(height,width){
        this.height=height,
        this.width=width;
    }
    area(){
        return this.height *this.width
    }
}

const rectangle= new Rectangle(10,20);
console.log(rectangle.area());
 */