window.onload = () => {
    fetch('https://affonso.dev/pcweb/controlRes/items.json')
        .then(response => response.json())
        .then(responseJSON => {
            responseJSON.forEach((item) => {
                createItem(item)
            })
        })
}

const createItem = (item) => {
    const items = document.querySelector(".items")
    const name = typeof item.name !== 'undefined' ? item.name : item.title
    const prices = item.price.split('$')
    if(prices.length > 2) {
        createItemPriceD(item, prices)
        return
    }
    const div = `<div class="col mb-5">
                    <div class="card h-100 mx-auto" style="width: 18rem;">
                        <img src="${'https://raw.githubusercontent.com/rafaelescalfoni/rafaelescalfoni.github.io/main/desenv_web/restaurante/' + item.photo}" class="card-img-top" alt="${name}">
                        <div class="card-body d-flex align-items-start flex-column">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${item.details}</p>
                            <p class="card-text">Code: ${item.code}</p>
                                <a id="${item.code}" class="btn btn-danger mt-auto">${item.price}</a>   
                        </div>
                    </div>
                </div>`
    items.innerHTML += div
}

const createItemPriceD = (item, price) => {
    const items = document.querySelector(".items")
    const name = typeof item.name !== 'undefined' ? item.name : item.title
    const div = `<div class="col mb-5">
                    <div class="card h-100 mx-auto" style="width: 18rem;">
                        <img src="${'https://raw.githubusercontent.com/rafaelescalfoni/rafaelescalfoni.github.io/main/desenv_web/restaurante/' + item.photo}" class="card-img-top" alt="${name}">
                        <div class="card-body d-flex align-items-start flex-column">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${item.details}</p>
                            <p class="card-text">Code: ${item.code}</p>
                            <div class="mt-auto">
                                <a id="${item.code}" class="btn btn-danger A">$${price[1]}</a>
                                <a id="${item.code}" class="btn btn-danger A">$${price[2]}</a>
                            </div>   
                        </div>
                    </div>
                </div>`
    items.innerHTML += div
}

const addSection = document.querySelector(".items")
let productsPrice = []
let aux = 0
addSection.addEventListener("click", (e) => {
    if(e.target.nodeName === "A") {
        if(e.target.classList[2] === "A") {
            let save = {
                id: e.target.id,
                name: e.target.parentNode.parentNode.childNodes[1].textContent,
                price: e.target.textContent.split("$")[1].split(" ")[0]
            }
            aux++
            const cart = document.querySelector(".cart")
            cart.innerHTML += `<div id="cart${save.id}${aux}" class="rounded mb-2 d-flex justify-content-between">
                                    <p class="fs-6 my-1">${save.name}</p>
                                    <span class="d-flex justify-content-between">
                                    <p class="fs-6 my-1 me-2">$${save.price} </p>
                                    <button type="button" class="btn btn-danger buttonCart" onclick="removeFromCart(${save.id}, ${aux})">Remove</button>
                                    </span>
                                </div>`
            fullPrice(save)
            document.querySelector(".badge").textContent = aux
        } else {
            let save = {
                id: e.target.id,
                name: e.target.parentNode.childNodes[1].textContent,
                price: e.target.textContent.split("$")[1].split(" ")[0]
            }
            aux++
            const cart = document.querySelector(".cart")
            cart.innerHTML += `<div id="cart${save.id}${aux}" class="rounded mb-2 d-flex justify-content-between">
                                    <p class="fs-6 my-1">${save.name}</p>
                                    <span class="d-flex justify-content-between">
                                    <p class="fs-6 my-1 me-2">$${save.price} </p>
                                    <button type="button" class="btn btn-danger buttonCart" onclick="removeFromCart(${save.id}, ${aux})">Remove</button>
                                    </span>
                                </div>`
            fullPrice(save)
            document.querySelector(".badge").textContent = aux
        }
    }
})

const removeFromCart = (id, auxi) => {
    let idC = "#cart" + id.id + auxi
    const cartId = document.querySelector(idC)
    cartId.remove()
    document.querySelector(".badge").textContent = --aux
    productsPrice[auxi - 1] = 0
    fullPrice()
}

const fullPrice = (priceList = 0) => {
    priceList != 0 ? productsPrice.push(priceList.price) : ""    
    let aux = productsPrice.reduce((current, total) => parseFloat(current) + parseFloat(total), 0)
    const totalPrice = document.querySelector(".fullPrice")
    totalPrice.textContent = `$${((aux) * 1.1).toFixed(2)} (with tax)`
}

const checkout = document.querySelector(".cartCheckout")

checkout.addEventListener("click", () => {
    checkout.remove()
    let aux = 300
    let interval = setInterval(() => {
        aux > 60 ? document.querySelector(".checkoutMessage").textContent = `Você tem ${(aux/60).toFixed()} minutos para remover os itens do seu pedido.` : document.querySelector(".checkoutMessage").textContent = `Você tem ${aux} segundos para remover os itens do seu pedido.`
        aux--
        if(aux === -1) {
            clearInterval(interval)
            buttons = document.querySelectorAll(".buttonCart")
            buttons.forEach((e) => {
                e.remove()
            })
            document.querySelector(".checkoutMessage").textContent = `Seu pedido já está na cozinha, você não consegue mais cancelar ele.`  
        } 
    }, 1000)
})

