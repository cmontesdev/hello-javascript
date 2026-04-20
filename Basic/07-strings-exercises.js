/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let firstName = "Cristofer"
let lastName = "Montes"
let fullName = firstName + " " + lastName

// 2. Muestra la longitud de una cadena de texto
console.log(`The length of "${fullName}" is: ${fullName.length} characters`)

// 3. Muestra el primer y último carácter de un string
console.log("The first character is: " + fullName[0])
console.log("The last character is:" + fullName[fullName.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string
let toUpperCase = fullName.toUpperCase()
console.log("My full name in upper case is " + toUpperCase) 

let toLowerCase = fullName.toLowerCase()
console.log(`Me full name to lower case is ` + toLowerCase)

// 5. Crea una cadena de texto en varias líneas
let multiLineString = `
this
is a 
multiline string
`
console.log(multiLineString)

// 6. Interpola el valor de una variable en un string
console.log(`The string "${multiLineString}" has a size of ${multiLineString.length} characters`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
//multiLineString.replaceAll(" ", "-")
//console.log(multiLineString) <- this is wrong because the replaceAll method does not modify the original string, it returns a new string with the replacements
multiLineString = multiLineString.replaceAll(" ", "-")
console.log(multiLineString) //<- this is correct because we are assigning the result of the replaceAll method to the original var

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let myString = "Este texto no fue escrito por una IA"
let stringToSearch = "iA"
let result = myString.toLowerCase().includes(stringToSearch.toLocaleLowerCase()) ? "contiene" : "no contiene";
console.log(`La cadena "${myString}" ${result} la cadena ${stringToSearch}, no contemplando mayúsculas/minúsculas`)

// 9. Comprueba si dos strings son iguales
console.log(`Los strings "${myString}" y "${stringToSearch}" son iguales: ${myString === stringToSearch}`)
console.log(myString === stringToSearch)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(`Los strings "${myString}" y "${stringToSearch}" tienen la misma longitud: ${myString.length === stringToSearch.length}`)