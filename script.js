let open = document.querySelector("#snow");
open.addEventListener("click", function () {
    win = window.open(
        "str.html",
        "new.window",
        "width=420,height=220,left=200,top=200,resizable=yes"
    )
    console.log(win);

})

let csl = document.querySelector("#close");
csl.addEventListener("click", function () {
    if (typeof win == 'object') {
        win.close()
    }
})