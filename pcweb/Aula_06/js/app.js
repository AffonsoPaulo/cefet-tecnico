// criar um objeto XML
let xhttp = new XMLHttpRequest();

let url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json"

let criaIngredientes = receita => receita.reduce((elementos, item) => elementos + `<li>${item}</li>`, "")

let criaPreparo = receita => receita.reduce((elementos, item) => elementos + `<li>${item}</li>`, "")

let criaPrato = (receita) => {
    return `
    <div class="receita">
        <img src="${receita.foto}" alt="${receita.nome}">
        <h3>${receita.nome}</h3>
        <p class="descricao">${receita.descricao}</p>
        <div class="ingrediente">
            <ul>
                ${criaIngredientes(receita.ingredientes)}
            </ul>
        </div>
        <div class="preparo">
            <ol>
                ${criaPreparo(receita.preparo)} 
            </ol>
        </div>
    </div>`
}

// 
xhttp.onreadystatechange = function() {
    // recebeu uma resposta (readyState == 4)
    // o status de resposta é sucesso (status == 200)
    if(this.readyState == 4 && xhttp.status == 200) {
        console.log(this.responseText)
        let receitas = JSON.parse(this.responseText)
        let secao = document.querySelector(".receitas")
        receitas.forEach(receita => {
            secao.innerHTML += criaPrato(receita)
        })
    } 
}
// prepara a requisição e configurar o objeto AJAX
// pam 1 = método
// pam 2 = caminho(url)
// pam 3 = tipo de requisição - sync ou async
xhttp.open("GET", url, true)
// manda a requisição
xhttp.send()