let sum;
let count = 0;
let i = 0;
let res;

do {
    sum = +prompt("Введите любое количество чисел")
    if (sum != 0) {
        i += sum
        count++
        res = i / count

    }
    

    // res= sum/count
} while (sum != 0);

document.writeln("Количество введенных чисел: " + count + "<br>")
document.writeln("общая сумма: " + i + "<br>")
document.writeln("Среднее арифметические: " +  parseInt(res))
