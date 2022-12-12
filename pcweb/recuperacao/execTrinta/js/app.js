const botao = document.querySelector("#submit")
const total = document.querySelector(".result")
const pesquisa = () => {
    const palavrasPesquisa = document.querySelector("#pesquisar").value
    let texto = document.querySelector(".frase").textContent
    console.log(palavrasPesquisa)
    const teste = document.querySelector(".teste")
    texto = texto.replaceAll(palavrasPesquisa, `<mark>${palavrasPesquisa}</mark>`)
    teste.innerHTML = texto
    let aux = []
    aux = texto.split("<mark>")
    console.log(aux)
    total.innerHTML = `${aux.length - 1} palavra(s) encontrada(s).`
}

botao.addEventListener("click", pesquisa)
