// titulo [V]
// resumo [V]
// generos [V]
// titulos semelhantes
// classificação
// figura [V]
// elenco [V]
// opiniões {rating, descricao} <i class="fa-solid fa-star"></i> [V]
// 

let xhttp = new XMLHttpRequest();

let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";

let criaGenero = filme => filme.generos.reduce((elementos, item) => elementos + `<li>${item}</li>`, "")

let criaElenco = filme => filme.elenco.reduce((elementos, item) => elementos + `<li>${item}</li>`, "")

let rating = filme => {
    switch (filme) {
        case 5:
            return `<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i>`
            break;
        case 4:
            return `<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i>`
        case 3:
            return `<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i>`
        case 2:
            return `<i class="fa-solid fa-star yellow"></i><i class="fa-solid fa-star yellow"></i>`
        case 1:
            return `<i class="fa-solid fa-star yellow"></i>`
        default:
            return filme
            break;
    }
}

let criaOpiniao = filme => {
    return filme.opinioes.reduce((elementos, item) => {
        return elementos + `<li>${rating(item.rating)}</li><li>${item.descricao}</li>`}, "")
}

let criaApresentacao = (filme) => {
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
                ${criaOpiniao(filme)}
        </div>
        
    </div>`
}

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && xhttp.status == 200) {
        let filmes = JSON.parse(this.responseText)
        // console.log(filmes)
        let secao = document.querySelector(".filmes")
        filmes.forEach(filmes => {
            // console.log(filmes)
            secao.innerHTML += criaApresentacao(filmes)
        })
    }
}

xhttp.open("GET", url, true)

xhttp.send()