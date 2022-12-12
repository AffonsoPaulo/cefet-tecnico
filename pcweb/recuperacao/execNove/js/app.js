const start = document.querySelector(".start")
const game = document.querySelector(".game")
const playerNow = document.querySelector(".player")
const none = document.querySelector(".none")
let player = null
let moves = 0
let playerX = []
let playerO = []
start.addEventListener("click", () => {
    let aux = ((Math.floor(Math.random() * 10)) % 2)
    aux = (aux == 1) ? "X" : "O"
    playerNow.innerHTML = aux
    player = aux
    start.style.display = "none"
    none.style.display = "inline"
})

game.addEventListener("click", (event) => {
    console.log(event.target)
    if (player == null) {
        window.alert("Você ainda não iniciou o jogo")
        return null
    }
    if (event.target.nodeName == "BUTTON") {
        if (player === "X") {
            playerX.push(parseInt(event.target.classList[0]))
            event.target.textContent = player
            player = "O"
            moves++
            playerNow.innerHTML = player

        } else if (player === "O") {
            playerO.push(parseInt(event.target.classList[0]))
            event.target.textContent = player
            player = "X"
            moves++
            playerNow.innerHTML = player
        }
    }
    console.log(playerX)
    if (moves >= 5) {
        let aux = 0
        for (let i = 0; i <= 7; i++) {
            if (player !== "X") {
                let auxTwo = 0
                aux = playerX.some(r => {
                    if (answers[i].includes(r))
                        auxTwo++
                })
                if (auxTwo == 3) {
                    window.alert("O jogador X ganhou!")
                    location.reload()
                }
            }
            if (player !== "O") {
                let auxTwo = 0
                aux = playerO.some(r => {
                    if (answers[i].includes(r))
                        auxTwo++
                })
                if (auxTwo == 3) {
                    window.alert("O jogador O ganhou!")
                    location.reload()
                }
            }
        }
        if (moves >= 9) {
            window.alert("O jogo deu velha!")
            location.reload()
        }
    }
})

let answers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]