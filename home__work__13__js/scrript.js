
function number(params) {
    if (params >= 1 && params <= 99) {

        if (params == 1 || params == 21 || params == 31 || params == 41 || params == 51 || params == 61 || params == 71 || params == 81 || params == 91) {
            return params + " копейка"
        } else if (params > 1 && params < 5) {
            return params + " копейки"
        } else {
            return params + " копеек"
        }
    }else{
        return "Такого числа диапазон нет"
    }
}
function names(a, callback) {
    
    return callback(a)

}
document.writeln(names(+prompt(), number) + "<br>");
document.writeln(names(4, number)+ "<br>");
document.writeln(names(29, number) +"<br>");
document.writeln(names(100, number) + "<br>");
document.writeln(names(1, number) + "<br>");