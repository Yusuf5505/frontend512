document.writeln("<div></div>");
let text = document.querySelector("div");
text.id = "text";
text = document.getElementById("text");

text.innerHTML = `Термоста́т — прибор для поддержания постоянной температуры. Поддержание температуры
обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового
перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как
правило, теплоизолируют. Но не всегда. Широко известны автомобильные моторы, где летом нет
никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная
температура. Другим примером термостата, широко используемого в быту, является холодильник.`

text.style.background = "yellow";
text.style.width = "256px";
text.style.height = "256px";
text.style.overflow = "scroll";
text.style.outline = "1px dashed red";
text.className = "resetFont"
console.log(text);
let c=document.getElementsByClassName("resetFont")[0];
c.style.fontSize = "20pt";
c.style.fontWeight = ":400";
c.style.textDecoration = "underline";


