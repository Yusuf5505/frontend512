/* let a = 5;
let b = 7;
console.log(a);
console.log(b);
console.log("=================");

let temp = a;// 5
a = b;// 7
 b = temp;// 5
console.log(a);
console.log(b);

 */
/* let list=document.querySelector("ul");

let newItem=document.createElement("li");
newItem.innerHTML="Новый <i> элемент списка</i>";

list.append(newItem) */
/* let i=1;
document.querySelector("#func1").addEventListener("click",change);
document.querySelector("#func2").addEventListener("click",add);

function change() {
    let elem= document.querySelector("#list2").lastChild
    document.querySelector("#list1").append(elem);
}

function add() {
    let elem=document.createElement("li");
    elem.innerHTML="Water"+i;
    document.querySelector("#list2").append(elem)
    i++
} *//* let calendar = document.getElementById("calendar");
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
createCalendar(calendar, year, month);

function createCalendar(elem, year, month) {
    let currentMonth = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
 
    let current = document.createElement("h2");
    current.textContent = `${currentMonth[month - 1]} ${year}`;
    elem.append(current);

    let table = document.createElement("table");
    table.innerHTML = `
        <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
        </tr>`;
    
    // Первый день месяца
    let curDate = new Date(year, month - 1, 1);
    // Последний день месяца
    let findDate = new Date(year, month, 0);
    
    // Определяем, какой день недели - первое число (0 = воскресенье)
    let firstDayOfWeek = curDate.getDay();
    // Переводим в формат где понедельник = 0, воскресенье = 6
    let startOffset = (firstDayOfWeek === 0) ? 6 : firstDayOfWeek - 1;
    
    // Создаем первую строку
    let tr = document.createElement("tr");
    
    // Добавляем пустые ячейки для дней перед первым числом
    for (let i = 0; i < startOffset; i++) {
        let td = document.createElement("td");
        td.textContent = "";
        tr.append(td);
    }
    
    // Заполняем дни месяца
    while (curDate <= findDate) {
        let td = document.createElement("td");
        td.textContent = curDate.getDate();
        tr.append(td);
        
        // Если дошли до субботы (6-й день при нумерации с понедельника), начинаем новую строку
        if ((startOffset + curDate.getDate()) % 7 === 0 && curDate < findDate) {
            table.append(tr);
            tr = document.createElement("tr");
        }
        
        curDate.setDate(curDate.getDate() + 1);
    }
    
    // Добавляем последнюю строку, если в ней есть ячейки
    if (tr.children.length > 0) {
        table.append(tr);
    }
    
    elem.append(table);
} */

/* let div= document.querySelector("#root");
div.insertAdjacentHTML("beforebegin","<p>До выбранного элемента</p>")
div.insertAdjacentHTML("afterend","<p>После выбранного элемента</p>");
div.insertAdjacentHTML("afterbegin","<p>Первым внутри выбранного элемента</p>");
div.insertAdjacentHTML("beforeend","<p>Последним внутри выбранного элемента</p>");

let child= document.querySelector("#p1");
// child.remove();

let second= document.querySelector("#p2");
second.after(child) */

/* let ul=document.querySelector("ul");
let li= ul.cloneNode(true);
li.querySelector("li").innerHTML="Начало клонируемых элементов"
ul.after(li) */

/* let list= document.querySelector(".list");
list.insertAdjacentHTML("beforebegin","<h2>Список </h2><hr>");
let listInner= document.querySelector("h2");

listInner.insertAdjacentText("beforeend","планет");
list.insertAdjacentHTML("afterbegin","<li>Солнце</li>");
list.insertAdjacentHTML("beforeend","<li>Марс</li>");
list.insertAdjacentHTML("afterend","<hr>");
let hr= document.querySelectorAll("hr")[1];
let h4=document.createElement("h4");
h4.innerHTML="Конец списка";
hr.insertAdjacentElement("afterend",h4);
let idRemove=setInterval(function(){
   let li= document.querySelector("li:last-child");
   if (li==null) {
    clearInterval(idRemove);
    // alert("Список удален")
    list.insertAdjacentHTML("afterbegin","<li>Список удален</li>")
   }else{
     li.remove();
   }
  
}, 500); */


