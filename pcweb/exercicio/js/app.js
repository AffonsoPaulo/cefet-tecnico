// Número 1
const respCilindro = document.querySelector(".respostaUm")
const verificarCilindro = document.querySelector(".respCilindro")

verificarCilindro.addEventListener("click", () => {
    const raioCilindro = document.querySelector("#raio").value
    const alturaClindro = document.querySelector("#altura").value
    respCilindro.innerHTML = `A capacidade do cilindro é de ${((Math.PI * (raioCilindro) ** 2 * alturaClindro) / 1000).toFixed(2)} litros.`
})


// Número 2

const respMedidas = document.querySelector(".respostaDois")
const verificarMedidas = document.querySelector(".respMedidas")

verificarMedidas.addEventListener("click", () => {
    const conversorUm = document.querySelector("#conversorUm").value
    const medidaUm = document.querySelector("#converterUm").value
    const medidaDois = document.querySelector("#converterDois").value

    const metro = {
        polegada: 39.37,
        pe: 0.3048
    }

    const polegada = {
        metro: 0.0254,
        pe: 0.0833333
    }

    const pe = {
        metro: 0.3048,
        polegada: 12
    }


    if (medidaUm == "m") {
        if (medidaDois == "m") respMedidas.innerHTML = `Metro para Metro será o próprio número`
        else if (medidaDois == "p") respMedidas.innerHTML = `${conversorUm} metros = ${conversorUm * metro.polegada} polegadas`
        else if (medidaDois == "pe") respMedidas.innerHTML = `${conversorUm} metros = ${conversorUm * metro.pe} pés`
    }

    if(medidaUm == "p") {
        if(medidaDois == "p") respMedidas.innerHTML = `Polegada para Polegada será o próprio número`
        else if(medidaDois == "m") respMedidas.innerHTML = `${conversorUm} polegadas = ${conversorUm * polegada.metro} metros`
        else if(medidaDois == "pe") respMedidas.innerHTML = `${conversorUm} polegadas = ${conversorUm * polegada.pe} pés`
    }

    if(medidaUm == "pe") {
        if(medidaDois == "pe") respMedidas.innerHTML = `Pé para pé será o próprio número`
        else if(medidaDois == "m") respMedidas.innerHTML = `${conversorUm} pés = ${conversorUm * pe.metro} metros`
        else if(medidaDois == "p") respMedidas.innerHTML = `${conversorUm} pés = ${conversorUm * pe.polegada} polegadas`
    }

})

// Número 3

