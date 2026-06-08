function factorial(n) {
    
    if (n <= 0) {
        return 1
    }
    
    return n * factorial(n - 1)
}
factorial(5)
console.log(factorial(5));
let a =+prompt("Введите число")
document.writeln(factorial(a))
