/* let reg = document.querySelector(".register");
console.log(reg);

let h2 = document.querySelector("h2");
let win = document.createElement("p");
h2.after(win);

reg.addEventListener("submit", function (event) {
    event.preventDefault();
    let login = reg.login.value;
    let password = reg.psw.value;
    let password2 = reg.psw2.value;
    let errors = '';

    if (login == "" || password == "" || password2 == "") {
        win.className = 'red';
        win.innerHTML = "Все поля должны быть заполнены";
        return;
    }
    if (password != password2) {
        errors += "Пароли не совпадают<br>"
    }

    if (password.length<6) {
        errors+="Слишком короткий пароль"
    }
    if (errors == "") {
        win.className = "green"
        win.innerHTML = "Регистрация прошла успешно";
        reg.login.value='';
        reg.psw.value='';
        reg.psw2.value='';
    } else {
        win.className = "red"
        win.innerHTML = errors
    }
   

})
//  */
// let input = document.querySelector("#input");
// let list = document.querySelector("#list");
 
// input.addEventListener('keypress', function (event) {
//     if (event.key == 'Enter') {
//         let li = document.createElement("li");
//         let task = document.createElement("span");
//         task.classList.add('task');
//         task.textContent = input.value;
//         task.addEventListener("dblclick", function () {
//             let text = this.textContent;
//             console.log(text);
//             this.textContent = "";
           
//             let edit = document.createElement("input");
//             edit.value = text;
//             this.append(edit);
 
//             let self = this;
//             edit.addEventListener("keypress", function(event){
//                 if(event.key == "Enter"){
//                     self.textContent = edit.value;
//                 }
//             })
 
//         })
 
//         li.append(task);
 
//        let remove=document.createElement("span")
//        remove.textContent="удалить"
//        remove.classList.add("remove");
//        remove.addEventListener("click",function(){
//         // li.remove()
//         remove.parentNode.remove()
//        })
//        li.append(remove)
//        let mark=document.createElement("span");
//        mark.textContent='Выполнено';
//        mark.classList.add("mark")
//        mark.addEventListener("click",function(){
//         mark.parentNode.classList.add("done");
//         mark.addEventListener("dblclick",function(){
//               mark.parentNode.classList.remove("done")
//         })
//        })
//        li.append(mark)
//         list.append(li);
//         input.value = "";
//     }
// })

// let checkbox=document.querySelector("#purple");
// checkbox.addEventListener("change",function(){
//     document.body.style.background=checkbox.checked ?"mediumpurple":""
// })

// 

// let input=document.querySelectorAll("input");
// let form= document.forms.form1
// console.log(form);
// for(let i=0;i<form.length;i++){
//     input[i].addEventListener("click",checkAll)
// }
// let numCkeked;
// function checkAll() {
//     numCkeked=0;
//     for(let i=0;i<form.length;i++){
//         if (input[i].checked && input[i].type=='checkbox') {
//             numCkeked++
//         }
//     }
//     if (numCkeked==3) {
//          for(let i=0;i<form.length;i++){
//             if (!input[i].checked) {
//                 input[i].disabled=true
//             }
//          }
//     }else{
//         for(let i=0;i<form.length;i++){
//             input[i].disabled=false
//         }
//     }
// }