window.onload = () => {
    fetch('https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json')
    .then(response => response.json())
    .then(responseJSON => {
        responseJSON.forEach((item) => {
            createItem(item)
        })
    })
}

const createItem = (item) => {
    const items = document.querySelector(".items")
    const div = `` 
}
createItem()