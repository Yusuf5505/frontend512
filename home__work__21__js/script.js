let product = document.querySelector(".product-cover");
let lengthPath = 5;
let paagination = document.querySelector(".pagination");
let span = document.querySelectorAll("span")
let data = new Array(18);



for (let i = 0; i < data.length; i++) {
    data[i] = document.createElement("div");
    data[i].classList.add("card");
    if (i % 3) {
        data[i].classList.add("blue");
    } else {
        data[i].classList.add("gray");
    }
    let node = document.createTextNode(i + 1);
    data[i].append(node)
    product.append(data[i])
}
let i = 0;
let chunks = splitParrts(data);
renderChunks(0);
for (let j = 0; j < span.length; j++) {
    span[j].addEventListener("click", function () {
        for(let r=0;r<span.length;r++){
            span[r].classList.remove("active");
        }
       

        this.classList.add("active")

        renderChunks(j)
    }
    )
}
let right = document.getElementById("right").addEventListener("click", function () {
    for (let i = 0; i < span.length; i++) {

        span[i].classList.remove("active");
    }
    i++
    span[i].classList.add("active")

    renderChunks(i);

})
renderChunks(0);
let left = document.getElementById("left").addEventListener("click", function () {
    for (let i = 0; i < span.length; i++) {
        span[i].classList.remove("active");
    }
    i--
    span[i].classList.add("active")
    renderChunks(i);


})

function splitParrts(arr) {
    let chunks = [];
    for (let i = 0; i < arr.length; i += lengthPath) {
        chunks.push(arr.slice(i, i + lengthPath)); // используем slice вместо splice
    }
    return chunks;
}

function renderChunks(part) {
    if (part >= 0 && part < chunks.length) { // меняем <= на <
        product.innerHTML = "";
        chunks[part].forEach(elem => product.append(elem)); // forEach вместо map
        return true;
    } else {
        return false;
    }
}

