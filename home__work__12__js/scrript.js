"use strict";
let months = ["январь", "февраль", "март", "апрель", "май", " июнь", "июль", "август", "сентябрь", " октябрь", " ноябрь", "декабрь"];
function random() {
    return Math.floor(Math.random() * 256);
}
for (let month of months) {
    document.writeln(`<div class='element' style='background: rgb(${random()},${random()},${random()})'>${month}</div>`)
}
let el = document.getElementsByClassName("element");
for (let e of el) {
    e.style.fontWeight = 'bold';
    e.style.textAlign = 'center';
    e.style.paddingTop = '10px';
    e.style.paddingBottom = '10px';
}


