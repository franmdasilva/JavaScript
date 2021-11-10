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

const soma = function (a, b) { //função anônima
    return a + b
}

console.log("A soma de 2 + 3 é: ",soma(2, 3));

( // função autoinvocável
    function () {
        let nome = "Franciele"
        return console.log(nome)
    }
)();

(
    function (a, b) {
        return console.log(`A soma de ${a} + ${b} é: `,a + b)
    }
)(1, 2);

const soma2 = (
    function (a2, b2) {
        return a2 + b2;
    }
)(11, 17);

console.log(soma2)

const calc = function (operacao, n1, n2) { // callback (função composta)
    return operacao(n1,n2)
}

const div = function (n1, n2) {
    return console.log(`A divisão de ${n1} por ${n2} é: `, n1/n2)
}

const resultDiv = calc(div, 47, 99)

function findMin() { // usando o objeto "arguments"
    let min = Infinity

    for (let i = 0; i < arguments.length; i++) {
       if (arguments[i] < min) {
           min = arguments[i]
       }
    }
    return min
}

let vetor = [1, -2, 3, -4, 5, 6, 7, 8, 9, -1]

console.log(findMin(), findMin(9, 4, 2, 99, 3))
console.log(findMin(...vetor)) // usando spread

function imprimiSegundo(...args) { // usando rest
    console.log(args[2])
}

imprimiSegundo(1, -2, 3)
imprimiSegundo(-4, 5, 6, 7, 8, 9, -1)

const objetoNome = {
    id: 1,
    fullName: {
        firstName: "Ana",
        secondName: "Eduarda",
        familyName: "Gomes"
    }
}

function returnIdade({idade}) {
    return idade
}

console.log(returnIdade(objeto))

function getFirstLast({fullName: {firstName: first, familyName: last}}) {
    return `${first} ${last}`
}

console.log(getFirstLast(objetoNome))