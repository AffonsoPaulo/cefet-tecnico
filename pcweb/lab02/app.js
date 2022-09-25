const search = document.querySelector("#search").value
const replace = document.querySelector("#replace").value
const text = document.querySelector("#text")
const searchSubmit = document.querySelector("#submitSearch")
const replaceSubmit = document.querySelector("#submitReplace")
const loadingSubmit = document.querySelector("#submitLoading")

/* 1 - Faça um programa que leia um texto e:
    a) conte o número de palavras e total de letras;
    b) co te a ocorrência de palavras (localizar);
    c) Marque a palavra digitada;
    d) Substitua a palavra digitada.
*/
const refatoraTexto = text => text.value.replace(/[,.?!"';:`/\\]/g, "").toLowerCase()
const separarPalavras = text => text.split(" ")

const contarPalavras = (text) => {
    let palavras = text.length
    let words = document.querySelector("#words").value
    words = `Palavras: ${palavras}`
    console.log(palavras)
    return palavras
}

const contarLetras = (text) => {
    let letras = text.replace(/[ ]/g, "")
    letras = letras.length
    let letters = document.querySelector("#letters").value
    letters = `Letras: ${letras}`
    console.log(letras)
}

loadingSubmit.addEventListener("click", () => {
    const refatorado = refatoraTexto(text)
    const separado = separarPalavras(refatorado)
    const contadoP = contarPalavras(separado)
    const contadoL = contarLetras(refatorado)
    console.log("tô funcionando")
    
})