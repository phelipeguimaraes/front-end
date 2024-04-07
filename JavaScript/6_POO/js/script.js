// 1 - métodos
const animal = {
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