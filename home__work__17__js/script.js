let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
function print() {
let d= new Date();
 let m;
let day;
for(let i=0;i<months.length;i++){
    if (d.getMonth()==i) {
        m=months[i]
    }
    console.log(m);
}
 for(let j=0;j<days.length;j++){
        if (d.getDay()==j) {
            day=days[j]
        }
    }
    document.writeln("Сегодня "+d.getDate()+" "+m+" "+d.getFullYear()+","+day)
}
let but= document.querySelector("#but");
but.addEventListener("click",function(){
    print()
})

