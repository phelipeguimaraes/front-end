// 1 - criando uma função
function minhaFuncao() {
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