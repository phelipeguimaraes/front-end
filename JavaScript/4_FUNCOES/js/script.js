// 1 - criando uma função
/*function minhaFuncao() {
    console.log('Testando')
}

minhaFuncao()
minhaFuncao()

const minhaFuncaoEmVariavel = function() {
    console.log('Função em variável')
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro('Imprimindo alguma coisa')
funcaoComParametro('Outra função')
console.log('------------------------------')

// 2 - Return
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma(a, b)
console.log(resultado)
console.log(soma(c, d))
console.log('------------------------------')

// 3 - escopo da função
let y = 10
function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é: ${y}`)
}
testandoEscopo()
console.log(`Y fora da função é: ${y}`)

let nome = 'Phelipe'
function string() {
    let nome = 'Yuri'
    console.log(`minha string ${nome}`)
}

string()
console.log(`minha string ${nome}`)
console.log('------------------------------')

// 4 - escopo aninhado
let m = 10
function  escopoAninhado() {
    let m = 20

    if(true) {
        let m = 30

        if(true) {
            let m = 40
            console.log(m)
        }

        console.log(m)
    }
    console.log(m)
}

escopoAninhado()
console.log(m)
console.log('------------------------------')

// 5 -arrow function
const testeArrow = () => {
    console.log('Está é uma arrow function')
}

testeArrow()

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log('Par')
        return
    }
    console.log('ímpar')
}

parOuImpar(5)
parOuImpar(10)
console.log('------------------------------')

// 6 - mais sobre arrow function
const raizQuadrada = (x) => {
    return x * x
}

console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x
console.log(raizQuadrada2(7))
console.log(raizQuadrada2(8))

const helloWord = () => console.log('Hello Word')
helloWord()
console.log('------------------------------')

// 7 - parametros opcional
const multiplication = function(m, n) {
    if(n === undefined) {
        return m * 2
    } else {
        return m * 2
    }
}

console.log(multiplication(5))
console.log(multiplication(3, 2))

const greeting = (namee) => {
    if(!namee) {
        console.log('Olá!')
        return
    }

    console.log(`Olá ${namee}!`)

}

greeting()
greeting('Phelipe')*/

// 8 - valor default
const customGreeting = (name, greet = 'Olá') => {
    return `${greet}, ${name}!`
}

console.log(customGreeting('Phelipe'))
console.log(customGreeting('Joao', 'Bom dia'))

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text)
    }
}

repeatText('oi')
repeatText('5x agora', 5)
console.log('---------------')