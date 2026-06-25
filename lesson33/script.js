// const personData=[['name','Юсуф'], ['age',20]]
// console.log(personData);

// const person=Object.fromEntries(personData);
// console.log(person);

// const first=null;
// const second={name:"Bob"};

// function printName(person) {
//     console.log(person?.name);

// }
// printName(second)
// printName(first)

// const first=null;
// const second={name:"Bob",
//     sayHu(){
//         console.log(`hi I m ${this.name}`);

//     }
// };

// function printName(person) {
//     console.log(person?.name)};

// printName(first);
// printName(second);
// first?.sayHu();
// second?.sayHu();

// const object={name:"Ирина"};
// Object.freeze(object)
// object.name='alex';
// object.age=25
// console.log(object);

// Контекст

// let person={
//     age:24,
//     name:"alex",
//     job:"programmer",
//     displayInfo:function () {
//         console.log("name",this.name);

//         console.log("age",this.age);
//         console.log("job",this.job);


//     }
// }

// person.displayInfo()

// let person = {
//     age: 24,
//     name: "alex",
//     job: "programmer",
//     displayInfo: function (ms) {
//         console.log(this);


//         setTimeout(() => {
//             console.log("name", this.name);

//             console.log("age", this.age);
//             console.log("job", this.job);
//         },ms)

//     }
// }

// person.displayInfo(2000)
// // console.log(this);

// let h = document.querySelector("h1").addEventListener("click", function() {
//     h.style.color = "red";
// });
//  let modal=document.querySelector("#modal");
// document.querySelector("#btn").addEventListener("click",function(){
//     modal.style.display="block"
// })

// document.querySelector(".close").addEventListener("click",function(){
//     modal.style.display="none"
// })
// window.addEventListener("click",function(event){
//     if (event.target==modal) {

//     modal.style.display='none'
//     }
// }) 

// let w=document.documentElement.clientWidth;
// let h=document.documentElement.clientHeight;

// document.querySelector("#window").innerHTML="Ширина окна: "+w+", Высота окна "+h

// console.log('ширина окна',window.innerWidth);
// console.log('высота окна',window.innerHeight);

let box = document.querySelector(".box");
let width = box.scrollWidth;
let height = box.scrollHeight;


let flag = 1;
let hh = box.offsetHeight;
document.querySelector("button").addEventListener("click", function () {
    // if (flag == 1) {
    //     box.style.height = box.scrollHeight + "px";
    //     flag = 0;
    // } else {
    //     box.style.height = hh + "px";
    //     flag = 1;
    // }

    // console.log(box.scrollTop);
    /* console.log(box.getBoundingClientRect());
    console.log(box.getBoundingClientRect().top);
    console.log("offsetTop",box.offsetTop); */
    
    if (!flag) {
        box.style.overflow='hidden'; 
    }else{
          box.style.overflow='';
          
    }
   flag= !flag
})

// window.addEventListener("scroll", myfunction);

// function myfunction() {
//     let winScroll = document.documentElement.scrollTop;
//     let heght = document.documentElement.scrollHeight - document.documentElement.clientHeight;

//     let scroled = winScroll / heght * 100;

//     document.querySelector("#myBar").style.width = scroled + "%"
//     document.querySelector("img").style.transform = "translate(" + (document.documentElement.clientWidth - 94) * scroled / 100 + "px, 0px)"
// }