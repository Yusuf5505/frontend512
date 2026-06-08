
let but = document.querySelector("#cl");
but.addEventListener("click", myMove);
let flag;
function myMove() {
    but.style.display = "none"
    let elem = document.getElementById("animate");
    let pos = 0;
    let id, id2;

    if (!flag) {
        id = setInterval(frame, 10);
    } else {
        id2 = setInterval(Reverse, 8);
        pos=350;
    }
    flag = !flag
    function frame() {
        if (pos == 350) {
            clearInterval(id)
            but.style.display = "block"
        } else {
            pos++
            elem.style.top = pos + "px";
            elem.style.left = pos + "px"
        }

    }
    function Reverse() {
        if (pos==0) {
            clearInterval(id2);
        }else{
            pos--;
             elem.style.top = pos + "px";
            elem.style.left = pos + "px"
        }
    }
}