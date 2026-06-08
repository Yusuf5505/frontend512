let slides = document.querySelectorAll(".slide");
for(let i=0;i<slides.length;i++){
    slides[i].addEventListener("click",() =>{
        clearActive()
        slides[i].classList.add("active")
    })
}

function clearActive() {
    for(let i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
    }
}