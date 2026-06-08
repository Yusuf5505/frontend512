
let start = 10
let end = 30;
let i = start
let sum = 1;


while (i <= end) {
    if (i % 2) {
       
        sum=sum*i
    }
    i++
} 

alert(`Сумма всех нечетных чисел равна:  ${sum}`) 
document.writeln( "Сумма всех нечетных чисел равна: "+sum)