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
                { x: 5, y: 7 }
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

            // 9. Фон
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.width, this.height);
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

                // ← ВЫБИРАЕМ СЛУЧАЙНЫЙ ТИП ЕДЫ
                const foodType = Math.floor(Math.random() * this.eats.length);

                // ← СОХРАНЯЕМ КООРДИНАТЫ И ТИП
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
                }
            }.bind(this));
        }

        update() {
            this.direction = this.nextDirection;

            const head = this.shake[0];
            const newHead = { x: head.x, y: head.y };
            for (let i = 1; i < this.shake.length; i++) {
                if (newHead.x === this.shake[i].x && newHead.y === this.shake[i].y) {
                    // Голова наехала на тело → GAME OVER!
                    this.gameOver = true;
                    this.divGo.style.display = 'block';
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
                clearInterval(this.gameLoop);
                return;
            }

            // Добавляем голову
            this.shake.unshift(newHead);

            // Проверка еды
            if (this.food && newHead.x === this.food.x && newHead.y === this.food.y) {
                // ← БЕРЕМ ОЧКИ ИЗ МАССИВА
                const foodType = this.eats[this.food.type];
                this.skore += foodType.points;
                this.dvScor.textContent = `Score: ${this.skore}`;
                if (this.skore >= 100 && this.skore < 300) {
                    this.level.textContent = `Уровень 2`;
                } else if (this.skore >= 300 && this.skore < 500) {
                    this.level.textContent = `Уровень 3`;
                } else if (this.skore >= 500) {
                    this.level.textContent = `Уровень 4`;
                }
                this.food = null;
                this.generateFood();
                // НЕ удаляем хвост - змейка растет
            } else {
                this.shake.pop();
            }
        }

        startGame() {
            this.gameLoop = setInterval(() => {
                this.update();
                this.draw();
            }, 200);
        }

        draw() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.width, this.height);

            // Очищаем playfield
            for (let y = 0; y < this.playfield.length; y++) {
                for (let x = 0; x < this.playfield[y].length; x++) {
                    this.playfield[y][x] = 0;
                }
            }

            // Заполняем playfield змейкой
            this.shake.forEach(item => {
                this.playfield[item.y][item.x] = 1;
            });

            // ← РИСУЕМ ЕДУ С УЧЕТОМ ТИПА
            if (this.food) {
                const foodType = this.eats[this.food.type];
                const size = foodType.size || 1;
                const blockSize = this.cellSize * size;
                const offsetX = (this.cellSize - blockSize) / 2;
                const offsetY = (this.cellSize - blockSize) / 2;

                // Цвет из массива
                this.ctx.fillStyle = foodType.color;
                this.ctx.fillRect(
                    this.food.x * this.cellSize + offsetX,
                    this.food.y * this.cellSize + offsetY,
                    blockSize,
                    blockSize
                );

                // Белая рамка
                this.ctx.strokeStyle = 'white';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(
                    this.food.x * this.cellSize + offsetX,
                    this.food.y * this.cellSize + offsetY,
                    blockSize,
                    blockSize
                );

                // Показываем очки на еде
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

            // Рисуем змейку
            for (let y = 0; y < this.playfield.length; y++) {
                for (let x = 0; x < this.playfield[y].length; x++) {
                    if (this.playfield[y][x] === 1) {
                        // Голова ярче
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

            // Отображаем счет на canvas
            this.ctx.fillStyle = 'white';
            this.ctx.font = '16px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText('Score: ' + this.skore, 10, 10);
        }
    }

    const game = new Game(480, 640);
    game.draw();
}

)
