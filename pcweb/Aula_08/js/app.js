const btnClicado = document.querySelector(".calc");
const display = document.querySelector(".calc-display")

const adicionaDigito = (digito, display) => display.textContent = display.textContent == "0" ? digito : display.textContent += digito

btnClicado.addEventListener("click", function(event) {
    const elClicado = event.target
    if(elClicado.tagName.toLowerCase() == "button")
    console.log(`Botão clicado: ${elClicado.textContent}`)
    adicionaDigito(elClicado.textContent, display)
})

const somar = (sum1, sum2) => sum1 + sum2