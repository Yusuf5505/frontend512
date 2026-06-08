// let chouse= document.querySelector("input[type='button'");
// chouse.addEventListener("click",function(){
//  let f=document.form3;
//  console.log(f.radio2.length);
//  for(let i=0;i<f.radio2.length;i++){
//     if (f.radio2[i].checked) {
//         document.body.style.background=f.radio2[i].value
//     }

//  }
// })

// let f=document.form3;
// for(let i=0;i<f.radio2.length;i++){
//     f.radio2[i].addEventListener("change",chooseColor);
// }

// function chooseColor(event){
//    document.body.style.background=event.target.value 
// }

// let city=document.querySelector("#city");
// city.addEventListener("change",setImg);

/* свойство select
select.opinion - колекция из подэлементов <opinion>
select.value -значение выбраного в данный момент </opinion>
select.selectIndex -номер (индекс) выбранного </opinion
 */

// function setImg() {

//     let cities =city.selectedIndex;
//     let opinions=city.options;
//     let code=opinions[cities].value
//     console.log(code);
//     let div= document.querySelector("#image");
//     div.innerHTML="<img src='img/"+code+".png'>"
// }

// let select=document.querySelector("select");
// console.log(select);

// let output=document.querySelector("#output");
// select.addEventListener("change",function(){
//     let number= 0;

//     for(let i=0;i<select.options.length;i++){
//        let opinion=select.options[i];
//        if (opinion.selected) {
//         number+=Number(opinion.value)
//        }
//     }

//     output.textContent=number
// })

// let contries =document.querySelector("#contries");

// let reCities=document.querySelector("#ru");
// let byCities=document.querySelector("#by");

// contries.addEventListener("change",function(){
//     document.querySelector(".cities.active").classList.remove("active");
//     if (this.value=="ru") {
//         reCities.classList.add("active")
//     }
//     if(this.value=="by"){
//         byCities.classList.add("active")
//     }
// })

// let opinion= new Option("Текст","value",true,true);

// console.log(opinion);

// let btnadd=document.querySelector("#btnAdd");
// let btnRemove=document.querySelector("#btnRemove");

// let taskInput=document.querySelector("#task");
// let taskList=document.querySelector("#taskList");

// btnadd.addEventListener("click",e =>{
//     e.preventDefault();
//     if (taskInput.value.trim() ==="") {
//         alert("Введите названия задачи");
//         return;
//     }

//     let option=new Option(taskInput.value,taskInput.value);
//     taskList.add(option,undefined);
//     taskInput.value='';
//     taskList.focus();
// });

// btnRemove.addEventListener("click",e =>{
//     e.preventDefault();
//     let selectedTask=[];

//     for(let i=0;i<taskList.options.length;i++){
//         selectedTask[i]=taskList.options[i].selected
//     }
//     let index=taskList.options.length
//     while (index--) {
//        if (selectedTask[index]) {
//         taskList.remove(index)
//        } 
//     }
// })

// let input = document.querySelector("input");
// input.addEventListener("change", function () {
//     if (input.files.length > 0) {
//         let file=input.files[0];
//         console.log("You chois",file.name);
//         if (file.type) {
//             console.log("У него тип:",file.type);

//         }
//     }
// })

let gas = document.querySelector(".gallon");
let petrol = document.querySelectorAll(".petrol");
for (let i = 0; i < petrol.length; i++) {
    petrol[i].addEventListener("click", function () {
        let gallons = gas.value
        let amout = this.getAttribute("data-pet");

        res = gallons * amout;
        let sum=document.querySelector(".sum");
        sum.innerHTML=res;
    })
}