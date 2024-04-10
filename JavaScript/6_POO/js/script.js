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
console.log('-------------------------')

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

// 7 - funçoes como classe - NEW
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro('Ozzy', 'Husky')
console.log(husky)

function Jogador(nome, clube, idolo) {
    this.nome = nome
    this.clube = clube
    this.idolo = idolo
}

const cassio = new Jogador('Cassio', 'Corinthinas', 'sim')
console.log(cassio)
console.log('-------------------------')

// 8 - metodos na funcao construtora
Cachorro.prototype.uivar = function() {
    console.log('Auuuu!')
}

console.log(Cachorro.prototype)
husky.uivar()
console.log('-------------------------')

// 9 - classes es6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const Jeff = new CachorroClasse('Jeff', 'Pitbull')
console.log(Jeff)
console.log(Object.getPrototypeOf(Jeff))
console.log('-------------------------')
class JogadorClasse {
    constructor(nome, clube, idade, gols) {
        this.nome = nome
        this.clube = clube
        this.idade = idade
        this.gols = gols
    }
}

const ney = new JogadorClasse('Neymar', 'Al Hilal', 32, 420)
console.log(ney)
console.log('-------------------------')

// 10 - mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }

}

const scania = new Caminhao(6, 'Vermelha')
console.log(scania)
scania.descreverCaminhao()

Caminhao.motor = 4 

const c2 = new Caminhao(4, 'Preto')
console.log(c2)

console.log(c2.motor)
Caminhao.prototype.motor = 4.0
const c3 = new Caminhao(6, 'Azul')
console.log(c3)
console.log(c3.motor)
console.log('-------------------------')

class phelipe {
    constructor(hillux, faculdade, onibus) {
        this.hillux = hillux
        this.faculdade = faculdade
        this.onibus = onibus
    }
    dirigindo() {
        console.log(`Quando eu saio da ${this.faculdade}, eu vou embora de ${this.hillux} ou de ${this.onibus}.`)
    }
}

const lipe = new phelipe('Hillux', 'faculdade', 'onibus')
console.log(lipe)
lipe.dirigindo()  

// 11 - override
class Humano {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const phelipe = new Humano('Phelipe', 19)
console.log(phelipe)

Humano.prototype.idade = 'Não definida'
console.log(phelipe.idade)
console.log(Humano.prototype.idade)

class Carros {
    constructor(modelo, marca, valor, ano, KM) {
        this.modelo = modelo
        this.marca = marca
        this.valor = valor
        this.ano = ano
        this.KM = KM
    }
    comprandoCarro() {
        console.log(`Acabei de comprar um ${this.modelo}, da marca ${this.marca}. Eu dei sorte, pois paguei ${this.valor} no leilão. Pra um carro no ano de ${this.ano}, está ótimo. Com ${this.KM} rodados.`)      
    }
}

const Camaro = new Carros('Camaro', 'Chevrolet', '120.000.00', 2018, '92 mil KM')
console.log(Camaro)
Camaro.comprandoCarro()
Carros.prototype.modelo = 'Fox'
console.log(Camaro.modelo)
console.log(Carros.prototype.modelo)*/

// 12 - Symbol
class Aviao {
    constructor(marca, turbina) {
        this.marca = marca
        this.turbina = turbina
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao('Boeing', 10)
console.log(boeing)
console.log(boeing[asas])
console.log('-------------------------')

class Escola {
    constructor(nome, alunos) {
        this.nome = nome
        this.alunos = alunos
    }
}

const ipe = new Escola('Colégio IPÊ', 1500)
console.log(ipe)
const salas = Symbol()
const temaDoColegio = Symbol()
Escola.prototype[salas] = 30
Escola.prototype[temaDoColegio] = 'Viver para Cristo'
console.log(ipe[salas])
console.log(ipe[temaDoColegio])
console.log('-------------------------')

// 13 - getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }
    get exibirTítulo() {
        return `Você está lendo: ${this.titulo}`
    }
    set adicionarTags(tags) {
        const tagsArrays = tags.split(', ')
        this.tags = tagsArrays
    }
}

const myPost = new Post('Algum post', 'É um post sobre programação')
console.log(myPost)
console.log(myPost.exibirTítulo)
myPost.adicionarTags = 'programação, JavaScript, Python'
console.log(myPost) 
console.log('-------------------------')

class person {
    constructor(nome, idade, sobreVida) {
        this.nome = nome
        this.idade = idade
        this.sobreVida = sobreVida
    }
    get curiosidades() {
        return `Um parceiro, que eu considero irmão de outra mãe <3`
    }
    set addFrase(sobreVida) {
        const fraseArray = sobreVida.split(', ')
        this.sobreVida = fraseArray
    }
}

const dudu = new person('Eduardo', 19)
console.log(dudu)
console.log(dudu.curiosidades)
dudu.addFrase = 'Um cara foda, que admiro muito.'
console.log(dudu)
console.log('-------------------------')

// 14 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, 'Shark')
console.log(shark)
console.log('-------------------------')

class animaisAquaticos {
    constructor(nadadeiras) {
        this.nadadeiras = nadadeiras
    }
}

class peixePalhaço extends animaisAquaticos{
    constructor(nadadeiras, nome) {
        super(nadadeiras, nadadeiras)
        this.nome = nome
    }
}

const nemo = new peixePalhaço(2, 'Nemo')
console.log(nemo)
console.log('-------------------------')