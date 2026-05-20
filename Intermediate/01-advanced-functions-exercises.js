/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
import createCounter from "./my_modules/counter.js"
import deleteVowels from "./my_modules/vowel-deleter.js"
import { insertUser } from "./my_modules/db.js"

const counter = createCounter()
console.log(typeof counter)

// aqui retorno la funcion
function registerUser(name) {
    const key = `${counter.next().value}${deleteVowels(name)}`
    return insertUser(key, name)
}

const users = ["Cristofer", "John", "Wick"]
users.forEach(user => {
    console.log(registerUser(user))
})

// 2. Implementa una función currificada que multiplique 3 números
console.log("currying")
function multiply(x) {
    return function (y) {
        return function (z) {
            return x * y * z
        }
    }
}
console.log(multiply(2)(3)(4)) // 24

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function pow(number, exponent) {
    if (exponent < 0) throw new Error("Esta función no soporta exponentes negativos")
    if (exponent === 0) return 1
    return number * pow(number, exponent - 1)
}
try {
    console.log(pow(2, -1))
} catch (error) {
    console.log(error.message)
}
console.log(pow(2, 0))
console.log(pow(2, 1))
console.log(pow(2, 2))
console.log(pow(2, 3))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
console.log("closures")
function createCounter2(start) {
    let i = start;

    return {
        increment: () => ++i,
        decrement: function () { return --i },
        getValue: function () {
            return i
        }
    }
}
const counter2 = createCounter2(5)
console.log(counter2.increment())
console.log(counter2.decrement())
console.log(counter2.getValue())


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
console.log("Rest params")
function sumManyTimes(multiplier, ...numbers){
    let sum = 0

    // "numbers" es un array de los elementos restantes, por lo tanto ya es iterable 
    for (const number of numbers) {
        sum += number
    }
    return multiplier * sum
}
console.log(sumManyTimes(4, 3, 2, 1))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function suma(callback, ...numbers){
    let sum = 0
    
    numbers.forEach(element => {
        sum = sum + element
    })

    callback(sum)
}

suma((result) => console.log(`El resultado es: ${result}`), 
    5, 10, 20)

// 7. Desarrolla una función parcial
function getFullName(name){
    return function(lastname){
        return `${name} ${lastname}`
    }
}

console.log(`Hola ${getFullName("Cristofer")("Montes")}`)

// 8. Implementa un ejemplo que haga uso de Spread
const personas = [
    {name: "Jorge"},
    {name: "Rodrigo"},
    {name: "Ana"}
]

console.log(...personas) // esto es diferente de console.log(personas)

// 9. Implementa un retorno implícito
const echo = (value) => value

console.log(echo("echo"))

// 10. Haz uso del this léxico
class Persona {
    #magicNumber
    printMagicNumber(){
        console.log("Obteniendo tu número mágico...")
        this.#magicNumber = Math.floor(Math.random() * 100) + 1
        setTimeout(() => {
            console.log(`Tu número mágico es: ${this.#magicNumber}`)
        }, 5000)
    }
}
const p = new Persona()
p.printMagicNumber()


const obj = {
    name: "Objeto",
    printNameWithDelay: function() {
        setTimeout(() => {
            console.log(`El nombre del objeto es: ${this.name}`)
        }, 2000)
    }
}

obj.printNameWithDelay()
