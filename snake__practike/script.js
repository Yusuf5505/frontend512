const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const startButton = document.querySelector("#but");

const gridSize = 20 //размер одного сегмента
let snake, direction, foot, score, gameSpeed,gameRunning;

function startGame() {
    snake = [{
        x: 200,
        y: 200
    }];
    direction = "RIGHT";
    score = 0;
    gameSpeed = 150;
    foot = getRandomFootPosition();
    gameRunning=true;
    scoreEl.textContent = 'Счет: 0';
    startButton.style.display = "none";
    gameLoop();
};
function getRandomFootPosition() {
    return {
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
    }
}
function gameOver() {
    gameRunning=false;
    let result=document.createElement("p");
    result.innerHTML=`<span style="color: red">Игра окончено! Ваш счет:${score}</span>`;
    scoreEl.prepend(result);
    startButton.style.display='inline';
}
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'purple';
    ctx.fillRect(foot.x, foot.y, gridSize, gridSize);
    ctx.fillStyle = 'black';
    ctx.strokeRect(foot.x, foot.y, gridSize, gridSize);
    snake.forEach(segment => {
        ctx.fillStyle = 'blue';
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
        ctx.fillStyle = 'black';
        ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
    });
    let head = { ...snake[0] };

    if (direction === "UP") {
        head.y -= gridSize;
    }
    if (direction === 'DOWN') {
        head.y += gridSize;
    }
    if (direction === "RIGHT") {
        head.x += gridSize
    }
    if (direction === 'LEFT') {
        head.x -= gridSize
    }
    if (head.x <0 || head.x>=canvas.width || head.y >canvas.height || head.y <0) {
        gameOver();
        return;
    }
for(let i=1; i<snake.length;i++){
    if (head.x===snake[i].x && head.y ===snake[i].y) {
        gameOver();
        return;
    }
}
    snake.unshift(head);
    if (head.x == foot.x && head.y == foot.y) {
        foot = getRandomFootPosition();
        score++;
        scoreEl.textContent=`Счет: ${score}`;
        if (gameSpeed >50) {
            gameSpeed-=5;
        }
    } else {
        snake.pop();
    }

    if (snake.length > 0) {
        setTimeout(gameLoop, gameSpeed);
    }
    console.log(snake);


}
function changeDirection(event) {
    const key = event.key;
    if (key === 'ArrowUp' && direction !== 'DOWN') {
        direction = 'UP';
        event.preventDefault(); // предотвращает прокрутку страницы
    } else if (key === 'ArrowDown' && direction !== 'UP') {
        direction = "DOWN";
        event.preventDefault();
    } else if (key === 'ArrowLeft' && direction !== 'RIGHT') {
        direction = "LEFT";
        event.preventDefault();
    } else if (key === 'ArrowRight' && direction !== 'LEFT') {
        direction = "RIGHT";
        event.preventDefault();
    }  
}
document.addEventListener('keydown', changeDirection);
startButton.addEventListener("click", startGame);



