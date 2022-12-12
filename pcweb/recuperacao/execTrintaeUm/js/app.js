const view = document.querySelector(".selection")
const viewPlus = document.querySelector(".pictures")
let url = null
view.addEventListener("click", (event) => {
    console.log(event.target)
    if(event.target.classList[0] == "img") {
        url = event.target.src
        url = url.split("execTrintaeUm/")
        console.log(url[1])
        viewPlus.innerHTML = `<img class='big' src='${url[1]}'>` 
    }
})
