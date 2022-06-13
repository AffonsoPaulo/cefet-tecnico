/* Número três */
const numberOne_six = document.querySelector("#numOne_Six")
const update_six = document.querySelector("#confirm_Six");
const divSix = document.querySelector("#six")
const six = () => {
    const converter = ((numberOne_six.value - 32) * (5/9))
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(converter);
    createP.appendChild(resultPrint);
    divSix.appendChild(createP);
}

update_six.addEventListener("click", six)
