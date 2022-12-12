const button = document.querySelector("button")

button.addEventListener("click", () => {
    const number = parseInt(document.querySelector(".valor").value)
    const quantity = parseInt(document.querySelector(".quantidade").value)
    const resp = document.querySelector(".resposta")
    resp.innerHTML = ""
    let numero, penultimo = 0, ultimo = number
    for (let aux = 1; aux <= quantity; aux++) {
        numero = ultimo + penultimo;
        resp.innerHTML += `${penultimo} + ${ultimo} = ${numero} <br/>`
        penultimo = ultimo;
        ultimo = numero;
    }
})