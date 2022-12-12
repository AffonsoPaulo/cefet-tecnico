const view = document.querySelector(".selection")
const viewPlus = document.querySelector(".pictures")
let url = null
view.addEventListener("click", (event) => {
    if(event.target.classList[0] == "img") {
        url = event.target.src
        url = url.split("execTrintaeUm/")
        viewPlus.innerHTML = `<img class='big' src='${url[1]}'>` 
    }
})
