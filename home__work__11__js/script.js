/* function comparasion(a, b) {
    if (a == b) {
        return "Число " + a + " и число " + b + " являются равными"
    } else if (a > b) {
        return "Число " + a + " больше чем число " + b
    } else {
        return "Число " + b + " больше чем число " + a
    }
}

document.writeln(comparasion(9, 5) + "<br>")

document.writeln(comparasion(5, 5) + "<br>")
document.writeln(comparasion(5, 8) + "<br>")
 */
/* 
let max=function(a,b){
     if (a == b) {
        return "Число " + a + " и число " + b + " являются равными"
    } else if (a > b) {
        return "Число " + a + " больше чем число " + b
    } else {
        return "Число " + b + " больше чем число " + a
    }
}
document.writeln(max(5,5)+"<br>")
document.writeln(max(5,9)+"<br>")
document.writeln(max(5,3)+"<br>") */

let bigSum = (a, b) => {
    if (a == b) {
        return "Число " + a + " и число " + b + " являются равными"
    } else if (a > b) {
        return "Число " + a + " больше чем число " + b
    } else {
        return "Число " + b + " больше чем число " + a
    }
}


document.writeln(bigSum(5,5)+"<br>")
document.writeln(bigSum(5,9)+"<br>")
document.writeln(bigSum(5,3)+"<br>")
/* 
document.writeln(
(function(a,b){
     if (a == b) {
        return "Число " + a + " и число " + b + " являются равными"
    } else if (a > b) {
        return "Число " + a + " больше чем число " + b
    } else {
        return "Число " + b + " больше чем число " + a
    }
})(5,9)); */