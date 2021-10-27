function comparaNumeros(num1, num2) {
    if (num1 === null || num1 === undefined || typeof(num1) != typeof(0) || num2 === null || num2 === undefined || typeof(num2) != typeof(0)) return "Defina dois números."

    let igualdade = "",soma = num1 + num2, compara10 = 'menor', compara20 = 'menor'

    if (num1 !== num2) {
        igualdade = "não"
    }

    if (soma > 10) {
        compara10 = "maior"
    }

    if (soma > 20) {
        compara20 = "maior"
    }
    
    return `Os números ${num1} e ${num2} ${igualdade} são iguais. Sua soma é ${soma}, que é ${compara10} que 10 e ${compara20} que 20.`
} 

console.log(comparaNumeros())
console.log(comparaNumeros(1))
console.log(comparaNumeros(1, "a"))
console.log(comparaNumeros(0,0))
console.log(comparaNumeros(0,11))
console.log(comparaNumeros(11,11))