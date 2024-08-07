// 1 - Variáveis
let nome = 'Phelipe'

console.log('Phelipe')
console.log(nome)

nome = 'Phelipe Guimarães'
console.log(nome)

const idade = 19
console.log(idade)
console.log(typeof nome)
console.log(typeof idade)
console.log('-------------------------------------')

// 2 - mais sobre variáveis
// let 2teste = 'inválido'
//let @teste = 'inválido'

let a = 10, b = 20, c = 30
console.log(a, b, c)

const namecomplet = 'Phelipe Vieira Guimarães'
const nameComplet = 'Zeca Pagodinho'
console.log(namecomplet)
console.log(nameComplet)

let _teste = 'ok'
let $teste = 'ok tbm'
console.log(_teste, $teste)
console.log('-------------------------------------')

// 3 - prompt
/*const age = prompt("Digite tua idade")
console.log(`Você tem ${age} anos`)
console.log('-------------------------------------')

// 4 - alert
const n = 20
alert(`é o número ${n}`) */

// 5 - Math
console.log(Math.max(4, 2, 10, 23, 1, 9))
console.log(Math.floor(6.74))
console.log(Math.ceil(8.04))
console.log('-------------------------------------')

/* 6 - console
console.log('teste!')
console.error('erro ai!!')
console.warn('aviso!')
console.log('-------------------------------------')*/

// 7 - if
const m = 10;

if (m > 5) {
    console.log('M é maior que 5')
}

const user = 'João'
if(user === 'João'){
    console.log('Boa tarde João')
}

if(user === 'Maria') {
    console.log('Olá Maria')
}
console.log('-------------------------------------')

// 8 - else
const loggedIn = false
if (loggedIn) {
    console.log('Está autenticado!')
} else {
    console.log('Não está autenticado!')
}

const q = 10
const w = 15

if(q > 5 && w > 20) {
    console.log('Números maiores')
} else {
    console.log('Os números não são mais maiores')
}
console.log('-------------------------------------')

// 9 - else if
if(1 > 2) {
    console.log('teste')
} else if(2 > 3) {
    console.log('teste 2')
} else if(5 > 1) {
    console.log('Agora sim!')
}

const userName = 'Phelipe'
const userAge = 19
if(userName === 'José') {
    console.log('Bem vindo, José!')
} else if (userName === 'Phelipe' && userAge === 19) {
    console.log(`Olá ${userName}, você tem ${userAge} anos!`)
} else {
    console.log('Nenhuma condição aceita!')
}
console.log('-------------------------------------')

// 10 - while
let p = 0
while(p < 5) {
    console.log(`Repetindo ${p}`)
    p++
}
// loop infinito
let x = 10
while(x < 5) {
    console.log(`Imprimindo ${x}`)
    x++
}
console.log('-------------------------------------')

// 11 - do while
let cont = 10
do {
    console.log(`Valor de cont: ${cont}`)
    cont--
} while(cont > 1)
console.log('-------------------------------------')

// 12 - for
for(let t = 0; t < 10; t++) {
    console.log(`Repetindo pela ${t}`)
}

let r = 10
for(r; r > 0; r--) {
    console.log(`O r está diminuindo ${r}`)
}
console.log('-------------------------------------')

// 13 - identação
for(let u = 0; u < 10; u++) {
    if(u * 2 > 10) {
        console.log(`Maior que 10! ${u}`)
    } else {
        if(u / 2 === 0) {
            console.log('Deu 0')
        }
    }
}
console.log('-------------------------------------')

// 14 - break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)

    if (g === 12) {
        console.log('O g é 12!')
        break
    }
}
console.log('-------------------------------------')

// 15 - continue
for(let s = 1; s < 10; s++) {
    // operador resto = %
    if(s % 2 === 0) {
        console.log(`Número par! ${s}`)
        continue
    } 
    console.log(s)
}
console.log('-------------------------------------')

// 16 - switch
const job = 'Programador'

switch(job) {
    case 'Jogador':
        console.log('Você é jogador!')
        break
    case 'Programador':
        console.log('Você é um programador!')
        break
    case 'Engenheiro':
        console.log('Você é um engenheiro!')
        break
    default:
        console.log('Profissão não encontrada!')
}

// switch 'errado'
const l = 100

switch(l) {
    case 200:
        console.log('L é 200!')
    case 100:
        console.log('L é 100!')
    case 50: 
    console.log('L é 50!')
    default:
        console.log('Não foi encontrado!')
}
console.log('-------------------------------------')