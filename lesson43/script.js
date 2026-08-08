/*
Тема: JSON

  */
/* 
JSON.stringfy()- преобразует обьект Javascript в обьект JSON;
JSON.parse()-преобразует обьект JSON
*//* 
let info = `{"firs_name":"Ivan","age":17,"mother":{"name":"Olga","age":56},"children":["Kate","igor","Misha"],"married":true,"dog":null}`;
console.log(info);

let person = JSON.parse(info);
console.log(person);

person.firs_name = "Yusuf";
document.writeln(person.firs_name + "<br>");
delete person.age;


for (let i in person) {
    document.writeln(i + ": " + person[i] + "<br>");
};
document.writeln("<br>");
person.work = "programmer";

for (let i in person) {
    document.writeln(i + ": " + person[i] + "<br>");
};
document.writeln("<br>");
delete person.children[1];
document.writeln(person.children + "<br><br>");

person.children.splice(1, 1);
document.writeln(person.children + "<br><br>");

person.children.push("Ira");
document.writeln(person.children+"<br><br>");

let personString=JSON.stringify(person);
console.log(personString);

 */

/* 
const user={
    name:"Yusuf",
    surname:"Sayganov",
    age:23,
    city:"Penza"
};

// const json=JSON.stringify(user);
const json=JSON.stringify(user,["name","age"],2);

console.log(json); */
/* 
function parseJson(jsonString,value={}) {
    try{
        return JSON.parse(jsonString);

    }catch(error
    ){
        console.log("Failed to parse JSON",error.message);
        return value;
        
    }
    // return JSON.parse(jsonString)
}

const validJson=`{"name":"Yusuf", "age":20}`;
const invaliddJson=`{"name":"Yusuf", age":20}`;

console.log(parseJson(validJson));
console.log(parseJson(invaliddJson));
 */

// if (navigator.cookieEnabled===false) {
//     alert("Cookies Отключены");
// }else{
// alert("Cookies включены");
// }

// 

