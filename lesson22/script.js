/* let product = document.querySelector(".product-cover");
let lengthPath = 5;
let paagination = document.querySelector(".pagination");

let data = new Array(18);
let filter= document.querySelector(".buttons")

for (let i = 0; i < data.length; i++) {
    data[i] = document.createElement("div");
    data[i].classList.add("card");
    if (i % 3) {
        data[i].classList.add("blue");
    } else {
        data[i].classList.add("gray");
    }
    let node = document.createTextNode(i + 1);
    data[i].append(node)
    product.append(data[i])
}
let i = 0;
let chunks = splitParrts(data);
renderChunks(0);

renderPagination();
paagination.addEventListener("click", e => {
    let item = e.target.closest(".pagination-item");
    if (item) {
        let active = paagination.querySelector('.pagination-item.active');
        let part;
        
        
        if (item.classList.contains("item-prev") || item.classList.contains("item-next")) {
            if (item.classList.contains("disable")) {
                return false;
            }
            part = +active.dataset.part;
           
            part = item.classList.contains("item-prev") ? part - 1 : part + 1;
            renderChunks(part);

            active.classList.remove("active");
           paagination.querySelector(`.pagination-item[data-part="${part}"]`).classList.add("active")
        } else{
             active.classList.remove("active");
             item.classList.add("active");
             part= +item.dataset.part
             renderChunks(part);
        }

        let prev = paagination.querySelector(".pagination-item.item-prev");
        
        

        let next = paagination.querySelector(".pagination-item.item-next");

        if (prev.classList.contains('disable')) {
            prev.classList.remove("disable")
        }
        if (next.classList.contains('disable')) {
            next.classList.remove("disable")
        }
        if (part ===0) {
            prev.classList.add("disable")
        }
        if (part== chunks.length -1) {
            next.classList.add("disable")
        }
    }
});


function splitParrts(arr) {
    let chunks = [];
    for (let i = 0; i < arr.length; i += lengthPath) {
        chunks.push(arr.slice(i, i + lengthPath)); // используем slice вместо splice
    }
    return chunks;
}

function renderChunks(part) {
    if (part >= 0 && part < chunks.length) { // меняем <= на <
        product.innerHTML = "";
        chunks[part].forEach(elem => product.append(elem)); // forEach вместо map
        return true;
    } else {
        return false;
    }
}

function renderPagination() {

    if (chunks.length > 1) {
        chunks.map((elem, i) => paagination.insertAdjacentHTML("beforeend",
            `<li class='pagination-item${i === 0 ? " active" : ""}' data-part="${i}">
                <a href="#">${i + 1}</a>
            </li>`
        ));
        paagination.insertAdjacentHTML("afterbegin", "<li class='pagination-item item-prev disable'><a href='#'>prev</a></li>");

        paagination.insertAdjacentHTML("beforeend", "<li class='pagination-item item-next' ><a href='#'>next</a></li>")
    }
}

filter.addEventListener("click",e =>{
    let btn= e.target.closest(".btn");
    paagination.innerHTML='';
    if (btn) {
        if (btn.dataset.filter !=="all") {
            chunks= splitParrts(data.filter(elem => elem.classList.contains(btn.dataset.filter)));
        }else{
            chunks=splitParrts(data);
        }
    }
    renderChunks(0);
    renderPagination()
}) */

// let form = document.querySelector("form");
// console.log(form.length);
// console.log(form.elements);
// console.log(form.name);
// console.log(form.action);
// console.log(form.method);
/* 
document.form1.style.background="silver";

document.forms[0].style.margin='20px';
document.forms['form1'].style.padding='16px';
document.forms.form1.style.border='2px dotted gray' */

// let key=form.elements[0];
// console.log(key);

// let key2=form.elements['name1'];
// console.log(key2);
/* 
document.form1.name1.style.color='blue';
document.form1['name1'].style.background='aqua';

let txt=document.querySelector("#text1");
let but=document.querySelector("button");
but.addEventListener("click",content);
function content(){
    alert(txt.value)
}
 */

// let text =document.querySelector("input");
// let output=document.querySelector("#length");
// text.addEventListener("input", function(){
//     output.textContent=text.value.length +" /100";
// })

// let form =document.querySelector("form");
// form.addEventListener("submit",function (event) {
//     console.log
//     ("Coхраненые данные:"+ form.elements.value.value);
//     event.preventDefault();
// });

// let reg=document.querySelector(".register");
// let h2= document.querySelector("h2");
// let win= document.createElement("p");

// h2.after(win);
// reg.addEventListener("submit",function(event){
//     event.preventDefault();
//     let login= reg.login.value;
//     let pas=reg.psw.value;
//     let pas2=reg.psw2.value
//     let errors='';

//     if (login=="" || pas=="" || pas2=="") {
//         win.className='red';
//         win.innerHTML="Все поля должны быть заполнены"
//         return
//     }
//     if (pas !=pas2) {
//         errors+="Пароли не совпадают<br>"
//     }
//     if (pas.length <6) {
//         errors+="Слишко короткий пароль";
//     }
//     if (errors=="") {
//         win.className="green";
//         win.innerHTML="Регистрация прошла успешно";
//         reg.login.value='';
//     reg.psw.value='';
//     reg.psw2.value='';
//     }else{
//         win.className="red";
//         win.innerHTML=errors
//     }

// })

let input = document.querySelector("#input");
let list = document.querySelector("#list");

input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        let li = document.createElement("li");
        let task = document.createElement("span");
        task.classList.add("task");
        task.textContent = input.value;

        li.append(task);
        let edit=document.createElement("input");
        edit.value=text;
        input.append(edit);
        let self=input
        edit.addEventListener("keypress",function(event){
            if (event.key=="Enter") {
               self.textContent=input.value; 
            }
        })
        list.append(li);
    }



    input.value = '';
})
