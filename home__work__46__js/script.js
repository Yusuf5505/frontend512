let arr = ["яблоко", 42, "машина", 7, "дом", 99, "кот", 15, "солнце", 3];
 
const type= Map.groupBy(arr,i=>typeof i ==="number"?"number":"string")
console.log(type);
