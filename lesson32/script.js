// /* Функция конструктор */
// function Car(name, year) {
//     this.name = name;
//     this.year = year;
// }
// Car.prototype.getAge = function () {
//     return new Date().getFullYear() - this.year;
// }
// Car.prototype.coloe="black"
// let ford = new Car("ford", 2019);
// console.log(ford);
// console.log(ford.getAge());


// let bmw = new Car("BMW", 2017);
// console.log(bmw);
// console.log(bmw.getAge());

// function User(pName,aAge) {
//     this.name=pName;
//     this.age=aAge;
//     this.displayInfo=function(){
//         document.writeln("Имя: "+this.name +"; возраст: "+ this.age+"<br>")
//     }

// };

// let tom= new User("Tom",26);

// tom.displayInfo()
/* 
let form=document.form1
form.addEventListener('submit',event =>{
    event.preventDefault();
    let title=form.title.value;
    let text=form.text.value;
    let description= form.description.value
    // console.log(title,text);
    saveForm({ title,text,description})
});

function saveForm(obj) {
    let formDate={
        date: new Date().toLocaleDateString(),
        title:obj.title,
        text:obj.text,
        description:obj.description
    }
    console.log("form data: ",formDate);
    
} */
/* 
let cardArray=[
    {name:'card1',img:'c0.gif'},
    {name:'card2',img:'c1.gif'},
    {name:'card3',img:'c2.gif'},
    {name:'card4',img:'c3.gif'},
    {name:'card5',img:'c4.gif'},
    {name:'card6',img:'c5.gif'},
    {name:'card7',img:'c6.gif'},
    {name:'card8',img:'c7.gif'}
];

let firstCard=null;
let secondCard=null;
let lockBoard=false;

function createBoard() {
    let gameBoard=document.querySelector('.game-board');
    let shuffledCards=[...cardArray,...cardArray].sort(()=>0.5-Math.random());
    shuffledCards.forEach(card =>{
        let cardElement=document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.name=card.name;
        let cartImage=document.createElement("img");
        cartImage.src=card.img;
        cardElement.append(cartImage);
        cardElement.addEventListener("click",flipCard)
        gameBoard.appendChild(cardElement)
    })
    function flipCard(){
        if (lockBoard) {
            return
        }

        if (this===firstCard) {
            return
        }
        this.classList.add("flipper");

        if (!firstCard) {
            firstCard=this
            return
        }
        secondCard=this
        checkforMath();
    }
}

function checkforMath(){
    if (firstCard.dataset.name === secondCard.dataset.name) {
        disabledCard()
    }else{
        unflioCard()
    }
}

function disabledCard(){

}
function unflioCard(){
    lockBoard=true
    setTimeout(()=>{
    },1000)
    secondCard.classList.remove("flipper");
}
createBoard() */

const book={title:'Дюна'}
const anotherBook={title:"Дюна"};
console.log(book==anotherBook);
