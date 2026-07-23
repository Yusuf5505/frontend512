class Game {

    static points = {
        "1": 40,
        "2": 100,
        "3": 300,
        "4": 1200
    };

    score = 0;
    lines = 0;

    playfield = this.createPlayfield();

    activePiece = this.createPiece();
    nextPiece = this.createPiece();

    getLevel() {
        // return Math.ceil(this.lines * 0.1);
        return Math.floor(this.lines / 10) + 1;
    }

    getState() {
        const playfield = this.createPlayfield();
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;

        for (let y = 0; y < this.playfield.length; y++) {
            playfield[y] = [];

            for (let x = 0; x < this.playfield[y].length; x++) {
                playfield[y][x] = this.playfield[y][x];
            }
        }

        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x]) {
                    playfield[pieceY + y][pieceX + x] = blocks[y][x];
                }
            }
        }

        return {
            score: this.score,
            level: this.getLevel(),
            lines: this.lines,
            nextPiece: this.nextPiece,
            playfield
        }
    }

    moveIsLeft() {
        this.activePiece.x--;

        if (this.hasCollision()) {
            this.activePiece.x++;
        }
    }

    moveIsRight() {
        this.activePiece.x++;

        if (this.hasCollision()) {
            this.activePiece.x--;
        }
    }

    moveIsDown() {
        this.activePiece.y++;

        if (this.hasCollision()) {
            this.activePiece.y--;
            this.lockPiece();
            const clearLines = this.clearLines();
            this.updateScore(clearLines);
            this.updatePieces();
        }
    }

    updateScore(clearedLines) {
        if (clearedLines > 0) {
            this.lines += clearedLines;
            this.score += Game.points[clearedLines]; // * (this.getLevel());   40 + 100 * (1+1) 
            console.log(this.score, this.lines, this.getLevel());
        }
    }

    clearLines() {
        const rows = 20;
        const columns = 10;
        let lines = [];

        for (let y = rows - 1; y >= 0; y--) {
            let numberOfBlocks = 0;

            for (let x = 0; x < columns; x++) {
                if (this.playfield[y][x]) {
                    numberOfBlocks++;
                }
            }

            if (numberOfBlocks === 0) {
                break;
            } else if (numberOfBlocks < columns) {
                continue;
            } else {  // numberOfBlocks === columns
                lines.unshift(y);
            }
        }

        for (let index of lines) {
            this.playfield.splice(index, 1);
            this.playfield.unshift(new Array(columns).fill(0));
        }

        return lines.length;
    }

    hasCollision() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;

        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x] && ((this.playfield[pieceY + y] === undefined || this.playfield[pieceY + y][pieceX + x] === undefined || this.playfield[pieceY + y][pieceX + x]))) {
                    return true;
                }
            }
        }
        return false;
    }

    lockPiece() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;

        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x]) {
                    this.playfield[pieceY + y][pieceX + x] = blocks[y][x];
                }
            }
        }
    }

    createPlayfield() {
        const plyfield = [];  // []

        for (let y = 0; y < 20; y++) {
            plyfield[y] = [];  // [[], [], [], ...]

            for (let x = 0; x < 10; x++) {
                plyfield[y][x] = 0; // [[0, 0, 0, ...], [0], [0], ...]                
            }
        }
        return plyfield;
    }

    rotationPiece() {
        const blocks = this.activePiece.blocks;
        const length = blocks.length;

        const temp = [];
        for (let i = 0; i < length; i++) {
            temp[i] = new Array(length).fill(0); // [[0,0,0], [0,0,0], [0,0,0]]            
        }

        for (let y = 0; y < length; y++) {
            for (let x = 0; x < length; x++) {
                temp[x][y] = blocks[length - 1 - y][x];
            }
        }

        this.activePiece.blocks = temp;

        if (this.hasCollision()) {
            this.activePiece.blocks = blocks;
        }
    }

    updatePieces() {
        this.activePiece = this.nextPiece;
        this.nextPiece = this.createPiece();
    }

    createPiece() {
        const index = Math.floor(Math.random() * 7);
        const type = "IJLOSTZ"[index];
        const piece = {};

        switch (type) {
            case "I":
                piece.blocks = [
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ];
                break;
            case "J":
                piece.blocks = [
                    [0, 0, 0],
                    [2, 2, 2],
                    [2, 0, 0]
                ];
                break;
            case "L":
                piece.blocks = [
                    [0, 0, 0],
                    [3, 3, 3],
                    [0, 0, 3]
                ];
                break;

            case "O":
                piece.blocks = [
                    [0, 0, 0, 0],
                    [0, 4, 4, 0],
                    [0, 4, 4, 0],
                    [0, 0, 0, 0]
                    // [1,1],
                    // [1,1]
                ];
                break;
            case "S":
                piece.blocks = [
                    [0, 0, 0],
                    [0, 5, 5],
                    [5, 5, 0]
                ];
                break;
            case "T":
                piece.blocks = [
                    [0, 0, 0],
                    [6, 6, 6],
                    [0, 6, 0]
                ];
                break;
            case "Z":
                piece.blocks = [
                    [0, 0, 0],
                    [7, 7, 0],
                    [0, 7, 7]
                ];
                break;
            default:
                throw new Error("Неизвестный тип фигуры");
        }

        piece.x = Math.floor((10 - piece.blocks[0].length) / 2);

        piece.y = -1;

        return piece;
    }
}

class View {

    static colors = {
        "1": "cyan",
        "2": "blue",
        "3": "orange",
        "4": "yellow",
        "5": "green",
        "6": "purple",
        "7": "red"
    }

    constructor(element, width, height, rows, columns) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.dvScor=document.querySelector("#dc")
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');

