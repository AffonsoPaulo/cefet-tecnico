// Faça um programa que imprima 30 primeiras potências de 4, ou seja, 4 elevado a 1, 4 elevado a 2 etc.

const input = document.querySelector("#num")
const update = document.querySelector("#confirm")
const main = document.querySelector("#main")
const calcFactorial = () => {
    let result = 1
    for (let aux = 30; aux >= 0; aux--) {
        result = parseFloat(input.value) ** aux
        const createP = document.createElement("p")
        const resultPrint = document.createTextNode(result)
        createP.appendChild(resultPrint)
        main.appendChild(createP)
    }

}

update.addEventListener("click", calcFactorial)