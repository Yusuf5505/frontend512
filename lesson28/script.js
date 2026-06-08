// let st="John Smith";
// let re= /(\w+)\s(\w+)/;
// document.writeln(st.replace(re,"$2,$1"));

/* function add(str) {
    return str.replace(/([A-Z])/g," $1")
}
console.log(add("camelCase"));
console.log(add("helloWorldItIsMe"));
 */

/* let text="red color: #F00 and green: #090";
let ex=/(#[a-f0-9]{3})/ig;
text=text.replace(ex,"<span style=color:$1>$1</span>");
document.writeln("<p>"+text+"</p>") */
/* 
let text="I like google.com and yandex.ru";
let ex=/(([a-z0-9-]{2,}\.)+[a-z]{2,4})/ig;
text=text.replace(ex,"<a href='https://$1'>$1</a>");
document.writeln("<p>"+text+"</p>") */

// let st= "1 курс стоит 30 руб";
// document.writeln(st.match(/\d+(?= руб)/))

let but=document.querySelector("#but");
but.addEventListener("click",smsUser);

function smsUser() {
    let name=document.querySelector("#your_name").value
    
    let text=document.querySelector("#text").value;
   
    
}