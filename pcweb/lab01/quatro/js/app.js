// Faça um programa que calcule e imprima os 100 primeiros números da sequência de Fibonacci, definida por: A1 = 1; A2 = 2; A3 = 1 + 2 = A1 + A2; An = An-1 + An-2 (n>=3)

const main = document.querySelector("#main")
let numero, penultimo = 0, ultimo = 1
for (let aux = 3; aux <= 100; aux++) {
    numero = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = numero;

    const createP = document.createElement("p")
    const resultPrint = document.createTextNode(numero)
    createP.appendChild(resultPrint)
    main.appendChild(createP)
}

