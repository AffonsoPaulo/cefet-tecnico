fetch('http://ddragon.leagueoflegends.com/cdn/13.4.1/data/pt_BR/champion.json')
    .then(response => response.status !== 200 && response.ok !== true ? console.log('Sem acesso') : response.json())
    .then(champions => Object.entries(champions.data))
    .then(champions => {
        console.log(champions)
        champions.forEach(e => Object.entries(e[1]))
    })


const builder = stats => {
    
}
