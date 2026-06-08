
let symbol = +prompt("Введите количество символов");
let type = prompt("Введите тип сивола");
let side = prompt("Введите по какоой оси хотите отобразить \n0)горизонтальная\n1)вертикальная\nорентация линии 0/1");

for (let i = 0; i < symbol; i++) {
    if (side == 0) {
        document.writeln(type)

    } else (
        document.writeln(type + "<br>")
    )

}