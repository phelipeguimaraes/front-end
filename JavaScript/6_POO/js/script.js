// 1 - métodos
/*const animal = {
    nome: 'Bob',
    latir: function() {
        console.log('au au')
    }
}

console.log(animal)
console.log(animal.nome)
animal.latir()
console.log('-------------------------')

// 2 - aprofundando em métodos
const pessoa = {
    nome: 'Phelipe',
    getNome: function() {
        return this.nome
    },

    setNome: function(novoNome) {
        this.nome = novoNome
    }
}
console.log(pessoa.nome)
console.log(pessoa.getNome())
pessoa.setNome('Guilherme')
console.log(pessoa.getNome())
console.log('-------------------------')

const veiculo = {
    nome: 'Onix',
    modelo: 2019,
    câmbio: 'Automático',
    KM: 50000,
    getModel: function() {
       return this.modelo 
    },
    getCam: function() {
        return this.câmbio
    },
    setCam: function(newCam) {
        this.câmbio = newCam
    }
    
}

console.log(veiculo)
console.log(veiculo.getModel())
console.log(veiculo.getCam())
veiculo.setCam('Manual')
console.log(veiculo.getCam())
console.log(veiculo.getCam(veiculo.setCam('Câmbio automático')))
console.log('-------------------------')

// 3 - prototype
const text = 'abc'
console.log(Object.getPrototypeOf(text))

const bool = true
console.log(Object.getPrototypeOf(bool))

const arr = []
console.log(arr.length)
console.log(Object.getPrototypeOf(arr))
console.log('-------------------------')

// 4 - mais sobre prototype
const myObject = {
    a: 'b'
}
console.log(Object.getPrototypeOf(myObject))
console.log(Object.getPrototypeOf(myObject) === Object.prototype)
console.log('-------------------------')

const mySecondObject = Object.create(myObject)
console.log(mySecondObject)
console.log(mySecondObject.a)
console.log(Object.getPrototypeOf(mySecondObject) === myObject)
console.log('-------------------------')*/

// 5 - classes básicas
const cachorro = {
    raca: null,
    patas: 4
}
const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = 'Pastor Alemão'
console.log(pastorAlemao)
console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)
bulldog.raca = 'Bulldog'
console.log(bulldog)
console.log('-------------------------')

const jogador = {
    nome: 'Neymar',
    idade: 32,
    clube:'Al-Hilal'
}

const cris = Object.create(jogador)
cris.nome = 'Cristiano Ronaldo'
cris.idade = 39
cris.clube = 'Al-Nassr'
cris.gols = 885
cris.assistências = 220
console.log(cris)

const messi = Object.create(jogador)
messi.nome = 'Lionel Messi'
messi.idade = 36
messi.clube = 'Inter Miami'
messi.gols = 850
messi.assistências = 340
console.log(messi)
console.log('-------------------------')

// 6 - função como classe - função construtora
function criarCachorro(nome, raca) {
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro('Bob', 'Vira lata')
console.log(bob)
const jack = criarCachorro('Jack', 'Poodle')
console.log(jack)
console.log(Object.getPrototypeOf(jack))
console.log('-------------------------')

function criarVeiculo(modelo, cambio, KM) {
    const carro = Object.create({})
    carro.modelo = modelo
    carro.cambio = cambio
    carro.KM = KM
    return carro
}

const onix = criarVeiculo('Onix', 'automático', 50000)
console.log(onix)
console.log(criarVeiculo('Corolla', 'automático', 40000))
console.log('-------------------------')