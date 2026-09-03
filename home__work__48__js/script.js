document.querySelector("#load").addEventListener("click", load);
function forCompleted(item){
return item.completed === true;
}
async function load() {
    try {
        let url = "https://jsonplaceholder.typicode.com/todos";
        let response = await fetch(url);
        let data = await response.json();
        let getTrue= data.filter(forCompleted)
        let ul = document.querySelector('#list');
        let html = getTrue.map(function (item) {
            return "<li>"+item.id+"<br>"+ item.title+"<hr>" +"</li>";
           
        });
        
        ul.insertAdjacentHTML("afterbegin", html.join(' '));
    } catch(error) {
        console.error("Ошибка при загрузке", error);
    }
}