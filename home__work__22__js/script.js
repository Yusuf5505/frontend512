let form = document.querySelector("form");
let login = form.elements["login"];
let pasword = form.elements["psw"];
let pasword2 = form.elements['psw2']
let sum = document.querySelector("#sub");
sum.addEventListener("click", exampion);
alert("Все поля должны иметь длину символов больше 5")

function exampion() {
    if (login.value.length >= 5 && pasword.value == pasword2.value) {
        alert(`Логин: ${login.value}\nПароль: ${pasword.value}`)
    }
    else if (pasword.value.length < 5) {
        alert("Пароль должен состоят не менее из 5 символов")
    }
    else if (pasword2.value.length < 5) {
        alert("Потвердите пароль");
    }
    else if (login.value.length < 5) {
        alert("Логин должен состоят из 5 символов")
    }
    else if (pasword.value != pasword2.value) {
        alert("Ошибка пароли должны совпадать")
    }

}









