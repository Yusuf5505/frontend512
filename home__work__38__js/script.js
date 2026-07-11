const work =document.querySelector("#work");
const c = work.getContext("2d");

c.beginPath();
c.fillStyle='yellow'
c.arc(950,300,170,0,Math.PI *2);
c.fill()
c.stroke()

c.beginPath();
c.fillStyle='black';
c.arc(910,250,20,0,Math.PI *2);
c.fill()
c.stroke();

c.beginPath();
c.fillStyle='black';
c.arc(980,250,20,0,Math.PI *2);
c.fill();
c.stroke();

c.beginPath();

c.arc(950, 330, 80, 0, Math.PI);  //

c.stroke();


