let numbers = [];
let max = 0;

for (let i = 0; i < 10; i++) {
    let n = +prompt("Введите числа");
    numbers.push(n)
    if (max < n) {
        max = n
    }
}

for(let i=0;i<numbers.length;i++){
    if (max==numbers[i]) {
        numbers.splice(i,1)
        console.log(numbers);
        numbers.splice(0, 0, max)
        document.writeln( numbers)
        
    }
}
