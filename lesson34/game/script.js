let start = document.querySelector("#start");
let game = document.querySelector("#game");
let timeHeader = document.querySelector("#time-header");
let resultHeader = document.querySelector("#result-header");
let result = document.querySelector("#result");
let gameTime=document.querySelector("#game-time");
let score = 0;
let isGameStart = false;
let time = document.querySelector("#time");
game.addEventListener("click", handeBocxClick);
start.addEventListener("click", startGame);
gameTime.addEventListener("input", setGameTime)

function startGame() {
    score = 0;
    timeHeader.classList.remove("hide");
    resultHeader.classList.add("hide");
    setGameTime();
    gameTime.setAttribute("disabled",'true')
    isGameStart = true;
    start.classList.add("hide");
    game.style.background = '#FFF';
    let interval = setInterval(function () {
        let t = time.textContent;
        if (t <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            time.textContent = (t - 0.1).toFixed(1);
        }


    }, 100);
    renderBox();
}

function  setGameTime(){
    let tm=+gameTime.value;
    time.textContent=tm.toFixed(1);
    timeHeader.classList.remove("hide");
    resultHeader.classList.add('hide')
}


function endGame() {
    isGameStart = false;
    result.textContent = score;
    gameTime.removeAttribute("disabled");
    start.classList.remove("hide");
    game.innerHTML = '';
    game.style.background = ' rgb(155, 232, 251)';
    timeHeader.classList.add("hide");
    resultHeader.classList.remove("hide");
}

function getRandum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function renderBox() {
    game.innerHTML = '';
    let box = document.createElement("div");
    let boxSize = getRandum(30, 100);
    let gameSize = game.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;
    box.style.width = box.style.height = boxSize + 'px';
    box.style.background = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    box.style.position = 'absolute';
    box.style.left = getRandum(0, maxLeft) + 'px';
    box.style.top = getRandum(0, maxTop) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute("data-box", 'true')
    game.insertAdjacentElement("afterbegin", box);
}
function randomColor() {
     return Math.floor(Math.random() * 255)
}
function handeBocxClick(event) {

    if (!isGameStart) {
        return;
    }

    if (event.target.dataset.box) {
        score++
        renderBox();
        console.log(score);

    }

}