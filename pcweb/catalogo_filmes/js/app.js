// titulo [V]
// resumo [V]
// generos [V]
// titulos semelhantes
// classificação
// figura [V]
// elenco [V]
// opiniões {rating, descricao}
// 

let xhttp = new XMLHttpRequest();

let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";

let criaGenero = filme => filme.generos.reduce((elementos, item) => elementos + `<li>${item}</li>`, "")

let criaElenco = filme => filme.elenco.reduce((elementos, item) => elementos + `<li>${item}</li>`, "")

let procuraTitulo = (id, arrayCompleto) => {
    console.log(id)
    console.log(arrayCompleto.id + ` é do array`)
}

let criaTitulos = filmes => {
    console.log(Object.keys(filmes).lenght)
    for (let i = 0; i <= filmes.titulosSemelhantes.length; i++) {
        console.log("oi")
        for (let j = 0; j <= filmes.length; j++) {
            console.log("oi")
        }
    }
    // console.log(titulos)
    // console.log(titulos)
    // return titulos.reduce((elementos, item) => elementos + `<li>${procuraTitulo(item, filmes)}</li>`, "")
}
/* let criaTitulos = titulos => titulos.reduce((elementos, item) => elementos + `<li>${item}</li>`, "") */

let criaApresentacao = (filme) => {
    console.log(filme)
    return `
    <div class="filme">
        <img src="${filme.figura}" alt="${filme.titulo}">
        <h3>${filme.titulo}</h3>
        <p class="descricao">${filme.resumo}</p>
        <div class="genero">
            <ul>
                ${criaGenero(filme)}
            </ul>
        </div>
        <div class="elenco">
            <ul>
                ${criaElenco(filme)} 
            </ul>
        </div>
        <div class="titulos semelhantes">
                ${criaTitulos(filme)}
        </div>
    </div>`
}

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && xhttp.status == 200) {
        let filmes = JSON.parse(this.responseText)
        // console.log(filmes)
        let secao = document.querySelector(".filmes")
        filmes.forEach(filmes => {
            secao.innerHTML += criaApresentacao(filmes)
        })
    }
}

xhttp.open("GET", url, true)

xhttp.send()