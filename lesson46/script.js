/* let obj={
    name: "Yusuf",
    age:19
}
let map=new Map(Object.entries(obj));
document.writeln(map.get("name"));
console.log(map);

 let obj1 =Object.fromEntries(map);
console.log(obj); */
/* 
const myObj={};
let start1=new Date().getTime();

for(let i=0;i<1000000;i++){
    myObj[i]=i;
    delete myObj[i];
}

console.log(new Date().getTime()-start1);

const myMap=new Map();
let start2= new Date().getTime()


for(let i=0;i<1000000;i++){
  myMap.set(i,i);
  myMap.delete(i);
}

console.log(new Date().getTime()-start2);
 */

// const set=new Set([1,2,3,4,5,6,7,8,9]);
// set.forEach(value => document.writeln(value+"<br>"));
// let arr=[...set];
// console.log(arr);

// let arr1=Array.from(set);
// console.log(arr1);
/* 
let mas=[5,9,2,5,9];
console.log(mas);
let mas1=[...new Set(mas)];
console.log(mas1);
 */
/*
class VisitTracker{
    constructor(){
        this.visitors=new Set();
        this.totalVisits=0;
    }

    registerVisit(userId){
       this.totalVisits++;
       this.visitors.add(userId);
    }

    getUniqueCount(){
        return this.visitors.size;
    }
    getUniquePersent(){
        if (this.totalVisits===0) {
            return 0;
        }
        return(this.visitors.size / this.totalVisits)*100;
    }
}

const tracker=new VisitTracker();
tracker.registerVisit("user_1");
tracker.registerVisit("user_2");
tracker.registerVisit("user_1");
tracker.registerVisit("user_3");
tracker.registerVisit("user_2");
console.log("Всего визитов: "+tracker.totalVisits);
console.log("Уникальных поситителей: "+tracker.getUniqueCount());
console.log("Процент новых: "+tracker.getUniquePersent()+"%");
  */

// let mas=[5,9,2];
// let set=new Set(mas);
// console.log(set);
// let mas1=[...set];
// console.log(mas1);

// let mas=[5,9,2,5,9];
// console.log(mas);
// let mas1=[...new Set(mas)];
// console.log(mas1);

const one= new Set(['first',"seconds","third","fourth"]);
let two=new Set(['seconds','fifth','fourth','sixth']);


const uni=one.union(two);
console.log([...uni]);

const both=one.intersection(two);
console.log(both);

const onlyOne=one.difference(two);
console.log([...onlyOne]);

