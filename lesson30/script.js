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

let area = document.getElementById("area");
let currentPlayer = document.getElementById("curPlayer");

let player = "x";
let stat={
    'x':0,
    'o':0,
    'd':0
}

let winIndex=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
area.innerHTML = ""; // Очищаем контейнер

for (let i = 0; i < 9; i++) { // 0-8 = 9 ячеек
    area.innerHTML += '<div class="cell" data-pos="' + i + '"></div>';
}
let cell = document.querySelectorAll(".cell")
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", cellClock)
}


function cellClock() {
    let data = [];
if(!this.innerHTML){
    this.innerHTML=player;
}else{
    alert("ячейка занета")
}
    for (let i in cell) {
        if (cell[i].innerHTML == player) {
            data.push(cell[i].getAttribute("data-pos"))
        }

    }

    if (checkWin(data)) {
        stat[player]+=1;
        restar("Выиграл: "+player)
    }

    player = player == 'x' ? "o" : "x"
currentPlayer.innerHTML=player.toUpperCase();
    console.log(data);
}

function checkWin(data) {
    for(let i in winIndex){
        let win=true;
        for(let j in winIndex[i]){
          let id =String(winIndex[i][j]);
          let ind=data.indexO(id);
          if(ind==-1){
            win=false;
          }


        }
    }
    if(win){
        return true;
    }
    return false;
}

function restar(text) {
    alert(text);
    for(let i=0;cell.length;i++){
        cell[i].innerHTML='';
    }
}

function updateStat() {
    
}