        this.playfieldBorderWidth = 4;
        this.playfieldX = this.playfieldBorderWidth;
        this.playfieldY = this.playfieldBorderWidth;
        this.playfieldWidth = this.width * 2 / 3;
        this.playfieldHeight = this.height;
        this.playfieldInnerWidth = this.playfieldWidth - this.playfieldBorderWidth * 2;
        this.playfieldInnerHeight = this.playfieldHeight - this.playfieldBorderWidth * 2;

        this.blockWidth = this.playfieldInnerWidth / columns;
        this.blockHeight = this.playfieldInnerHeight / rows;
        
        this.panelX = this.playfieldWidth + 10;
        this.panelY = 0;
        this.panelWidth = this.width / 3;
        this.panelHeight = this.height;

        this.element.append(this.canvas);
    }
    eatScreen(){
        this.eats.forEach(()=>{
            Math.floor(Math.random *this.eats.length)
        })
    }
    clearScrean() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    render(state) {
        this.clearScrean();
        this.renderPlayfield(state);
        this.renderPanel(state);
    }

    renderPlayfield({ playfield }) {
        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y];

            for (let x = 0; x < line.length; x++) {
                const block = line[x];
                if (block) {
                    this.renderBlock(this.playfieldX + (x * this.blockWidth), this.playfieldY + (y * this.blockHeight), this.blockWidth, this.blockHeight, View.colors[block]);
                    // this.context.fillStyle = View.colors[block];
                    // this.context.strokeStyle = "black";
                    // this.context.lineWidth = 2;

                    // this.context.fillRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight);
                    // this.context.strokeRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight);
                }
            }
        }

        this.context.strokeStyle = "white";
        this.context.lineWidth = this.playfieldBorderWidth;
        this.context.strokeRect(0, 0, this.playfieldWidth, this.playfieldHeight);
    }

    renderBlock(x, y, width, height, color) {
        this.context.fillStyle = color;
        this.context.strokeStyle = "black";
        this.context.lineWidth = 2;

        this.context.fillRect(x, y, width, height);
        this.context.strokeRect(x, y, width, height);
    }

    renderPanel({ level, score, lines, nextPiece }) {
        this.context.fillStyle = "white";
        this.context.textBaseline = "top";
        this.context.textAlign = "start";
        this.context.font = "16px Verdana";

        this.context.fillText(`Score: ${score}`, this.panelX, this.panelY + 0);
        this.context.fillText(`Lines: ${lines}`, this.panelX, this.panelY + 24);
        this.context.fillText(`Level: ${level}`, this.panelX, this.panelY + 48);
        this.context.fillText(`Next:`, this.panelX, this.panelY + 96);

        for (let y = 0; y < nextPiece.blocks.length; y++) {
            for (let x = 0; x < nextPiece.blocks[y].length; x++) {
                const block = nextPiece.blocks[y][x];

                if (block) {
                    this.renderBlock(
                        this.panelX + (x * this.blockWidth * 0.5),
                        this.panelY + 100 + (y * this.blockHeight * 0.5),
                        this.blockWidth * 0.5,
                        this.blockHeight * 0.5,
                        View.colors[block]
                    );
                }
            }
        }
    }

    renderStartScreen() {
        this.context.fillStyle = "white";
        this.context.font = "18px Verdana";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText("Press ENTER to Start", this.width / 2, this.height / 2);
    }

    renderPauseScreen() {
        this.context.fillStyle = "rgba(0,0,0,0.75)";
        this.context.fillRect(0, 0, this.width, this.height);

        this.context.fillStyle = "white";
        this.context.font = "18px Verdana";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText("Press ENTER to Resume", this.width / 2, this.height / 2);
    }

    renderEndScreen({ score }) {
        this.clearScrean();

        this.context.fillStyle = "white";
        this.context.font = "18px Verdana";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";

        this.context.fillText("GAME OVER", this.width / 2, this.height / 2 - 48);
        this.context.fillText(`Score: ${score}`, this.width / 2, this.height / 2);
    }
}

const game = new Game();
const root = document.querySelector("#root");
const view = new View(root, 480, 640, 20, 10);
// view.renderPlayfield(game.playfield);
// console.log(game.playfield);

document.addEventListener("keydown", event => {
    switch (event.which) {  // keyCode
        case 13:
            view.render(game.getState());
        case 37:
            game.moveIsLeft();
            view.render(game.getState());
            break;
        case 38:
            game.rotationPiece();
            view.render(game.getState());
            break;
        case 39:
            game.moveIsRight();
            view.render(game.getState());
            break;
        case 40:
            game.moveIsDown();
            view.render(game.getState());
            break;
    }

    // switch (event.key) {  // keyCode
    //     case "ArrowLeft":
    //         game.moveIsLeft();
    //         view.render(game.getState());
    //         break;
    //     case "ArrowUp":
    //         game.rotationPiece();
    //         view.render(game.getState());
    //         break;
    //     case "ArrowRight":
    //         game.moveIsRight();
    //         view.render(game.getState());
    //         break;
    //     case "ArrowDown":
    //         game.moveIsDown();
    //         view.render(game.getState());
    //         break;
    // }


    //  switch (event.code) {  // keyCode
    //     case "ArrowLeft":
    //         game.moveIsLeft();
    //         view.render(game.getState());
    //         break;
    //     case "ArrowUp":
    //         game.rotationPiece();
    //         view.render(game.getState());
    //         break;
    //     case "ArrowRight":
    //         game.moveIsRight();
    //         view.render(game.getState());
    //         break;
    //     case "ArrowDown":
    //         game.moveIsDown();
    //         view.render(game.getState());
    //         break;
    // }
})

view.render(game.getState());
// view.renderEndScreen(game.getState());