/* Número um */
const numberOne = document.querySelector("#numOne")
const numberTwo = document.querySelector("#numTwo")
const update = document.querySelector("#confirm");
const divOne = document.querySelector("#one")
const one = () => {
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode((parseFloat(numberOne.value) + parseFloat(numberTwo.value)));
    createP.appendChild(resultPrint);
    divOne.appendChild(createP);
}

update.addEventListener("click", one)