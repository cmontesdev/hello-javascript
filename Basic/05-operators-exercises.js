/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let sum = 5 + 3 // Suma
let difference = 10 - 9 // Resta
let product = 2 * 3 // Multiplicación
let quotient = 10 / 2 // División
let remainder = 10 % 7 // Módulo
let exponentiation = 2 ** 3 // Exponenciación

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log("\nResultados de las operaciones de asignación:")
let sumAssignment = 0
process.stdout.write(`${sumAssignment} += ${sum} = `)
sumAssignment += sum
console.log(sumAssignment)

let differenceAssignment = 0
process.stdout.write(`${differenceAssignment} -= ${difference} = `)
differenceAssignment -= difference
console.log(differenceAssignment)

let productAssignment = 2
process.stdout.write(`${productAssignment} *= ${product} = `)
productAssignment *= product
console.log(productAssignment)

let quotientAssignment = 2
process.stdout.write(`${quotientAssignment} /= ${quotient} = `)
quotientAssignment /= quotient
console.log(quotientAssignment)

let remainderAssignment = 10
process.stdout.write(`${remainderAssignment} %= ${remainder} = `)
remainderAssignment %= remainder
console.log(remainderAssignment)

let exponentiationAssignment = 2
process.stdout.write(`${exponentiationAssignment} **= ${exponentiation} = `)
exponentiationAssignment **= exponentiation
console.log(exponentiationAssignment)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("Comparaciones verdaderas:")
console.log(5 > 3) // Mayor que
console.log(5 < 10) // Menor que
console.log(5 >= 5) // Mayor o igual que
console.log(5 === 5) // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(5 == 5) // Igualdad por valor

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("Comparaciones falsas:")
console.log(5 < 3) // Menor que
console.log(5 > 10) // Mayor que
console.log(5 > 5) // Mayor que
console.log(5 !== 5) // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(5 != 5) // Desigualdad por valor


// 5. Utiliza el operador lógico and
console.log("AND:")
let trueVar = !("hola" == false) && 1 == true
console.log(`${trueVar}, que es de tipo ${typeof trueVar}`)

// 6. Utiliza el operador lógico or
console.log(`OR:`)
console.log(trueVar || false)

// 7. Combina ambos operadores lógicos
console.log(`AND combinado con OR:`)
console.log((trueVar && false) || (5 > 3))

// 8. Añade alguna negación
console.log(`Negación:`)
console.log(!trueVar)

// 9. Utiliza el operador ternario
let randomBoolean = !!Math.floor(Math.random() * 2) // coercion de tipos
let result = randomBoolean ? "True" : "False"
console.log(`${randomBoolean} (${typeof randomBoolean}) -> ${result}`)
// Math.random() devuelve un numero decimal en el rango [0, 1), de modo que la probabilidad es 50/50
let anotherRandomBoolean = Math.floor(Math.random() < 0.5) 
let anotherResult = anotherRandomBoolean ? "True" : "False"
console.log(`${anotherRandomBoolean} (${typeof anotherRandomBoolean}) -> ${anotherResult}`)

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(`Combinación de operadores:`)
let complexExpression = (5 + 3) > (10 - 9) && (2 * 3) <= (10 / 2)
console.log(`(5 + 3) > (10 - 9) && (2 * 3) <= (10 / 2) -> ${complexExpression}`)