// localStorage.setItem("data",1);
// alert(localStorage.getItem("data"));

/* localStorage.test=2;
alert(localStorage.test);
delete localStorage.test; */
/* 
localStorage.setItem('username','Yusuf');
localStorage.setItem('surname','Sayganov');
// alert(localStorage.length);

for(let i=0;i<localStorage.length;i++){
    let k=localStorage.key(i);
    console.log(k+": " +localStorage.getItem(k));
    
};
console.log('\n');

let keys=Object.keys(localStorage);

for(let key of keys){
    console.log(key+": " +localStorage.getItem(key));
    
}
 */

/* localStorage.user=JSON.stringify({name:"Yusuf"});
let user=JSON.parse(localStorage.user);
console.log(user.name); */

// localStorage.removeItem('username');

// console.log(localStorage.clear());

/* let board=document.querySelector("div");
let value=document.querySelector("span");
let counter;
if (localStorage.getItem("count")>0) {
    counter=localStorage.getItem("count");
    value.textContent=counter;
}else{
    counter=0;
}

board.addEventListener("click",function () {
    counter++
    value.textContent=counter;
    localStorage.setItem("count",counter);
});

board.addEventListener("contextmenu",function(){
    localStorage.clear();
    counter=0;
    value.textContent=counter;
});

 */
/* 
const form = document.getElementById("form1");
const formFields = form.elements;
const sumbitBtn = form.querySelector("[type='submit']");
function asttachEvents() {
    for (let i = 0; i < formFields.length; i++) {
        formFields[i].addEventListener("change", changeHangle);
    }
}


function changeHangle() {
    if (this.type != "checkbox") {
        console.log(this.name, this.value);
        localStorage.setItem(this.name, this.value);
    } else {
        console.log(this.name, this.checked);
        localStorage.setItem(this.name, this.checked);

    }

    checkedStroge();
    function checkedStroge() {
        for (let i = 0; i < formFields.length; i++) {
            if (formFields[i].type !== 'submit') {
                if (formFields[i].type === 'checkbpx') {
                    formFields[i].checked = localStorage.getItem(formFields[i].name)
                } else {
                    formFields[i].value = localStorage.getItem(formFields[i].name)
                }
            }
        }
    }
asttachEvents()
}

sumbitBtn.addEventListener("click",clearStorage);
function clearStorage(){
    localStorage.clear();
} */
/* let list = document.querySelector("#list");
let but = document.querySelector("button");
 
but.addEventListener("click", addNote);
 
function addNote(){
    let name = prompt("Имя записи", "");
 
    notes[name] = "";
    addToList(name);
    saveToStorage();
    list.value = name;
    current.value = notes[name];
}
 
function addToList(name){
    let option = document.createElement("option");
    option.textContent = name;
    list.append(option);
}
 
function saveToStorage(){
    localStorage.setItem("notes", JSON.stringify(notes));
}
 
let notes = JSON.parse(localStorage.getItem("notes")) || {"что купить": ""}
 
for(let name in notes){
    addToList(name);
}
 
let current = document.querySelector("#currentnote");
current.value = notes[list.value];
 
list.addEventListener("change", function(){
    current.value = notes[list.value];
});
 
current.addEventListener("change", function(){
    notes[list.value] = current.value;
    saveToStorage();
}) */

sessionStorage.setItem("test",1);
console.log(sessionStorage.getItem("test"));
