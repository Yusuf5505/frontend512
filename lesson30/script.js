// console.log("Вносим изменения");
/* let RegistrationForm=document.getElementById("RegistrationForm");
let ErorMesadjer=document.querySelector("#ErorMesadjer");

RegistrationForm.addEventListener("submit",function(event){
    event.preventDefault();
    let [username,email,password]=RegistrationForm.elements
    console.log(username,email,password);
    ErorMesadjer.innerHTML='';
    if (!username.value.trim()) {
        displayEror("Имя пользователя обязательно");
        return;
    }
    if (!email.value.trim()|| !isValidEmail(email.value)) {
        displayEror("Введите адрес электроной почты");
        return;
    }
    if (!password.value.trim() || !isStrongPassword(password.value)) {
        displayEror(" пароль должен состоят как минимум из 8 символов и как минимум одну заглавную букву одне строчную букву,одну цифру и специальный символ");
    }
    alert("Регистрация прошла успешно");
    RegistrationForm.reset();
});

function displayEror(message) {
    ErorMesadjer.innerHTML+=`<div class='error'>${message}</div>`;
}

function isValidEmail(email) {
    return/^[/\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
};
function isStrongPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!#%$]).{8,}$/.tesr(password);
}


 */

// let car= new Object();
// let car1={};
//1 способ
// car['type']='bmw';
// car['color']='white';
// console.log(car);
// document.writeln(car['type']+" "+car['color']);

// let car1=new Object();
// car1.type='bmw';
// car1.color='black';
// document.writeln(car1.type+" " +car1.color)
/* 
let menu1={};
menu1.widht=300;
menu1.height=200;
menu1.title='Menu';
console.log(menu1);
document.writeln(menu1.widht +" x "+menu1.height+" "+"<br>");
let menu={
    width:300,
    height:200,
    title:"Menu"
}
document.writeln(menu.width +" x "+menu.height+" "+"<br>");

// delete menu.width

document.writeln(menu.width +" x "+menu.height+" "+"<br>");

for(let i in menu){
    document.writeln("<br>Ключ="+i)
} */