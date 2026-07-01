/* class   User{
    constructor(name='Гость',role='viever',isActive=false){
        this.name=name;
        this.role=role;
        this.isActive=isActive;
        this.createAt=new Date();
    }

    activate(){
        this.isActive=true;
        return `Пользователь ${this.name} активирован`
    }
}
const admin= new User('admin','admin',true);
const guest= new User();
console.log(guest);

console.log(guest.activate());


console.log(admin);
console.log(guest);

 */
/* class Person {
    #age;
    #name;
    constructor(name, age) {
        this.#name = name,
            this.#age = age;
    }
    set age(year) {
        if (year > 0 && year < 110) {
            this.#age = year
        }

    }
    get age(){
        return this.#age;
    }
    print() {
        console.log(`Name: ${this.#name} Age: ${this.#age}`);

    }
}

let tom = new Person("Tom", 37);

tom.name = 'sam';

tom.print();
console.log(tom.age);
 */
/* 
class User {
    constructor(login) {
        this.login = login;
    }
    set login(value) {
        if (value.length < 6) {
            console.log("Логин слишком короткий");
            return
        }
        this._login = value;
    }
    get login() {
        return this._login
    }
    getLogin(){
        return this._login
    }
}

let user = new User("administrator");
console.log(user.login);
user.login = 'admin';
console.log(user.login);

 */
/* 
class Person{
    constructor(firstName,lastName){
        this.firstName=firstName,
        this.lastName=lastName;
    }
    get fullName(){
        return this.firstName +" "+this.lastName
    }
    set fullName(value){
        [this.firstName,this.lastName]=value.split(/\s+/)
    }
}

let people=new Person("Сергей","Михайлов");

document.writeln(people.fullName+"<br>");
people.fullName="Юсеф Рушанович";
document.writeln(people.fullName+"<br>");
 */
/* 
class Mail{
    constructor(sender){
        this._sender=sender;
    }
    get sender(){
        return "Почта: "+ this._sender
    }
    set sender(val){
        this._sender=val.toLowerCase()
    }
}

const m= new Mail("test@mail.ru")
m.sender="MyTest@mail.ru"
document.writeln(m.sender);
 */

class Worker{
    constructor(name,surname,rate,days){
        this._name=name;
        this._surname=surname;
        this._rate=rate;
        this._days=days;
    }
    get name(){
        return this._name
    }

    get surname(){
        return this._surname
    }
    get getfullName(){
        return this._surname+" "+this._name
    }
    get rate(){
        return this._rate
    }
    get days(){
        return this._days
    }
    getSalary(){
       return this._rate*this.days
    }
}

let corker=new Worker("Иван","Иванов",10,31);
console.log(corker.name);
console.log(corker.surname);
console.log(corker.getfullName);
console.log(corker.rate);
console.log(corker.days);
console.log(corker.getSalary());

 

class Animal{
    constructor(name){
        this.speed=0;
        this.name=name
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

class Rabbit extends Animal{
    hide(){
        document.writeln(`${this.name} прячется<br>`)
    }
    stop(){
        this.hide()
        
    }
}

let animal=new Animal("Мой питомец");
animal.run(80);
animal.stop();
let rabbit=new Rabbit("Белый кролик");
rabbit.hide();
rabbit.run(5);
rabbit.stop()