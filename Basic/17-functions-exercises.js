/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
const sum = (a = 0, b = 0) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers")
  }
  return a + b
}
//console.log("The sum of 5 and \"10\" is: ", sum(5, "10")) // TypeError: Both arguments must be numbers
console.log("The sum of 5 and 10 is: ", sum(5, 10))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function getGreaterNumber(numbers){
    if(!Array.isArray(numbers)) {
        throw new TypeError("Expected an array!")
    }
    let greater = -Infinity
    for (const number of numbers){
        if (typeof number !== "number") {
            throw new TypeError("Expected an array of numbers!")
        }
        if(number > greater) greater = number
    }
    return greater
}

//const numbers = "5, 10, 3, 8, 2" // TypeError: Expected an array!
//const numbers = [3, 7, 1, 9, "a"] // TypeError: Expected an array of numbers!
const numbers = [3, 7, 1, 9, 7]
console.log(`The greater in ${numbers} is ${getGreaterNumber(numbers)}`)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function countVowels(str){
    const vowels = "aeiouAEIOU"
    let count = 0
    for (const char of str){
        if(vowels.includes(char)) count++
    }
    return count
}
console.log(`"Hello, World!" has ${countVowels("Hello, World!")} vowels`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function getArrayToUpperCase(lowerCaseStrings){
    if(!Array.isArray(lowerCaseStrings)) {
        throw new TypeError("Expected an array!")
    }
    const upperCaseStrings = []
    for(const str of lowerCaseStrings){
        if (typeof str !== "string") {
            throw new TypeError("Expected an array of strings!")
        }
        upperCaseStrings.push(str.toUpperCase())
    }
    return upperCaseStrings
}

const strings = ["hola", "Como", "eStAs"]
const myStrings = getArrayToUpperCase(["hola", "Como", "eStAs"])
console.log(`The strings [${strings}] in upper case is [${myStrings}]`)
//let myStrings2 = getArrayToUpperCase("hola")
//console.log(myStrings2)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function isPrime(num){
    if (num <= 1) return false
    const limit = Math.sqrt(num)
    for (let i = 2; i <= limit; i++){
        if (num % i === 0) return false
    }
    return true
}
console.log("Is 7 prime? ", isPrime(7))
console.log("Is 101 prime? ", isPrime(101))
console.log("Is 321654987 prime? ", isPrime(321654987))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const getCommonElements = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError("Expected two arrays!")
    }
    const commonElements = []
    for (const element of arr1){
        if (arr2.includes(element) && !commonElements.includes(element)) {
            commonElements.push(element)
        }
    }
    return commonElements
}
const array1 = [1, 2, 3, 4, 5]
const array2 = [4, 5, 6, 7, 8]
console.log(`Common elements between ${array1} and ${array2} are: ${getCommonElements(array1, array2)}`)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const getSumOfEvensInArray = function (array){
    function isEven(number){
        return number % 2 === 0
    }
    
    let sum = 0
    for(const number of array){
        if(isEven(number)) sum += number
    }
    return sum
}

const array = [1, 2, 3, 4, 5, 6]
console.log(`The sum of even numbers in ${array} is ${getSumOfEvensInArray(array)}`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function getSqures(array){
    const squares = []
    for(const number of array) squares.push(number * number)
    return squares 
}
const nums = [1, 2, 3, 4, 5]
console.log(`The squares in ${nums} are ${getSqures(nums)}, respectively`)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
const getInverseOrderWords = (string_) => {
    if(typeof string_ === "string"){
        const words = string_.split(" ").reverse()
        const myReversedString = words.join(" ")
        return myReversedString
    }
    throw new TypeError("Expected a string")
}
const myString = "Hola como estas"
const myReversedString = getInverseOrderWords(myString)
console.log(`The reversing of "${myString}" is "${myReversedString}"`)

// 10. Crea una función que calcule el factorial de un número dado
const factorial = (number) => {
    if (number > 0) return number * factorial(number - 1)
    else if (number === 0) return 1
    return undefined
}
const MY_NUMBER = 5
console.log(`The factorial of ${MY_NUMBER} is ${factorial(MY_NUMBER)}`)