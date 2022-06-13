/* Número três */
const numberOne_seven = document.querySelector("#numOne_Seven")
const numberTwo_seven = document.querySelector("#numTwo_Seven")
const numberThree_seven = document.querySelector("#numThree_Seven")
const update_seven = document.querySelector("#confirm_Seven");
const divSeven = document.querySelector("#seven")
const seven = () => {
    const mediaFinal = parseFloat(((numberOne_seven.value * 2) + (numberTwo_seven.value * 3) + (numberThree_seven.value * 5)) / 10) 
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(mediaFinal);
    createP.appendChild(resultPrint);
    divSeven.appendChild(createP);
}

update_seven.addEventListener("click", seven)