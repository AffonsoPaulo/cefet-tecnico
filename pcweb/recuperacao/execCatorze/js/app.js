const button = document.querySelector("button")
const select = document.querySelector(".resposta")
let array = ["GO", "MG", "SP", "RJ", "AM", "PA"]
button.addEventListener("click", () => {
    let arrayOrdem = array.sort()
    arrayOrdem.forEach(element => {
        select.innerHTML += `<option value="${element}">${element}</option>`
    });
})