// ====================================
/* 
class Game {
    constructor(element, gameBoard, size) {
        this.element = element;
        this.width = gameBoard;
        this.height = gameBoard;
        this.gridSize = size;
        this.direction = "RIGHT";
        this.score = 0;
        this.gameSpeed = 200;
        this.gameRunning = false;
        this.foot = {};
        
        // Создаем canvas
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.element.append(this.canvas);
        
        // Получаем элементы
        this.scoreEl = document.getElementById("score");
        this.startButton = document.querySelector("#but");
        
        // Инициализируем змею
        this.snake = [{
            x: this.canvas.width / 2,
            y: this.canvas.height / 2
        }];
        
        // Привязываем обработчики
        this.startButton.addEventListener("click", () => {
            this.startGame();
        });
        
        document.addEventListener('keydown', (event) => {
            this.changeDirection(event);
        });
    }
    
    startGame() {
        // Очищаем старые сообщения
        const oldMessage = document.querySelector('#score p');
        if (oldMessage) {
            oldMessage.remove();
        }
        
        // Сбрасываем состояние
        this.snake = [{
            x: this.canvas.width / 2,
            y: this.canvas.height / 2
        }];
        this.direction = "RIGHT";
        this.score = 0;
        this.gameSpeed = 200;
        this.gameRunning = true;
        
        this.foot = this.getRandomFootPosition();
        this.scoreEl.textContent = 'Счет: 0';
        this.startButton.style.display = "none";
        
        this.gameLoop();
    }
    
    getRandomFootPosition() {
        let position;
        let isOnSnake;
        do {
            isOnSnake = false;
            position = {
                x: Math.floor(Math.random() * (this.canvas.width / this.gridSize)) * this.gridSize,
                y: Math.floor(Math.random() * (this.canvas.height / this.gridSize)) * this.gridSize
            };
            // Проверяем, не на змее ли еда
            for (let segment of this.snake) {
                if (segment.x === position.x && segment.y === position.y) {
                    isOnSnake = true;
                    break;
                }
            }
        } while (isOnSnake);
        return position;
    }
    
    gameOver() {
        this.gameRunning = false;
        
        // Удаляем старое сообщение
        const oldMessage = document.querySelector('#score p');
        if (oldMessage) {
            oldMessage.remove();
        }
        
        let result = document.createElement("p");
        result.innerHTML = `<span style="color: red">Игра окончена! Ваш счет: ${this.score}</span>`;
        this.scoreEl.prepend(result);
        this.startButton.style.display = 'inline';
    }
    
    gameLoop() {
        if (!this.gameRunning) return;
        
        // Очищаем канвас
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Рисуем еду
        this.ctx.fillStyle = 'purple';
        this.ctx.fillRect(this.foot.x, this.foot.y, this.gridSize, this.gridSize);
        this.ctx.fillStyle = 'black';
        this.ctx.strokeRect(this.foot.x, this.foot.y, this.gridSize, this.gridSize);
        
        // Рисуем змею
        this.snake.forEach(segment => {
            this.ctx.fillStyle = 'blue';
            this.ctx.fillRect(segment.x, segment.y, this.gridSize, this.gridSize);
            this.ctx.fillStyle = 'black';
            this.ctx.strokeRect(segment.x, segment.y, this.gridSize, this.gridSize);
        });
        
        // Вычисляем новую голову
        let head = { ...this.snake[0] };
        
        if (this.direction === "UP") {
            head.y -= this.gridSize;
        } else if (this.direction === 'DOWN') {
            head.y += this.gridSize;
        } else if (this.direction === "RIGHT") {
            head.x += this.gridSize;
        } else if (this.direction === 'LEFT') {
            head.x -= this.gridSize;
        }
        
        // Проверка столкновения со стенами
        if (head.x < 0 || head.x >= this.canvas.width || head.y < 0 || head.y >= this.canvas.height) {
            this.gameOver();
            return;
        }
        
        // Добавляем новую голову
        this.snake.unshift(head);
        
        // Проверка на еду
        if (head.x === this.foot.x && head.y === this.foot.y) {
            this.foot = this.getRandomFootPosition();
            this.score++;
            this.scoreEl.textContent = `Счет: ${this.score}`;
            
            // Ускоряем игру
            if (this.gameSpeed > 50) {
                this.gameSpeed -= 5;
            }
        } else {
            this.snake.pop();
        }
        
        // Проверка столкновения с собой
        for (let i = 1; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                this.gameOver();
                return;
            }
        }
        
        // Продолжаем цикл
        setTimeout(() => {
            this.gameLoop();
        }, this.gameSpeed);
    }
    
    changeDirection(event) {
        const key = event.key;
        if (key === 'ArrowUp' && this.direction !== 'DOWN') {
            this.direction = 'UP';
            event.preventDefault();
        } else if (key === 'ArrowDown' && this.direction !== 'UP') {
            this.direction = "DOWN";
            event.preventDefault();
        } else if (key === 'ArrowLeft' && this.direction !== 'RIGHT') {
            this.direction = "LEFT";
            event.preventDefault();
        } else if (key === 'ArrowRight' && this.direction !== 'LEFT') {
            this.direction = "RIGHT";
            event.preventDefault();
        }
    }
}

// Создаем экземпляр игры
const root = document.getElementById("root");
const game = new Game(root, 400, 20); */