/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

const traverseArray = (array) => {
    for (const item of array) {
        console.log(item)
    }
}

// 1. Captura una excepción utilizando try-catch
try {
    traverseArray(undefined)
} catch (error) {
    console.log("1 " + error)
    console.log("2 " + error.message)
}
console.log("seguimos vivos!\n")

// 2. Captura una excepción utilizando try-catch y finally
try {
    let arrayOfNumbers = []
    const arr2 = [1, "2"]
    for(const item of arr2){
        if(typeof item !== "number") throw new Error("Solo se permiten numeros")
        arrayOfNumbers.push(item)
    }
    console.log(`Array of numbers: ${arrayOfNumbers}`)
} catch (error) {
    console.error("error: " + error.message)
} finally {
    console.log("Esto se ejecuta siempre, haya error o no\n")
}

// 3. Lanza una excepción genérica
try{
    throw new Error("Error generico")
} catch(error){
    console.log(error.message + "\n")
}

// 4. Crea una excepción personalizada
class DomainError extends Error {
    constructor(message) {
        super(message)
        this.type = "DomainError"
    }
}

function superiorOrderFunc (func, param){
    if(!Array.isArray(param)) throw new DomainError("No es un array")
    else func(param)
}

// 5. Lanza una excepción personalizada
try {
    superiorOrderFunc(traverseArray, undefined)
} catch (error) {
    console.log(error.type + ": " + error.message)
}
console.log()

class Persona{
    #name
    #age
    
    constructor(name, age){
        this.#name = name
        this.#age = age
    }
    
    get name(){
        return this.#name
    }
    
    get age(){
        return this.#age
    }
}

class InstanceError extends Error{
    constructor(message){
        super(message)
        this.type = "InstanceError"
    }
}

// 6. Lanza varias excepciones según una lógica definida
function validateData(data){
    if(!(data instanceof Persona)){
        throw new InstanceError(`Se esperaba ${new Persona().constructor.name}, se recibió ${data.constructor.name}`)
    }
    if(typeof data.name !== "string"){
        throw new TypeError("El nombre debe ser de tipo string, se recibió " + typeof data.name)
    }
    if(typeof data.age !== "number"){
        throw new TypeError("La edad debe ser de tipo number, se recibió " + typeof data.age)
    }
}

try {
    const personas = [
        new Persona("Carlos", 20),
        //new Persona(22, "John"),
        new Persona(),
        //new String("hola") 
    ]
    for (const persona of personas){
        validateData(persona)
        console.log(`${persona.name} tiene ${persona.age} años`)
    }
} catch (error){
    // 7. Captura varias excepciones en un mismo try-catch
    if(error instanceof InstanceError){
        console.log(error.type + ": " + error.message)
    }
    else if(error instanceof TypeError){
        console.log(error.name + ": " + error.message)
    }
    else console.log("Error desconocido: " + error.message)
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log()
const values = ["1.5", "2.3", "tres", "4.0", "cinco"]

for(const value of values){
    try{
        const number = parseFloat(value)
        if(isNaN(number)) throw new Error("Valor no numérico")
        console.log(`Valor convertido: ${number}`)
    } catch(error){
        console.log(`Error al convertir "${value}": ${error.message}`)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class MissingPropertyError extends Error {
    constructor(message) {
        super(message)
        this.name = "MissingPropertyError"
    }
}

function hasProperty(obj, prop) {
    if (!(prop in obj)) {
        throw new MissingPropertyError(`La propiedad "${prop}" no existe en el objeto`)
    }
}

console.log()

try{
    const obj = { name: "Alice", age: 30 }
    hasProperty(obj, "email") 
    console.log("Objeto completo")
} catch(error){
    if(error instanceof MissingPropertyError){
        console.log(error.name + ": " + error.message)
    } else {
        console.log("Error desconocido: " + error.message)
    }
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
console.log()
const isNumber = (number) => {
    console.log("Se recibió: " + number.constructor.name)
    if(typeof number !== "number"){
        throw new TypeError("Se requiere un numero")
    }
    return true;
}
const arr =[1, "str", "str2", {}, {}, [], [], new Persona(), new Persona(), new Map()]
let attempt = 0
let wasError = false
do{
    try{
        console.log(`Intento ${attempt + 1}`)
        const num = arr[Math.floor(Math.random() * 10)]
        if (isNumber(num)) console.log("Todo bien")
        wasError = false
    } catch (error){
        console.log(error.message)
        wasError = true
    }
    attempt++
}while(attempt < 10 && wasError);
if(attempt === 10) console.log("Se alcanzó el número máximo de intentos")
