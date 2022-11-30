const button = document.querySelector("button")
const number = parseInt(document.querySelector(".valor").value)
const quantity = parseInt(document.querySelector(".quantidade").value)
button.addEventListener("click", () => {
    let numero, penultimo = 0, ultimo = number
    const resp = document.querySelector(".resposta")
    for (let aux = 1; aux <= quantity; aux++) {
        numero = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = numero;
        resp.innerHTML += `${numero} <br/>`
    }
})