var a=1
var b=3

if (a===1) {
    var a=10 //acesso global
    let b=13 //acesso apenas dentro do if

    console.log(a)
    console.log(b)
}

console.log(a)
console.log(b)

const FIRST_NAME = "Franciele"

console.log(FIRST_NAME)

let um = "um"

console.log(typeof(um))

um = 1

console.log(typeof(um))

let nome = "Fran", sobrenome = "Silva"

let = concatenado = nome.concat(sobrenome)

console.log(concatenado, typeof(concatenado), concatenado.length, concatenado[0],concatenado.split(""))

concatenado = nome + " " + sobrenome + " \"texto\"" + "\n" 

console.log(concatenado, typeof(concatenado), concatenado.length, concatenado[1],concatenado.split(" "))

concatenado = `${nome} ${sobrenome}`

console.log(concatenado, typeof(concatenado), concatenado.length, concatenado[1],concatenado.includes("Silva"))

let palavra = new String("exemplo")

console.log(typeof(palavra), palavra, palavra.length, palavra[2],palavra.replace("e", "E"))

let num1 = 13; num2 = 2

console.log(num1 % num2, Math.sqrt(num1))

let validacao = 3 === 1

console.log(validacao)

validacao = 3 > 1

console.log(validacao, !validacao)

let array = []

array.push(10)
array.push(9)
array.push(8)
array.push(7)

console.log(array)

array.pop()

console.log(array)

array.shift()
array.unshift(23)

console.log(array, array.every(item => item === 8), array.some(item => item === 8), array.reverse())

let objeto = {}

console.log(typeof(objeto))

objeto.nome = "Franciele"
objeto.idade = 33

console.log(objeto, Object.values(objeto), Object.keys(objeto))

let carro = {
    modelo: "Celta",
    ano: 2013,
    portas: 2
}

let motor = "combustível"

carro[motor] = "gasolina"

console.log(carro.ano, carro['modelo'], carro)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          