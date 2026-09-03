/* setTimeout(function(){
console.log("1");
},1500)

console.log("2");
 *//* 
console.log("Клиент : Хочу получить список пользователей");
console.log("...");

setTimeout(function(){
 console.log("Запрашиваю список пользователей в БД");
 console.log("...");
 
 setTimeout(function(){
 console.log("БД: Формирую список пльзователей");
 
},500);
setTimeout(function(){
 console.log("Сервер: трансформирую данные для клиента");
 
},500)
setTimeout(function () {
 console.log("Клиент формирую список пользователей");
 
},1000)
},1000); */
/* 
console.log("Клиент : Хочу получить список пользователей");
console.log("...");

let promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("Запрашиваю список пользователей в БД");
        console.log("...");
        resolve();
    }, 1000)
})
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                let users=[
                    {uid:"id1",name:"Yusuf"},
                    {uid:"id2",
                        name:"irina"
                    }
                ]
                reject("База данных не смогла получить список пользователей");
                console.log("БД: Формирую список пльзователей",users);
                 resolve(users);
            }, 500);
           
        })

    }).then(function (dbUsers) {
    let promise = new Promise(function (resolve, reject) {
       let users=dbUsers.map (function(users){
                return{
                    id:users.uid,
                    firstName:users.name,
                    timestamp: Date.now()
                }
            })
        setTimeout(function () {
            console.log("Клиент: получил данные и отображаю их",users);
            console.log("...");
            
            resolve();
        }, 1000);
    });
})
.catch(function(eror){
    console.log(eror);
    
})
.finally(function(){
    console.log("finally");
    
})
 */

/* let test=ms=>{
    return new Promise(resolve=>{
        setTimeout(() =>resolve(),ms)
    })
}

test(1000).then(() =>console.log("1000 ms")
)
test(1000).then(() =>console.log("2000  ms")
)

Promise.all([test(1000),test(2000)]).then(()=>{
    console.log("All");
    
})

Promise.all([test(1000),test(2000)]).then(()=>{
    console.log("Race");
    
}) */

/*     let test=ms=>{
    return new Promise(resolve=>{
        setTimeout(() =>resolve(),ms)
    })
}

 let p1=test(1000).then(() =>({name:"Promice 1000"})
)
 let p2= test(1000).then(() =>console.log("2000  ms")
)

Promise.all([p1,p2]).then((data)=>{
    console.log("All",data);
    
})

Promise.race([p1,p2]).then((data)=>{
    console.log("Race",data);
    
}) */

// ПРАВИЛЬНО - вызываем fetch
/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error('Ошибка:', error)); */
/* 
  document.querySelector("#load").addEventListener("click",load);
  function load() {
    let url="https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(function(responce){
        return responce.json()
    })
    .then(function(data){
        let ul=document.querySelector('#list');
        let html=data.map(function(item){
            return "<li> "+item.id+item.email+" "+item.name+"</li>";

        })
        ul.insertAdjacentHTML("afterbegin",html.join(' '));
    })
  } */


document.querySelector("#load").addEventListener("click", load);

async function load() {
    try{let url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url);
    let data = await response.json();
    
    let ul = document.querySelector('#list');
    let html = data.map(function (item) {
        return "<li>" + item.id + " " + item.email + " " + item.name + "</li>";
    });}catch(eror){
        console.error("Ошибка при загрузке",eror);
        
    }
    
    
    ul.insertAdjacentHTML("afterbegin", html.join(' '));
}