/* document.writeln("aaa".replace("a","b")+"<br>");
document.writeln("aaa".replace(/a/g,"b")+"<br>"); */

/* let text="I kill you black gog";
document.writeln(text+"<br>");
let exp=/book|kill|black/ig;
text=text.replace(exp,"***");
document.writeln("<p>"+text+"</p>") */

// let st="<p>Hello World</p>";
// let reg=/<.+?>/g;
// console.log(st.match(reg));

// let st="...<!--My -- comment text --> ..<!---->"

// let reg=/<!--.*-->/g

// let st="<> <a href='#'> <input type='radio'.m checked> <b>"

// let reg=/<[^>]+>/g
// alert(st.match(reg))

// let html="site.com и my.site.com";
// let exp=/(\w+\.)+\w+/g;
// document.writeln(html.match(exp)+"<br>")

// let st="<h1>Hello,world</h1>";
// let tag=st.match(/<.*?>/);
// alert(tag);
/* 
let st="<span class='my'>"
let ex=/<(([a-z]+)\s*([^>]*))>/;
let res=st.match(ex);
alert(res[4])
 */

let st= '-1.5 -5 02 -123.4.';
let reg=/-\d+\.\d+|\d+|-\d+/g
document.writeln(st.match(reg))