let but=document.querySelector("button");


but.addEventListener("click",function(){
    let input=document.querySelectorAll("input");

   for(let i=0;i<input.length;i++){
    if (input[i].checked) {
        alert("Вы выбрали: "+input[i].value)
        return
    }
   }
    
    
})