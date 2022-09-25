const sumSubmit = document.querySelector('#submitSum')
const sumOddSubmit = document.querySelector('#submitSumOdd')

const sum = () => {
    const sumInputOne = document.querySelector('#sumInputOne').value
    const sumInputTwo = document.querySelector('#sumInputTwo').value
    const sumInputThree = document.querySelector('#sumInputThree').value
    const sumInputFour = document.querySelector('#sumInputFour').value
    const sumInputFive = document.querySelector('#sumInputFive').value
    const sumInputSix = document.querySelector('#sumInputSix').value

    let total = 0
    if (typeof sumInputOne !== undefined) {
        total = total + Number(sumInputOne)
    }
    if (typeof sumInputTwo !== undefined) {
        total = total + Number(sumInputTwo)
    }
    if (typeof sumInputThree !== undefined) {
        total = total + Number(sumInputThree)
    }
    if (typeof sumInputFour !== undefined) {
        total = total + Number(sumInputFour)
    }
    if (typeof sumInputFive !== undefined) {
        total = total + Number(sumInputFive)
    }
    if (typeof sumInputSix !== undefined) {
        total = total + Number(sumInputSix)
    }

    console.log(total)
    total = 0
}

sumSubmit.addEventListener("click", () => {
    sum()
})

const sumOdd = () => {
    const sumOddInputOne = document.querySelector('#sumOddInputOne').value
    const sumOddInputTwo = document.querySelector('#sumOddInputTwo').value
    const sumOddInputThree = document.querySelector('#sumOddInputThree').value
    const sumOddInputFour = document.querySelector('#sumOddInputFour').value
    const sumOddInputFive = document.querySelector('#sumOddInputFive').value
    const sumOddInputSix = document.querySelector('#sumOddInputSix').value
    let total = 0
    if (typeof sumOddInputOne !== undefined && (sumOddInputOne % 2) != 0) {
        total = total + Number(sumOddInputOne)
    }
    if (typeof sumOddInputTwo !== undefined && (sumOddInputTwo % 2) != 0) {
        total = total + Number(sumOddInputTwo)
    }
    if (typeof sumOddInputThree !== undefined && (sumOddInputThree % 2) != 0) {
        total = total + Number(sumOddInputThree)
    }
    if (typeof sumOddInputFour !== undefined && (sumOddInputFour % 2) != 0) {
        total = total + Number(sumOddInputFour)
    }
    if (typeof sumOddInputFive !== undefined && (sumOddInputFive % 2) != 0) {
        total = total + Number(sumOddInputFive)
    }
    if (typeof sumOddInputSix !== undefined && (sumOddInputSix % 2) != 0) {
        total = total + Number(sumOddInputSix)
    }

    console.log(total)
    total = 0
}

sumOddSubmit.addEventListener("click", () => {
    sumOdd()
})