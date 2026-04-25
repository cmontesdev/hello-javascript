/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("Excercise 1:")

const MY_NAME = "Cristofer"

const names = ["Cristofer", "Ana", "Bob"]
const number = Math.floor(Math.random() * names.length) 
const randomName = names[number]

console.log("The random name is " + randomName)

if (randomName === MY_NAME)
    console.log(`Hello, my name is ${randomName}!`)

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
console.log("\nExcercise 2:")

const knownCredentials = new Map([
    ["user", "admin"],
    ["password", "123"]

])

const users = ["admin", "root"]
const passwords = ["123", "qwerty"]

const user = users[Math.floor(Math.random() * 2)]
const password = passwords[Math.floor(Math.random() * 2)]

const hiddenPassword = "*".repeat(password.length)

console.log(`The user entered is ${user} and the password entered is ${hiddenPassword}`)

if (user === knownCredentials.get("user") && password === knownCredentials.get("password")) console.log("Login successful!")
else console.log("Login not successful! Please contact the owner of the account if you forgot its credentials")

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log("\nExcercise 3:")

const randomNumber = Math.floor(Math.random() * 2) // numero en [0, 100]
const sign = Math.random() < 0.5 ? -1 : 1 // signo aleatorio
const myNumber = randomNumber * sign
if (myNumber < 0) console.log(`El numero ${myNumber} es negativo`)
else if (myNumber === 0) console.log(`El numero ${myNumber} es cero`)
else console.log(`El numero ${myNumber} es positivo`)

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log("\nExcercise 4:")

const randomAge = Math.floor(Math.random() * 34) + 1 // probabilidades iguales de ser menor o mayor de edad, rango [1, 34]
if(randomAge >= 18) console.log(`${randomName} tiene ${randomAge} anio(s). Puede votar!`)
else {
    const ADULT_AGE = 18
    const missingYears = ADULT_AGE - randomAge
    console.log(`${randomName} tiene ${randomAge} anio(s). Le faltan ${missingYears} para poder votar :c`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log("\nExcercise 5:")
const ageGroup = randomAge >= 18 ? "adulto" : "menor"
console.log(ageGroup)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
console.log("\nExcercise 6:")
const mes = Math.floor(Math.random() * 12) + 1 // numero en [1, 12]

const monthNumber = new Map([
    [1, "january"],
    [2, "february"],
    [3, "march"],
    [4, "april"],
    [5, "may"],
    [6, "june"],
    [7, "july"],
    [8, "august"],
    [9, "september"],
    [10, "october"],
    [11, "november"],
    [12, "december"]
])

const monthSeason = new Map([
    ["january", "winter"],
    ["february", "winter"],
    ["march", "spring"],
    ["april", "spring"],
    ["may", "spring"],
    ["june", "summer"],
    ["july", "summer"],
    ["august", "summer"],
    ["september", "autumn"],
    ["october", "autumn"],
    ["november", "autumn"],
    ["december", "winter"]
])
console.log(`The month is ${monthNumber.get(mes)} and the season is ${monthSeason.get(monthNumber.get(mes))}`)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
console.log("\nExcercise 7:")
const monthNumberDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
console.log(`${monthNumber.get(mes)} has ${monthNumberDays[mes-1]} days`)

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
console.log("\nExcercise 8:")
const language = Math.floor(Math.random() * 4) // numero en [0, 3]
switch (language) {
    case 0:
        console.log("Hello! I speak english")
        break
    case 1:
        console.log("¡Hola! Hablo español") // se pronuncia "hola" y está en español
        break
    case 2:
        console.log("Bonjour! Je parle français") // se pronuncia "bonshur" y está en francés
        break
    case 3:
        console.log("Ciao! Parlo italiano") // se pronuncia "chao" y está en italiano
        break
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
console.log("\nExcercise 9:")
switch (monthNumber.get(mes)) {
    case "january":        
    case "february":
    case "december":
        console.log(`The month is ${monthNumber.get(mes)} and the season is winter`)
        break
    case "march":
    case "april":
    case "may":
        console.log(`The month is ${monthNumber.get(mes)} and the season is spring`)
        break
    case "june":
    case "july":
    case "august":
        console.log(`The month is ${monthNumber.get(mes)} and the season is summer`)
        break
    case "september":
    case "october":
    case "november":
        console.log(`The month is ${monthNumber.get(mes)} and the season is autumn`)
        break
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
console.log("\nExcercise 10:")
switch(monthNumber.get(mes)){
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${monthNumber.get(mes)} has 31 days`)
        break
    case "february":
        console.log("february has 28 days")
        break
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${monthNumber.get(mes)} has 30 days`)
}