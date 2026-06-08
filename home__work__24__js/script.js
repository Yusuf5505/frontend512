let but = document.querySelector("button");
alert("Здраствуйте на нашейм сайте вы узнаете сколько обойдется покраска стены");
alert("Цена начинается от 300 рублей");
but.addEventListener("click", function () {
    let in1 =document.querySelector("#in1");
    let height= Number(in1.value);
    let in2=document.querySelector("#in2");
    let span = document.querySelector("span");
    if (in1.value=='') {
        alert("Вы не заполнили строку с высотой");
         span.innerHTML="Ошибка";
        return
    }
    if (in2.value=='') {
        alert("Вы не заполнили строку с шириной");
         span.innerHTML="Ошибка";
        return;
    }
    let width=Number(in2.value);
    let sum= width *height;
    let m=300;
    let res= width *height*m
    
    
    span.innerHTML=`Стоимость обойдется в : ${res} рублей`
    
    
    
    
    
    
    
})
