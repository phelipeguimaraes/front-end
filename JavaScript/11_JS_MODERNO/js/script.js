// 1 - var, let e const
var x = 10
var y = 15

if(y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(a)
}
console.log(a)

function logName() {
    const name = 'Phelipe'
    console.log(name)
}

const name = 'Guilherme'
logName()
console.log(name)
console.log('--------------------------------') 

// 2 - arrow function
/*const sum =  function(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if(name) {
        return `Hello ${name}`
    } else {
        return 'Hello'
    }
}

console.log(greeting('Phelipe'))
console.log(greeting())

const user = {
    name: 'Theo',
    sayUserName() {
        setTimeout(function() {
            console.log(this)
            console.log(`Username: ${this.name}`)
        },  1000)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 2000)
    }

}
user.sayUserName()
user.sayUserNameArrow()
console.log('--------------------------------') */

// 3 - filter
const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})
console.log(highNumbers)

const users = [
    {name: 'Phelipe', available: true},
    {name: 'Guilherme', available: false},
    {name: 'Yuri', available: true},
    {name: 'Dudu', available: false},
    {name: 'Manoel', available: true},
]

const availableUsers = users.filter((user) => user.available)
console.log(availableUsers)