const button = document.querySelector("button")
button.addEventListener("click", () => {
    const array = document.querySelector(".array")
    const quantity = parseInt(document.querySelector(".quantidade").value)
    for(let i = 1; i <= quantity; i++) {
        array.innerHTML += `<p>Insira os dados do Array ${i}</p><input type="text" class="array${i}">`
    }
    array.innerHTML += `<br/><br/><button class="preencheArray">Preencher o Array e Imprimir</button>`
    preencherArray()
})

const preencherArray = () => {
    const buttonFill = document.querySelector(".preencheArray")
    const answer = document.querySelector(".resposta")
    let array = []
        buttonFill.addEventListener("click", () => {
            for(let i = 1; i <= quantity; i++) {
                let aux = ".array"+i
                array.push(document.querySelector(aux).value)
            }
            answer.innerHTML += `<p>Array normal</p>`
            array.forEach(element => {
                answer.innerHTML += `${element} <br/>`
            });
            reverseArray = array.reverse()
            answer.innerHTML += `<br/><br/> <p>Array invertido</p>`
            reverseArray.forEach(element => {
                answer.innerHTML += `${element} <br/>`
            })
        })
}