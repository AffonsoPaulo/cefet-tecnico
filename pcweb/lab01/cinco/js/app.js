// Faça um programa que identifique e imprima todos os números primos entre 2 e 1000.

const main = document.querySelector("#main")

const verifyNumber = (number) => {
    for(let aux = 2; aux < number; aux++) {
        if(number % aux == 0) return false;
        return true;
    }
}

for(let aux = 2; aux < 100; aux++) {
    if (verifyNumber(aux)) {
        const createP = document.createElement("p")
        const resultPrint = document.createTextNode(parseFloat(aux))
        createP.appendChild(resultPrint)
        main.appendChild(createP)
    };
}

