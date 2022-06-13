/* Número três */
const numberOne_three = document.querySelector("#numOne_Three")
const update_three = document.querySelector("#confirm_Three");
const divThree = document.querySelector("#three")
const three = () => {
    let aux = 0;
    let primo;
    for (let index = 0; index <= numberOne_three.value; index++) {
        if(numberOne_three.value % index == 0) {
            aux++
        }
        if(aux == 2) {
            primo = "É primo"
        } else {
            primo = "Não é primo"
        }
    }
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(primo);
    createP.appendChild(resultPrint);
    divThree.appendChild(createP);
}

update_three.addEventListener("click", three)