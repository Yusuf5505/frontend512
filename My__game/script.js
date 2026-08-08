let but = document.querySelector("#but");
but.addEventListener("click", function () {
    but.style.display = 'none';
    let dv = document.querySelector(".dv");
    dv.style.display = 'none';
    
    class Game {
        constructor(width, height) {
            // 1. Базовые настройки
            this.width = width;
            this.height = height;
            this.gameOver = false;
            this.cellSize = 32;
            this.divGo = document.getElementById("go");

            this.rows = this.height / this.cellSize;
            this.columns = this.width / this.cellSize;
            this.dvScor = document.querySelector("#dc");
            this.dvScor.style.display = 'block';
            this.skore = 0;
            this.level = document.querySelector("#lev");
            this.level.style.display = 'block';

            // НАЧАЛЬНАЯ СКОРОСТЬ (интервал в мс)
            this.baseSpeed = 200;
            this.currentSpeed = 200;

            // 2. Массив еды (разные виды)
            this.eats = [
                { color: "#ff4444", points: 5, size: 1.2 },   // красная
                { color: "#ffcc00", points: 10, size: 1 },    // золотая
                { color: "#9b59b6", points: 15, size: 0.8 },  // фиолетовая
                { color: "#ff6600", points: 8, size: 1.3 },   // оранжевая
                { color: "#2ecc71", points: 12, size: 0.9 },  // зеленая
            ]

            // 3. Создаем canvas
            this.canvas = document.createElement("canvas");
            this.ctx = this.canvas.getContext("2d");
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            document.body.append(this.canvas);
            this.canvas.style.display = 'block';

            // 4. Направления
            this.direction = 'up';
            this.nextDirection = 'up';

            // 5. Змейка
            this.shake = [
                { x: 5, y: 5 },
                { x: 5, y: 6 },
            ]

            // 6. Игровое поле
            this.playfield = this.createPlaefield();

            // 7. Еда
            this.food = null;
            this.gameLoop = null;
            this.generateFood();

            // 8. Управление и запуск
            this.setupControls();
            this.startGame();

            // 9. Создаем кнопку перезапуска (скрыта)
            this.createRestartButton();

            // 10. Фон
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.width, this.height);
        }

        // НОВЫЙ МЕТОД: создаем кнопку перезапуска
        createRestartButton() {
            this.restartBtn = document.createElement("button");
            this.restartBtn.textContent = "Играть снова";
            this.restartBtn.style.display = 'none';
            this.restartBtn.style.position = 'absolute';
            this.restartBtn.style.top = '50%';
            this.restartBtn.style.left = '50%';
            this.restartBtn.style.transform = 'translate(-50%, -50%)';
            this.restartBtn.style.padding = '20px 40px';
            this.restartBtn.style.fontSize = '24px';
            this.restartBtn.style.backgroundColor = '#4CAF50';
            this.restartBtn.style.color = 'white';
            this.restartBtn.style.border = 'none';
            this.restartBtn.style.borderRadius = '10px';
            this.restartBtn.style.cursor = 'pointer';
            this.restartBtn.style.zIndex = '1000';
            document.body.appendChild(this.restartBtn);

            // Обработчик клика по кнопке
            this.restartBtn.addEventListener("click", () => {
                this.restartGame();
            });
        }

        // НОВЫЙ МЕТОД: перезапуск игры
        restartGame() {
            // 1. Останавливаем старый игровой цикл
            if (this.gameLoop) {
                clearInterval(this.gameLoop);
                this.gameLoop = null;
            }

            // 2. Сбрасываем все параметры
            this.gameOver = false;
            this.skore = 0;
            this.currentSpeed = this.baseSpeed;
            this.direction = 'up';
            this.nextDirection = 'up';
            
            // 3. Сбрасываем змейку
            this.shake = [
                { x: 5, y: 5 },
                { x: 5, y: 6 },
            ];

            // 4. Очищаем игровое поле
            this.playfield = this.createPlaefield();

            // 5. Удаляем старую еду и создаем новую
            this.food = null;
            this.generateFood();

            // 6. Обновляем счет и уровень
            this.dvScor.textContent = `Score: 0`;
            this.level.textContent = `Уровень 1`;

            // 7. Прячем сообщение Game Over и кнопку
            this.divGo.style.display = 'none';
            this.restartBtn.style.display = 'none';

            // 8. Запускаем игру заново
            this.startGame();
        }

        generateFood() {
            let emptyCells = [];
            for (let y = 0; y < this.playfield.length; y++) {
                for (let x = 0; x < this.playfield[y].length; x++) {
                    if (this.playfield[y][x] === 0) {
                        emptyCells.push({ x: x, y: y });
                    }
                }
            }

            if (emptyCells.length > 0) {
                const randomIndex = Math.floor(Math.random() * emptyCells.length);
                const cell = emptyCells[randomIndex];
                const foodType = Math.floor(Math.random() * this.eats.length);
                this.food = {
                    x: cell.x,
                    y: cell.y,
                    type: foodType
                };
            }
        }

        createPlaefield() {
            const plafild = [];
            for (let y = 0; y < 20; y++) {
                plafild[y] = [];
                for (let x = 0; x < 10; x++) {
                    plafild[y][x] = 0;
                }
            }
            return plafild;
        }

        setupControls() {
            // Управление стрелками
            document.addEventListener("keydown", function (event) {
                switch (event.which) {
                    case 37:
                        if (this.direction !== 'right') {
                            this.nextDirection = 'left';
                        }
                        event.preventDefault();
                        break;
                    case 38:
                        if (this.direction !== 'down') {
                            this.nextDirection = 'up';
                        }
                        event.preventDefault();
                        break;
                    case 39:
                        if (this.direction !== 'left') {
                            this.nextDirection = 'right';
                        }
                        event.preventDefault();
                        break;
                    case 40:
                        if (this.direction !== 'up') {
                            this.nextDirection = 'down';
                        }
                        event.preventDefault();
                        break;
                    // ★ НОВОЕ: Перезапуск по Enter ★
                    case 13:
                        if (this.gameOver) {
                            this.restartGame();
                            event.preventDefault();
                        }
                        break;
                }
            }.bind(this));
        }

        updateSpeed() {
            let newSpeed = this.baseSpeed;

            if (this.skore >= 100 && this.skore < 300) {
                newSpeed = 150;
                this.level.textContent = `Уровень 2`;
            } 
            else if (this.skore >= 300 && this.skore < 500) {
                newSpeed = 100;
                this.level.textContent = `Уровень 3`;
            } 
            else if (this.skore >= 500 && this.skore < 700) {
                newSpeed = 70;
                this.level.textContent = `Уровень 4`;
            }
            else if (this.skore >= 700) {
                newSpeed = 50;
                this.level.textContent = `Уровень 5 (MAX)`;
            }

            if (newSpeed !== this.currentSpeed) {
                this.currentSpeed = newSpeed;
                this.restartGameLoop();
            }
        }

        restartGameLoop() {
            if (this.gameLoop) {
                clearInterval(this.gameLoop);
                this.gameLoop = setInterval(() => {
                    this.update();
                    this.draw();
                }, this.currentSpeed);
            }
        }

        update() {
            this.direction = this.nextDirection;

            const head = this.shake[0];
            const newHead = { x: head.x, y: head.y };
            
            // Проверка столкновения с собой
            for (let i = 1; i < this.shake.length; i++) {
                if (newHead.x === this.shake[i].x && newHead.y === this.shake[i].y) {
                    this.gameOver = true;
                    this.divGo.style.display = 'block';
                    this.restartBtn.style.display = 'block'; // ★ ПОКАЗЫВАЕМ КНОПКУ ★
                    clearInterval(this.gameLoop);
                    return;
                }
            }

            switch (this.direction) {
                case 'up': newHead.y = newHead.y - 1; break;
                case 'down': newHead.y = newHead.y + 1; break;
                case 'left': newHead.x = newHead.x - 1; break;
                case 'right': newHead.x = newHead.x + 1; break;
            }

            // Проверка стен
            if (newHead.x < 0 || newHead.x >= this.columns ||
                newHead.y < 0 || newHead.y >= this.rows) {
                this.gameOver = true;
                this.divGo.style.display = 'block';
                this.restartBtn.style.display = 'block'; // ★ ПОКАЗЫВАЕМ КНОПКУ ★
                clearInterval(this.gameLoop);
                return;
            }

            this.shake.unshift(newHead);

            // Проверка еды
            if (this.food && newHead.x === this.food.x && newHead.y === this.food.y) {
                const foodType = this.eats[this.food.type];
                this.skore += foodType.points;
                this.dvScor.textContent = `Score: ${this.skore}`;
                this.updateSpeed();
                this.food = null;
                this.generateFood();
            } else {
                this.shake.pop();
            }
        }

        startGame() {
            this.gameLoop = setInterval(() => {
                this.update();
                this.draw();
            }, this.currentSpeed);
        }

        draw() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.width, this.height);

            for (let y = 0; y < this.playfield.length; y++) {
                for (let x = 0; x < this.playfield[y].length; x++) {
                    this.playfield[y][x] = 0;
                }
            }

            this.shake.forEach(item => {
                this.playfield[item.y][item.x] = 1;
            });

            if (this.food) {
                const foodType = this.eats[this.food.type];
                const size = foodType.size || 1;
                const blockSize = this.cellSize * size;
                const offsetX = (this.cellSize - blockSize) / 2;
                const offsetY = (this.cellSize - blockSize) / 2;

                this.ctx.fillStyle = foodType.color;
                this.ctx.fillRect(
                    this.food.x * this.cellSize + offsetX,
                    this.food.y * this.cellSize + offsetY,
                    blockSize,
                    blockSize
                );

                this.ctx.strokeStyle = 'white';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(
                    this.food.x * this.cellSize + offsetX,
                    this.food.y * this.cellSize + offsetY,
                    blockSize,
                    blockSize
                );

                this.ctx.fillStyle = 'white';
                this.ctx.font = '10px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(
                    '+' + foodType.points,
                    this.food.x * this.cellSize + this.cellSize / 2,
                    this.food.y * this.cellSize + this.cellSize / 2
                );
            }

            for (let y = 0; y < this.playfield.length; y++) {
                for (let x = 0; x < this.playfield[y].length; x++) {
                    if (this.playfield[y][x] === 1) {
                        const isHead = (y === this.shake[0].y && x === this.shake[0].x);
                        this.ctx.fillStyle = isHead ? '#00ff00' : '#008800';
                        this.ctx.fillRect(
                            x * this.cellSize,
                            y * this.cellSize,
                            this.cellSize - 1,
                            this.cellSize - 1
                        );
                    }
                }
            }

            this.ctx.fillStyle = 'white';
            this.ctx.font = '16px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText('Score: ' + this.skore, 10, 10);
        }
    }

    const game = new Game(480, 640);
    game.draw();
})