function mas(arr) {
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if (max<arr[i]) {
            max=arr[i]
        }
    }
    return "Самое большое число из массива является: "+max 
}
document.writeln(mas([5,6,7,9,6,64,5,3323,324])+"<br>")

/* 
let maxNumber = function (mas) {
    let max = 0;
    for (let i = 0; i < mas.length; i++) {
        if (max < mas[i]) {
            max = mas[i];
        }

    }
    return "Самым большим числом из массива является: "+max
}

document.writeln(maxNumber([11, 55, 777, 555, 4446, 7, 7, 47, 8]))
 */
/* let maxNumber = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max
}

document.writeln(maxNumber([22, 55, 7, 78, 55, 7, 779, 99])+"<br>") */
/* 
document.writeln(
    (function(arr){
          let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max
    })([1,3,4,56,7,8,97,44,6667,888,99])
) */