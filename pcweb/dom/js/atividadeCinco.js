/* Número três */
const numberOne_five = document.querySelector("#numOne_Five")
const numberTwo_five = document.querySelector("#numTwo_Five")
const update_five = document.querySelector("#confirm_Five");
const divFive = document.querySelector("#five")
const five = () => {
    const salario = (numberTwo_five.value * numberOne_five.value) / 100
    const newSalario = parseFloat(salario) + parseFloat(numberOne_five.value);  
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(newSalario);
    createP.appendChild(resultPrint);
    divFive.appendChild(createP);
}

update_five.addEventListener("click", five)