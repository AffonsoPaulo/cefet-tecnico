// Faça um programa que calcule o fatorial de um número qualquer. O fatorial de um número N é igual ao produto N x (N-1) x (N-2) ... x 1. Para testar sua solução, seu programa deve calcular e imprimir o fatorial de 12

const input = document.querySelector("#num")
const update = document.querySelector("#confirm")
const main = document.querySelector("#main")
const calcFactorial = () => {
    let result = 1
    for(let aux = 1; aux <= parseFloat(input.value); aux++) {
        result *= aux
    }
    const createP = document.createElement("p")
    const resultPrint = document.createTextNode(result)
    createP.appendChild(resultPrint)
    main.appendChild(createP)
}

update.addEventListener("click", calcFactorial)