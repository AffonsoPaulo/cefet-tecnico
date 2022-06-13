const newDate = new Date();
const date = document.querySelector(".input1");
const confirm = document.querySelector(".confirm1");

const dateNas = () => {
    const dateInput = date.value;
    console.log(dateInput)
}

const dateH = () => {
    const dateHours = newDate.getHours();
    console.log(dateHours);
    return dateHours;
}

const dateM = () => {
    const dateMonth = newDate.getMonth();
    console.log(dateMonth);
    return dateMonth;
}

const dateY = () => {
    const dateYear = newDate.getFullYear();
    console.log(dateYear);
    return dateYear;
}

const converter = () => {
    const saveMonth = dateM();
    const monthInHours = (24 * 30) * saveMonth;
    console.log(monthInHours); 
}

confirm.addEventListener("click", dateNas)
confirm.addEventListener("click", dateH)
confirm.addEventListener("click", dateM)
confirm.addEventListener("click", dateY)
confirm.addEventListener("click", converter)