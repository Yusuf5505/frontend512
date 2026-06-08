
let but = document.querySelector("#btn");
but.addEventListener("click", change);

function change() {
    // Считываем значения ТОЛЬКО в момент клика
    let put1 = document.querySelector("#put1").value;
    let put2 = document.querySelector("#put2").value;
    
    let a = document.getElementById("im" + put1);
    let b = document.getElementById("im" + put2);
    
    let temp = a.src;
    a.src = b.src;
    b.src = temp;
}




