/* Número um */
const numberOne_two = document.querySelector("#numOne_Two")
const numberTwo_two = document.querySelector("#numTwo_Two")
const update_two = document.querySelector("#confirm_Two");
const divOne_two = document.querySelector("#two")
const two = () => {
    let maior;
    if(numberOne_two.value > numberTwo_two.value) {
        maior = numberOne_two.value;
    } else if(numberOne_two.value == numberTwo_two.value) {
        maior = "São iguais";
    }
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(maior);
    createP.appendChild(resultPrint);
    divOne_two.appendChild(createP);
}

update_two.addEventListener("click", two)
