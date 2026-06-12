let email = document.querySelector("#email");
email.addEventListener("input", function () {
    let reg = /^([A-Za-z0-9#&_\-\.])+@([A-Za-z0-9#&_\-])+\.([A-Za-z]){2,}$/ig
    let span=document.querySelector("span")
    if (reg.test(email.value)) {
        email.style.border = '1px solid green';
        span.style.color="green"
          span.textContent="Пароль  подходить под требования"
        return true;
      
    } else {
        span.style.color="red"
          span.textContent="Слабый пароль"
        email.style.border = '1px solid red';

        return false;

    }
}
)