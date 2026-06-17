let n=prompt("Введите ваше имя");
let obj={
    name:n,
    color:[
        "Красный",
        "Синий",
        "Черный",
        "Белый"

    ],
    car:[
        "BMW",
        "AUDI",
        "RANGE ROVER",
        "TOYOTA",
        "HYNDAI"]

}

let but=document.querySelector("button");
but.addEventListener("click",function () {
    randomChoise()
})
function randomChoise() {
    let r=obj.color[Math.floor(Math.random()*obj.color.length)];
    let c=obj.car[Math.floor(Math.random()*obj.car.length)];
    return document.writeln(`Поздравляем! ${obj.name} Выграл ${r} ${c}`)
}