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
    portas: 2,
    nome: "Celtinha"
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

    for (let i = 0; i < arguments.length; i++) { //usando for
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

// usando "for in" para objetos
function forInExemplo(obj) {
    for (prop in obj) {
        console.log(prop, "\n", obj[prop])
    }
}

forInExemplo(objetoNome)

// usando "for of" para iteráveis
function forOfExemplo(iteravel) {
    for (elemento of iteravel) {
        console.log(elemento)
    }
}

forOfExemplo(FIRST_NAME)

forOfExemplo(vetor)

function whileExemplo() {
    let num = 0

    while (num <= 3) {
        console.log(num)
        num++
    }
}

whileExemplo()

// "do while" sempre executa primeira iteração mesmo que não satisfaça o while
function doWhileExemplo() {
    let num = -1

    do {
        console.log(num)
        num--
    } while (num > 0);
}

doWhileExemplo()

function maiorQueDez(num) {  // função para treinar uso de if e else
    const NEGATIVO = num < 0
    const MAIOR_QUE_DEZ = num > 10
    
    if (NEGATIVO) {
        return "\n Esse número é negativo."
    } else if (!NEGATIVO && MAIOR_QUE_DEZ) {
        return "\n Esse número é positivo e maior que 10."
    }

    return "\n Este número é positivo e menor que 10."
}

console.log(maiorQueDez(-1), maiorQueDez(5), maiorQueDez(20))

function getFood(food) { // função para treinar uso de switch
    switch (food) {
        case 1:
            return "\n arroz"
        case 2:
            return "\n feijão"
        case 3:
            return "\n batata frita"
        case 4:
            return "\n chuchu refogado"
        default:
            return "\n marmita pronta"
    }
}

console.log(getFood(3), getFood("3"))

// usando método "this" em objetos
const pessoa = {
    firstName: "Franciele",
    lastName: "Silva",
    id: 23,
    fullName: function () {
        return this.firstName + " " + this.lastName
    },
    getId: function () {
        return this.id
    }
}

console.log(pessoa.fullName(), pessoa.getId())

function getSomething() {
    console.log(this.nome)
}

getSomething.call(objeto)
getSomething.call(carro)

function idade(today) {
    console.log(today - this.ano)
}

idade.call(carro,2021)
idade.apply(carro,[2021]) // usando apply tem que colocar []

// usando "bind"
const retornaIdade = function () {
    return console.log(2021 - this.ano)
}

let Bhe = retornaIdade.bind({ano: 1952})

Bhe()

// usando "arrow function"
const sayHello = () => "Hello :) !!!"

const sum = (a, b) => a + b

console.log(sayHello(), sum(10, 34))

// usando "map"
const myMap = new Map()

myMap.set('laranja', 'fruta');
myMap.set('gato', 'animal')

console.log(myMap, myMap.get('laranja'))

myMap.delete('gato')

console.log(myMap, myMap.get('gato'))

// usando "set"

const myArray = [1, 2, 1, 3, 3, 6, 7, 1, 9]

const mySet = new Set(myArray)

console.log(myArray, mySet)

mySet.add(4)
mySet.delete(9)

console.log(mySet, mySet.has(5))

// trabalhando com classes
class veiculo {
    constructor (type = 'veiculo') {
        this.type = type 
    }

    get type() {
        return this._type
    }

    set type(val) {
        this._type = val.toUpperCase()
    }

    Descrever () {
        console.log('Isto é um',this.type)
    }

    Ligar() {
        console.log('Gire a chave.')
    }
}

let onibus = new veiculo('onibus')

// usando herança

class bicicleta extends veiculo {
    constructor() {
        super('bicicleta')
    }

    Descrever() {
        super.Descrever()
    }

    Ligar() {
        console.log('Comece a pedalar.')
    }
}

let myBike = new bicicleta

// criando uma promisse simples

const minhaPromessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 1000);
});

// criando uma função assíncrona com um await

async function resolvPromise() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    const resolved = await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.name));

    return console.log(resolved);
}

resolvPromise()

console.log(onibus.type)
onibus.Descrever()
onibus.Ligar()

console.log(myBike.type)
myBike.Descrever()
myBike.Ligar()
