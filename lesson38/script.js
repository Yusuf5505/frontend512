const canvas = document.getElementById("test");
const c = canvas.getContext("2d");
// c.fillStyle='black'
// c.fillRect(50,30,150,140);
// c.clearRect(70,50,110,100);
//  c.lineWidth=4.5;
//   c.strokeStyle='black';

// c.strokeRect(80,60,90,80);
// c.fillStyle='#f60';
// c.fillRect(40,50,100,90);
// c.setLineDash([15,5])
// c.lineWidth=4.5;
// c.strokeStyle='#369';
// c.strokeRect(5,5,140,140);
// c.clearRect(30,30,50,50);
//  c.beginPath();
//  c.rect(30,180,100,90);
//  c.closePath();
//  c.fillStyle='yellow';
//  c.strokeStyle='brown';
//  c.fill();
//  c.stroke();
//  c.clip()
//  c.beginPath();
//  c.rect(10,200,140,90);
//   c.closePath();
//   c.stroke();


// c.beginPath();
/* 
c.moveTo(80,50);
c.lineTo(100,80);
c.lineTo(100,30)
// c.closePath()
c.stroke();
c.fill() */

// c.beginPath();
// c.arc(200,80,40,0,Math.PI *2);
// c.stroke();
// c.closePath();
/* 
c.beginPath();
c.moveTo(300,80);
c.arc(300,80,40,0,Math.PI /2,true);
c.closePath();
c.stroke()

c.beginPath();
c.moveTo(310,90);
c.arc(310,90,40,0,Math.PI /2,false);
c.closePath();
c.stroke(); */

/* let pic= new Image();
pic.src="1.jpg";
pic.addEventListener("load",function(){
    c.drawImage(pic,100,50);

    c.drawImage(pic,160,0,300,130)
}) *//* 
let gr= c.createLinearGradient(320,0,470,0);
gr.addColorStop(0,'red');
gr.addColorStop(0.4,'magenta');
gr.addColorStop(1,"yellow");


c.fillStyle=gr;
c.fillRect(320,170,150,60);

let st= c.createLinearGradient(320,0,470,0);

st.addColorStop(0,"yellow")
st.addColorStop(1,"orange");
c.strokeStyle=st;
c.lineWidth=10;

c.strokeRect(320,170,150,60) */
/* let grd=c.createRadialGradient(400,270,5,400,270,60);
grd.addColorStop(0,"red");
grd.addColorStop(1,'yellow');
let gr=c.createRadialGradient(60,60,15,75,75,75);
gr.addColorStop(0,"#0f0");
gr.addColorStop(1,'#0DA805');

c.fillStyle=gr;
c.shadowOffsetX=10;
c.shadowOffsetY=10;
c.shadowBlur=10;
c.shadowColor="#0F0"
c.beginPath();
c.arc(75,75,75,0,Math.PI *2);
c.closePath();
c.fill();
 */
/* 
c.fillStyle='brown';
c.fillRect(50,50,100,100)
c.fillStyle='orange'
c.globalAlpha=0.5;
c.translate(50,25);
c.rotate(.52)
c.scale(1.5,1.5)
c.fillRect(50,50,100,100);
 */

const w = canvas.width;
const h = canvas.height;

const mouse = { x: 0, y: 0 };
let draw = false;

// Нажатие мыши
canvas.addEventListener("mousedown", function (event) {
    mouse.x = event.pageX - this.offsetLeft;
    mouse.y = event.pageY - this.offsetTop;
    draw = true;
    c.beginPath();
    c.moveTo(mouse.x, mouse.y);
});

// Перемещение мыши
canvas.addEventListener("mousemove", function (event) {
    if (draw == true) {
        mouse.x = event.pageX - this.offsetLeft;
        mouse.y = event.pageY - this.offsetTop;
        c.lineTo(mouse.x, mouse.y);
        c.stroke();
    }
});

// Отпускаем мышь - ИСПРАВЛЕНО: mouseup вместо mousemove
canvas.addEventListener("mouseup", function (event) {
    mouse.x = event.pageX - this.offsetLeft;
    mouse.y = event.pageY - this.offsetTop;
    c.lineTo(mouse.x, mouse.y);
    c.stroke();
    c.closePath();
    draw = false;
});