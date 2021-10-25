let vetor = [23, 11, 0, 53, "74", 50, 9], vetor2 = [], vetor3 = [23, 11, 0, 53, 74, 50, 9]

function parSubstitui(array) {
    if (!array || !array.length) return -1

    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) != typeof(0)) return `array[${i}] não é número.`     
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log(`array[${i}] já é 0.`)
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0.`)
            array[i] = 0
        }
        
    }
    return array
}

console.log(parSubstitui(vetor))
console.log(parSubstitui(vetor2))
console.log(parSubstitui(vetor3))