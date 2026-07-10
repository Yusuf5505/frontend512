class Game {
    playFild = [
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}




class Viev {
    constructor(elem, width, height, rows, columm) {
        this.elem = elem;
        this.width = width;
        this.height = height;
        this.rows = rows;
        this.columm = columm;

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');
        this.blockWidth=width /columm;
        this.blockHeight=height / rows
        this.elem.append(this.canvas)
    }

    renderPlayField(playFild){
        for(let y=0;y<playFild.length;y++){
            const line= playFild[y];
            for(let x=0; x< line.length;x++){
                const block=line[x]
                if (block) {
                   this.context.fillStyle='red';
                   this.context.strokeStyle='black'
                   this.context.lineWidth=2;

                   this.context.fillRect(x*this.blockWidth,y*this.blockHeight,this.blockWidth,this.blockHeight)
                   this.context.strokeRect(x*this.blockWidth,y*this.blockHeight,this.blockWidth,this.blockHeight)
                }
                
            }
            
        }
    }
}

const root = document.querySelector('#root');
const viev = new Viev(root, 320, 640, 20, 10);
const game=new Game()
viev.renderPlayField(game.playFild);