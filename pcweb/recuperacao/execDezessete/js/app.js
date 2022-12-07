const createButton = document.querySelector(".criaBotao")
const sectionButtons = document.querySelector(".buttons")

// CRIAR BOTÃO
let aux = 1
createButton.addEventListener("click", () => {
    sectionButtons.innerHTML += `<div class="quadrado quadrado${aux}"></div>`
    aux++
})

// MUDAR COR

function getRandomColor() {
    const letters = "0123456789ABCDEF"
    let colors = "#"
    for(let i = 0; i <6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

sectionButtons.addEventListener("mouseover", (event) => {
    console.log(event.target)
    (event.target.className == "quadrado")
    console.log("Opa")
})