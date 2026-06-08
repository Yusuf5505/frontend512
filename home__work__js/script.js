let task = +prompt("Введите 5-ти значное число?")

let one, two, three, four, five
console.log(task);

if (task) {
    one = task % 10
    console.log(one);
    task = parseInt(task / 10)


    two = task % 10
    console.log(two);

    task = parseInt(task / 10)


    three = task % 10
    console.log(three);

    task = parseInt(task / 10)

    four = task % 10
    console.log(four);

    task = parseInt(task / 10)


    five = task
    console.log(task);

    console.log( "Произведение цифр: ",one * two * three * four * five)

    let sum = (one + two + three + four + five)

    console.log( "Среднее арифметическое: ",sum / 5)

}
else{
    alert("Операция не выполнена")
}
