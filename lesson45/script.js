// const sum1=120323;
// const sum2=10002000323;
// const sum3=160020323;

// const num=0.1;
// document.writeln(
//     `${sum1.toLocaleString()}<br>
//     ${sum2.toLocaleString("ru")}<br>
//     ${sum3.toLocaleString("en")}<br>
//     `);

// document.writeln(`<div>
//     ${sum1.toLocaleString({
//         style:'decimal'
//     })}<br>
//     ${num.toLocaleString("ru",{
//         style:'percent'
//     })}<br>
//     ${sum2.toLocaleString('ru',{
//         style:'currency',
//         currency:'rub'
//     })}<br>
//     ${sum3.toLocaleString('en',{
//         style:'currency',
//         currency:'USD',
//         currencyDisplay:"name"
//     })}<br>
//     ${sum3.toLocaleString('RU',{
//         style:'currency',
//         currency:'EUR',
//         currencyDisplay:"name"
//     })}<br>
//     </div>`)

// document.writeln(`<div>
//     ${new Intl.NumberFormat("ru",{
//         style:"currency",
//         currency:"EUR",
//         currencyDisplay:"name",
//         minimumFractionDigits:0
//     }).format(sum2)}<br></div>`);

// const toEuro=new Intl.NumberFormat("ru",{
//         style:"currency",
//         currency:"EUR",
//         currencyDisplay:"name",
//         minimumFractionDigits:0
//     })

//     document.writeln(`<div>${toEuro.format(sum1)}</div>`)
//     document.writeln(`<div>${toEuro.format(sum2)}</div>`)
//     document.writeln(`<div>${toEuro.format(sum3)}</div>`)
/* 
const now = new Date();
const locale= navigator.language;
const dateOptions = {
    day: "2-digit",
    month: "long",
    year: "2-digit",
    era: "long",
    weekday: "long",
    timeZoneName: "short",
    hour:"2-digit",
    hour12:true,
    minute:"2-digit",
    second:"2-digit"
};

const UserDate=new Intl.DateTimeFormat("locale", dateOptions);
const ruDate = new Intl.DateTimeFormat("ru", dateOptions);
const usDate = new Intl.DateTimeFormat("en-US", dateOptions);
const islamicDate = new Intl.DateTimeFormat("ru-u-ca-islamic", dateOptions);

document.writeln(`<ul>
    <li>${ruDate.format(now)}</li>
    <li>${usDate.format(now)}</li>
    <li>${islamicDate.format(now)}</li>
</ul>`); */

/* const rtf=new Intl.RelativeTimeFormat("en",{
    numeric:"auto",
    style:"long",
    localeMatcher:"best fit"
});

console.log(rtf.format(1,"day"));
console.log(rtf.format(-1,"day"));
console.log(rtf.format(2,"day"));
console.log(rtf.format(-2,"day"));
console.log(rtf.format(-20,"day"));

 */

/*
function getRelativeString(date,lang=navigator,language) {
    const timeMs=typeof date=='number' ? date : date.getTime();
    const dateSeconds=Math.round(timeMs- Date.now()/1000)
    // const cutoffs=

    return dateSeconds
}

console.log(getRelativeString(new Date("2026-08-23T00:55:04"), 'ru'));
console.log(getRelativeString(new Date("2026-09-23"), 'ru'));
console.log(getRelativeString(new Date("2026-08-18"), 'ru'));
  */
/* 
const formatter=new Intl.NumberFormat('ru',{
    style:'unit',
    unit:"meter",
    unitDisplay:"long"
})

document.writeln(`<ul>
    <li>${formatter.format(100)}
    </li>
    <li>${formatter.format(101)}
    </li>
    <li>${formatter.format(102)}
    </li>
    <li>${formatter.format(103)}
    </li>
    
    
    </ul>`) */

/* Map Set */
// let obj={
//     /* "name":"Ivan",
//     20:"age",
//     "boolean":true */
// };

// console.log(obj);
// obj[{id:1}]="first";
// obj[{id:2}]="second";
// console.log(obj);


// let obj={40:"number",true:"boolean"};
// console.log(Object.keys(obj).length);
/* 
let map=new Map();
let obj={7:"семь"};
let mas=[3,4];
map.set(5,"number");
map.set("5","string");
map.set("5","пять");
map.set(mas,"mas");
map.set(obj,"object");
 */
// console.log(map);
// console.log(map.get(5));
// console.log(map.get("5"));
// console.log(map.get(mas));

// console.log(map.size);
// console.log(map.has(5));

// map.clear();
// console.log(map);

// let mas1=[1,2,3];
// console.log(mas1.map(el =>el *2));

// for(let elem of map){
//     document.writeln(elem+"<br>");
//     console.log(elem);
    
// }
/* 
for(let [key,elem] of map){
    document.writeln("***************");
    document.writeln(key+"<br>");
    document.writeln(key+"<br>");
    document.writeln(elem+"<br>");
} */

// let values=map.values();
// console.log(values);

// let keys=map.keys();
// console.log(keys);
// let entries=map.entries();
// console.log(entries);

// for(let el of map.keys()){
//     console.log(el);
    
// }

// let maps= new Map();
// maps.set("1","one").set(1,"first").set(true,'bool');

// let maps= new Map([
//     ["1","one"],
//     [1,"first"],
//     [true,"bool"]
// ]);
// console.log(maps);

// maps.forEach((value,keys) =>{
//     document.writeln(`${keys}: ${value} <br>`);
// })

/* const users=[
    {name:"Alex",age:25},
    {name:"Bob",age:30},
    {name:"Rob",age:30},
    {name:"Ivan",age:35},
];


const byAge=Map.groupBy(users,users =>users.age);

console.log(byAge);

const age25=byAge.get(25);
console.log(age25);
 */

const items=[1,2,3,4,5,6];

const enumerate=Map.groupBy(items,n=>n%2==0?"even":"odd");
console.log(enumerate);


let arr = ["яблоко", 42, "машина", 7, "дом", 99, "кот", 15, "солнце", 3];
 
const type= Map.groupBy(arr,i=>typeof i ==="number"?"number":"string")
console.log(type);
