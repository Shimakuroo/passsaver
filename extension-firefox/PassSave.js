const inputText = document.querySelectorAll('input[type="text"]')
const inputPassword = document.querySelectorAll('input[type="password"]')
const inputEmail = document.querySelectorAll('input[type="email"]');



document.querySelectorAll("button[type=submit]").forEach(i => {
    i.addEventListener("click", event => {
        inputText.forEach(j => {
            localStorage.setItem(j.value, j.value);
            console.log(localStorage.getItem(j.value))
        })
        inputPassword.forEach(k => {
            localStorage.setItem(k.value, k.value);
            console.log(localStorage.getItem(k.value))
        })
        inputEmail.forEach(l => {
            localStorage.setItem(l.value, l.value);
            console.log(localStorage.getItem(l.value))
        })
    })
});