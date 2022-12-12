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
    for (let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)]
    }
    return colors
}
let htmlClass = 1
sectionButtons.addEventListener("mouseover", (event) => {
    if (event.target.nodeName == "DIV" || event.target.className == "quadrado")
        event.target.style.backgroundColor = getRandomColor()
})