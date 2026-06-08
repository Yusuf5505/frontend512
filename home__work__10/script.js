let mas = [];
while (true) {
    let n = +prompt("Введите числа для хаполнения массива\nЧтыбы закончить заполнения нажмите на '0'");
    mas.push(n)
   
    if (n == 0) {
        alert("цикл остановлен")
        break
    }
}
/* for (let i = 0; i < 10; i++) {
    let n = +prompt("Введите числа для заполнения массива");
    mas.push(n)
} */
console.log(mas);
let res1 = []
function res() {
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] % 3 == 0) {
            res1.push(mas[i]);


        }
    }
    console.log(res1);
    res1.join(" , ")
    document.writeln("Числа которые кратные трем: " + res1)
}

res(mas)
