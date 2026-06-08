// let but=document.querySelector("#but");
// console.log(but);
// but.addEventListener("click",function(){
//    let your_name=document.querySelector("#your_name").value
//    let text=document.querySelector("#text").value;
//    let reg=/<(p|h1|b|div|h2)>([A-Za-z0-9]+)<\/(p|h1|b|div|h2)>/ig;
  
//   your_name=your_name.replace(reg,'<$1 style="color:red">$2</$1>')
// //    //  text.style.color="red"
//  text.innerHTML=your_name
// document.writeln(`
//         <fieldset>
//             <legend></legend>
//             <div>${text}</div>
//         </fieldset>    
//     `);
   
   
// })

// \/?(p|h1|b|h2|div)>/ig

let but = document.querySelector("#but");
but.addEventListener("click", smsUser);
 
function smsUser(){
    let name = document.querySelector("#your_name").value;
    let text = document.querySelector("#text").value;
    let regExpBBMail = /(.*?)<(b|u|i|s|h1|p)>(.*?)<(\/\2)>(.*?)/ig;
    text = text.replace(regExpBBMail, "$1 <span style='color:red'>&lt;$2&gt;</span>$3<span style='color:red'>&lt;$4&gt;</span> $5");
    //
    console.log(text);
 
    document.writeln(`
        <fieldset>
            <legend>${name}</legend>
            <div>${text}</div>
        </fieldset>    
    `);
 
    let form = document.querySelector("form");
    form.insertAdjacentHTML("afterend", `<fieldset>
             <legend><b>${name}</b></legend>
             <div>${text}</div>
         </fieldset>  `);
   
}
 