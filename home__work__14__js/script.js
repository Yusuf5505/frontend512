let str = "12345622245632";
let a =prompt("введите цифры")
function number(num) {
    let nl;
    let count = 0;
    for (let n of num) {
        nl=n
        console.log(nl);
    }
    for(let n1 of num){
        if (nl==n1) {
            count++
        }
    }
    return "последнее число: "+nl+ " встречается " +count+" раз"
}
document.writeln(number(str)+"<br>")
document.writeln(number(a))
