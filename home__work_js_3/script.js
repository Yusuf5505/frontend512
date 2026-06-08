let request = +prompt("Введите число от 1 до 99")
let sum = request % 10

if (request) {
    if (request >= 0 && request <= 99) {
        if (request == 11 || request==12 ) {
            alert(`${request} копеек`)
        }
        else if (sum == 1) {
            alert(`${request} копейка`)
        } else if (sum == 2) {
            alert(`${request} копейки`)
        }
        else {
            alert(`${request} копеек`)
        }
    } else {
        alert("Такого числа я не знаю")
    }
} else {
    alert("Операция не выполнена")
}