// 1. Fala um programa que receba a idade e sexo de um número indefinido de pessoas. Ao fim, seu programa deve informar: 
// I. O número de maiores de idade; 
// II. O número de mulheres; 
// III. O número de homens;
// IV. Média de idades;
const primeiro = {idade: 18, genero: "M"}
const segundo = {idade: 25, genero: "M"}
const terceiro = {idade: 4, genero: "F"}
const quarto = {idade: 13, genero: "M"}
const quinto = {idade: 30, genero: "F"}


const censo = (...info) => {
    let maior = 0
    let mulher = 0
    let homem = 0
    let total = 0
    let totalf = 0
    let totalm = 0
    info.forEach(info => {
        if(info.idade >= 18) maior++
        if(info.genero == "F") {
            mulher++
            totalf += info.idade
        } 
        else {
            homem++
            totalm += info.idade
        }
        total += info.idade
    })

    return `Maiores de idade: ${maior}. Número de mulheres: ${mulher}. Número de homens: ${homem}. Média de idade: ${(total/info.length).toFixed(1)}. Média de mulheres: ${(totalf/mulher).toFixed(1)}. Média de homens: ${(totalm/homem).toFixed(1)}.`
}

console.log(censo(primeiro, segundo, terceiro, quarto, quinto))

// 2. Faça um programa que receba uma frase e indique qual é a letra mais recorrente e quantas vezes apareceu.

let frase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

let array = frase.split("")

