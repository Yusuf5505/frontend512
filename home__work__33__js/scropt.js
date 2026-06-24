let modal = document.querySelector("#modal");
document.querySelector("#btn").addEventListener("click", function () {
    modal.style.display = "block"
})

document.querySelector(".close").addEventListener("click", function () {
    modal.style.display = "none"
})
window.addEventListener("click", function (event) {
    if (event.target == modal) {

        modal.style.display = 'none'
    }
})
let names = document.querySelector("#name");
let email = document.querySelector("#email");
names.addEventListener("input", function () {
    let regName = /^[A-Za-zа-я]{3,}$/ig;
   let span= this.parentElement.querySelector(".regp");
    valudat(names, regName,span);
    
});
email.addEventListener("input", function () {
    let regEml = /^[A-Za-z#$%^&0-9_]+@[A-Za-z]+\.[A-Za-z]{2,}$/ig
    let span= this.parentElement.querySelector(".regp");
    valudat(email, regEml,span)
});

function valudat(pr, reg,span) {
    if (reg.test(pr.value.trim())) {
      
        pr.style.border = "1px solid green"
        span.style.color = 'green'
        span.innerHTML = "Данные соотвествуют требованиям"
        return true;
    } else {
        span.style.color = 'red'
        span.innerHTML = "Данные не походят"
        pr.style.border = "1px solid red";
    }
}
let textarea=document.querySelector("textarea");
let mod2=document.querySelector("#mod2")
document.querySelector("#but").addEventListener("click",function(){
    if (textarea.value=='') {
        alert(`Форма успешно отпралено\nИмя: ${names.value}\nЭлектронная почта: ${email.value}\nКоментарии: коментарии отсусвует `);
    }else{
        alert(`Форма успешно отпралено\nИмя: ${names.value}\nЭлектронная почта: ${email.value}\nКоментарии: ${textarea.value}`);
    }
 
})