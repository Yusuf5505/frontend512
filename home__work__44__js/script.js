let textarea=document.getElementById("area");
const local=localStorage.getItem("area");
 textarea.value=local;
document.addEventListener("input",function () {
    localStorage.setItem("area",textarea.value);

})

