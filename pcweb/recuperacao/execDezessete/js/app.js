const changeColor = document.querySelector(".mudarCor")
const documentBody = document.querySelector("body")

changeColor.addEventListener("click", () => {
    documentBody.style.backgroundColor = document.querySelector(".selection").value
})