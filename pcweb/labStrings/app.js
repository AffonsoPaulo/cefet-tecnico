const botao = document.querySelector("#submit")

const eCaracterEspecial = letra => {
    const caracterEspecial = [",", ".", "!", "?", "'", '"', "-"]
    return caracterEspecial.indexOf(letra) !== -1? true:false
}

const removerEspacosVazios = listaPalavras => {
    const palavrasTratadasSemEspacosVazios = []
    for(let i = 0; i < listaPalavras.length; i++) {
        if(listaPalavras[i] !== "")
            palavrasTratadasSemEspacosVazios.push(listaPalavras[i])
    }
    console.log(palavrasTratadasSemEspacosVazios)
    return palavrasTratadasSemEspacosVazios
}
const tratarPalavras = seletorHTML => {
    let frase = document.querySelector(seletorHTML).value
    frase.toLowerCase();
    const palavrasList = frase.split(" ")
        const palavrasTratadasList = palavrasList.map(palavra => {
        palavra = palavra.trim()
        const primLetra = palavra[0]
        const ultLetra = palavra[palavra.length-1]

            if(eCaracterEspecial(primLetra)) {
                palavra = palavra.substr(1, palavra.length)
            }

            if(eCaracterEspecial(ultLetra)) {
                palavra = palavra.substr(0, palavra.length - 1)
            }
        return palavra
    })
    return removerEspacosVazios(palavrasTratadasList)
}

const contarPalavras = listaPalavras => listaPalavras.length

const contarLetras = listaPalavras => {
    return listaPalavras.reduce((contador, palavra) => {
        return contador + palavra.length
    }, 0)
}

const verificarEstatisticas = () => {
    const listaPalavras = tratarPalavras("#frase")
    const resultado = document.querySelector("#result")
    resultado.innerHTML = `Número de Palavras: <b>${contarPalavras(listaPalavras)}</b></br>`
    resultado.innerHTML += `Número de Letras: <b>${contarLetras(listaPalavras)}</b>`
}
botao.addEventListener("click", verificarEstatisticas)