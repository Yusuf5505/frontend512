let n = prompt("Введите имя");
let a = prompt("Введи возраст");
let j = prompt("Введите свою деятельность");
let but = document.querySelector("#but").addEventListener("click", display)
function display() {
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.infoPerson = function () {
            document.writeln("Я " + this.name + " Мне " + this.age + " лет" + " Я работаю " + this.job + "ом")
        }
    }
    let human = new Person(n, a, j);
    human.infoPerson();
}
