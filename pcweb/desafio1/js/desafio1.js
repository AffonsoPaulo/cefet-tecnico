const newDate = new Date();
const main = document.querySelector(".one")
const date = document.querySelector(".inputOne");
const confirm = document.querySelector(".confirmOne");
let livedHours;


/**
 * 
 * @returns 
 * 
 * 
 */
const getBirthday = () => {
    const strBirth = date.value
    const yearBirth = parseInt(strBirth.split("-")[0])
    const monthBirth = parseInt(strBirth.split("-")[1]) - 1
    const dayBirth = parseInt(strBirth.split("-")[2])

    return new Date(yearBirth, monthBirth, dayBirth)
}

const getDiffHours = (date1, date2) => {
    const diference = (now.getTime() - birthDay.getTime())
    return (diference / (1000 * 60 * 60)).toFixed(0)
}

confirm.addEventListener("click", () => {
    let livedHours = getDiffHours()
    const now = new Date()
    const outcome = document.querySelector("#outcome")
    const text = document.createTextNode(`O total de horas vividas foram ${livedHours}`)
    outcome.appendChild(text)
})
/* confirm.addEventListener("click", dateH)
confirm.addEventListener("click", dateM)
confirm.addEventListener("click", dateY) */
/* confirm.addEventListener("click", converter) */

/* const oldDateY = () => {
    const dateYear = dateInput.slice(0, 4)
    console.log(dateYear)
    return dateYear
}
const oldDateM = () => {
    const dateMonth = dateInput.slice(5, 7)
    console.log(dateMonth)
    return dateMonth
}

const oldDateD = () => {
    const dateDay = dateInput.slice(8,10)
    console.log(dateDay)
    return dateDay
}
const dateH = () => {
    const dateHours = newDate.getHours();
    console.log(dateHours);
    return dateHours;
}

const dateD = () => {
    const dateDay = newDate.getDay();
    console.log(dateDay)
    return dateDay
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
    const saveYear = dateY();
    const monthInHours = (24 * 30) * saveMonth;
    const yearsInMonths = 
    console.log(monthInHours); 
} */