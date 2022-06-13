/* Número três */
const numberOne_four = document.querySelector("#numOne_Four")
const numberTwo_four = document.querySelector("#numTwo_Four")
const update_four = document.querySelector("#confirm_Four");
const divFour = document.querySelector("#four")
const four = () => {
    const hip = Math.sqrt(((numberOne_four.value**2) + (numberTwo_four.value**2)))
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(hip);
    createP.appendChild(resultPrint);
    divFour.appendChild(createP);
}

update_four.addEventListener("click", four)