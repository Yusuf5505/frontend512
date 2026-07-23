
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
        this.dvScor=document.querySelector("#dc");
        this.skore=0;
        // 2. Массив еды
        this.eats = [
            { color: "red", points: 5, size: 2 },
            { color: "green", points: 1, size: 1.5 },
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

        // 6. Игровое поле (СОЗДАЕМ)
        this.playfield = this.createPlaefield();

        // 7. ЕДА (ГЕНЕРИРУЕМ ПОСЛЕ СОЗДАНИЯ ПОЛЯ)
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
            this.food = { x: cell.x, y: cell.y }; // ← сохраняем еду
        }
    }
    // Создает игровое поле - матрицу 20 строк на 10 столбцов, заполненную нулями
    createPlaefield() {
        const plafild = [];
        for (let y = 0; y < 20; y++) {
            plafild[y] = [];
            for (let x = 0; x < 10; x++) {
                plafild[y][x] = 0; // 0 - пустая клетка, 1 - занята змейкой
            }
        }
        return plafild;
    }

    // Настройка управления с клавиатуры
    setupControls() {
        document.addEventListener("keydown", function (event) {
            switch (event.which) {
                case 37: // Стрелка влево
                    // Нельзя развернуться на 180 градусов
                    if (this.direction !== 'right') {
                        this.nextDirection = 'left';
                    }
                    event.preventDefault(); // Отключаем скролл страницы
                    break;
                case 38: // Стрелка вверх
                    if (this.direction !== 'down') {
                        this.nextDirection = 'up';
                    }
                    event.preventDefault();
                    break;
                case 39: // Стрелка вправо
                    if (this.direction !== 'left') {
                        this.nextDirection = 'right';
                    }
                    event.preventDefault();
                    break;
                case 40: // Стрелка вниз
                    if (this.direction !== 'up') {
                        this.nextDirection = 'down';
                    }
                    event.preventDefault();
                    break;
            }
        }.bind(this)); // bind(this) - чтобы this внутри функции указывал на объект Game
    }
    eatScreen() {
        this.eats.forEach(() => {
            Math.floor(Math.random * this.eats.length)
        })
    }

update() {
    this.direction = this.nextDirection;

    const head = this.shake[0];
    const newHead = { x: head.x, y: head.y };

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

    // ТОЛЬКО ОДИН РАЗ добавляем голову
    this.shake.unshift(newHead);

    // Проверка еды
    if (this.food && newHead.x === this.food.x && newHead.y === this.food.y) {
        // Съели еду - НЕ удаляем хвост (змейка растет)
        this.food = null;
        this.skore++;
        this.dvScor.textContent = `Score: ${this.skore}`;
        this.generateFood();
        // ⚠️ НЕТ this.shake.pop() - хвост остается
    } else {
        // Не съели - удаляем хвост
        this.shake.pop();
    }
    
   
}

    // Запуск игрового цикла
    startGame() {
        setInterval(() => {
            this.update(); // Обновляем позицию змейки
            this.draw();   // Перерисовываем поле
        }, 200); // Каждые 200 миллисекунд (5 раз в секунду)
    }

    // Отрисовка игры на canvas
    draw() {
        // Очищаем canvas (удаляем все нарисованное)
        this.ctx.clearRect(0, 0, this.width, this.height);
        // Заливаем фон черным цветом
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Очищаем playfield (заполняем нулями)
        for (let y = 0; y < this.playfield.length; y++) {
            for (let x = 0; x < this.playfield[y].length; x++) {
                this.playfield[y][x] = 0;
            }
        }

        // Заполняем playfield единицами в местах, где находится змейка
        this.shake.forEach(item => {
            this.playfield[item.y][item.x] = 1;
        })
        // Рисуем еду
        if (this.food) {
            this.ctx.fillStyle = 'red';
            this.ctx.fillRect(
                this.food.x * this.cellSize,
                this.food.y * this.cellSize,
                this.cellSize,
                this.cellSize
            );
        }

        // Рисуем зеленые квадраты на всех клетках, где стоит 1
        for (let y = 0; y < this.playfield.length; y++) {
            for (let x = 0; x < this.playfield[y].length; x++) {
                if (this.playfield[y][x] === 1) {
                    this.ctx.fillStyle = 'green';
                    this.ctx.fillRect(
                        x * this.cellSize, // x координата в пикселях
                        y * this.cellSize, // y координата в пикселях
                        this.cellSize,     // ширина квадрата
                        this.cellSize      // высота квадрата
                    );
                }
            }
        }
    }
}

// Создаем экземпляр игры с размером поля 480x640 пикселей
const game = new Game(480, 640);
// Рисуем начальное состояние (хотя startGame уже все рисует)
game.draw();
