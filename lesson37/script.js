/* class Shape {
    constructor(name) {
        this.name = name
    }

    calkulateArea() {
        throw new Error("Метод  calkulateArea должен быть реализован");
    }

    describe() {
        console.log(`Это ${this.name} с площадью ${this.calkulateArea()}`);

    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    calkulateArea() {
        return (Math.PI * this.radius ** 2).toFixed(0)
    }
}

class Square extends Shape {
    constructor(name, side) {
        super(name);
        this.side = side;
    }
    calkulateArea() {
        return this.side ** 2
    }
}

class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.base = base;
        this.height = height;
    }
    calkulateArea() {
        return this.base * this.height / 2;
    }
}

// const circle = new Circle("Круг", 5)


// const square = new Square("Квадрат", 4);
// square.describe();

// const triangle= new Triangle("треугольник",6,3);
// triangle.describe()

const shapes = [
    new Circle("Круг", 5),
    new Square("Квадрат", 4),
    new Triangle("Тругольник", 6, 3)
];

shapes.forEach(shape =>shape.describe()); */
/* 

class Animal{
    static count=0;
    constructor(name){
        this.speed=0;
        this.name=name;
        Animal.count++;
    }
    static counter(){
        return Animal.count;
    }
    run(speed){
        this.speed=speed;
        document.writeln(`${this.name} бежить со скоростью ${this.speed} км/ч <br>`)
    }
    stop(){
        this.speed=0;
        document.writeln(`${this.name} стоит.<br>`)
    }
}

let animal1= new Animal("Мой питомец 1");
let animal2= new Animal("Мой питомец 2");
let animal3= new Animal("Мой питомец 3");

console.log(animal1.name);
console.log(animal2.name);
console.log(Animal.name);
console.log(Animal.count);
console.log(Animal.counter());
 */
/* 
class User{
    static takeNames=[];

    static isNameTaken(name){
        return User.takeNames.includes(name);
    }
    constructor(name){
        this.name=name;
        User.takeNames.push(name);
    }
}

const user1=new User("Cергей");
const user2=new User("Марина");
console.log(User.takeNames);
console.log(User.isNameTaken("Сергей"));
console.log(User.isNameTaken("Марина"));
 */
/* 

class MathUlots {
    static PI = 3.141592653589793;
    static sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0)
    }

    static averge(...numbers){
        return MathUlots.sum(...numbers) /numbers.length
    }
}

console.log(MathUlots.sum(1, 2, 3, 4));

console.log(MathUlots.averge(1, 2, 3, 4));
 */

/* class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        Task.count++;
        // console.log("Происходить создание задачи");
        this.done = false;

    }
    static getDefaultTitle() {
        return "Задача";
    }

    get done() {
        return this._done === true ? "Задача выполнена": "Задача не выполнена"
    }

    set done(value){
        if (value !==undefined && typeof value=="boolean") {
            this._done=value;
        }else{
            console.error("Ошибка! Укажите значение true или false")
        }
    }

    comlete() {
        this.done = true
        console.log(`Задача ${this.title} Выполнена`);

    }
}
Task.count = 0;
let task1 = new Task("Выучить JavaScript");
let task2 = new Task("Выучить frameworks");
let task3 = new Task();
let task4 = new Task();

console.log(task1.title);
console.log(task2.title);
console.log(task3.title);
console.log("Созданные задачи: " + Task.count);
task2.comlete()

console.log(task1.done);
console.log(task2.done);

 */
/*  
class Header{
constructor(image,h1,h2){
    this.src=image;
    this.h1=h1;
    this.h2=h2;
    this.out=';'
    
}

    render(id){
        this.out=
        `
        <img src="${this.src}">
        <h1>${this.h1}</h1>
        <h2>${this.h2}</h2>`;
        document.querySelector(`#${id}`).innerHTML=this.out
    }
}

class HeaderExt extends Header{
    constructor(image,h1,h2,tel){
        super(image,h1,h2);
        this.tel=tel
    }

    get tel(){
        return this._tel
    }
    set tel(value){
        let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if (reg.test(value)) {
            this._tel=value
        } else{
            alert(
                "Некоррекный номер телефона"
            )
        }
    }
    render(id){
        super.render(id);
        this.out+=`<h3>${this.tel}</h3>`;
        document.querySelector(`#${id}`).innerHTML=this.out;
        
    }
}
let img= "https://images.icon-icons.com/2107/PNG/96/file_type_js_official_icon_130509.png"
let header1=new Header(img,"Заголовок","Описание");

header1.render("header")

let img2="https://images.icon-icons.com/2622/PNG/96/brand_js_icon_158838.png";

let header2= new Header(img2,"Второй заголовок","Другое описание");
header2.render("header2");

let img3="https://images.icon-icons.com/1822/PNG/96/js_115529.png";

let header3=new HeaderExt(img3,"Название","Описание","7 999 123-45-67");

header3.render("header-ext");
 */

const canvas=document.getElementById("test");
const c=canvas.getContext("2d");
c.fillStyle='yellow'
c.fillRect(10,10,60,50)