let start=document.querySelector("#start");
let game=document.querySelector("#game");
let score=0
game.addEventListener("click",handeBocClick)
start.addEventListener("click",startGame);
function startGame(){
    start.classList.add("hide");
    game.style.background="#FFF";
    renderBox();
}

function renderBox(){
    game.innerHTML='';
    let box=document.createElement("div");

    box.style.width=box.style.height='50px';
    box.style.background='#000';
    box.style.position='absolute';
    box.style.left='70px';
    box.style.top='50px';
    box.style.cursor='pointer';
    game.insertAdjacentElement("afterbegin",box);
    box.setAttribute("data-box","true");
}

function handeBocClick(event){
    if(event.target.dataset.box){
        score++;
        renderBox();
    }
    
}