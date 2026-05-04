/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("Print the numbers from 1 to 20")
for (let i = 1; i <=20; i++){
    process.stdout.write(i + " ")
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
process.stdout.write("\n\nThe sum of 1 + 2 + ... + (n - 1) + n + (n + 1) + ... + 100 is ")
let sum = 1
for(let i = 2; i <= 100; i++){
    sum += i
}
console.log(sum)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("\nPrint even numbers from 1 to 50:")
let even = 2
do{
    process.stdout.write(even + " ")
    even += 2
}while (even <= 50)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("\n\nTraverse an array of names to print every name:")
const names = ["Alice", "Bob", "Candy"]
for (let name of names){
    console.log(name)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const string_ = "This is javascript, BABY!"
const vowels = new Set([
    "a", "e", "i", "o", "u"
])
let counter = 0;
for(let idx = 0; idx < string_.length; idx++){
    if (vowels.has(string_.charAt(idx).toLowerCase())) counter++;
}
console.log(`\n\nThe string "${string_}" has ${counter} vowels`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numbers = [1,2,3,4,5]
let i = 0, product = 1;
while(i < numbers.length){
    product *= numbers[i]
    i++
}
console.log(`\nThe product of the numbers in [${numbers}] is ${product}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("\nHere you have the five times table:")
let tr = 1, result = 0
const MY_BASE = 5

while(tr <= 10){
    process.stdout.write(`${MY_BASE} x ${tr} = `)
    result = MY_BASE * tr
    console.log(result)
    tr++
}

// 8. Usa un bucle para invertir una cadena de texto
let str = "Hola", reverseStr = ""
const halfLength = str.length / 2
for(let i = str.length - 1; i >= 0; i--){
    reverseStr += str.charAt(i)
}
console.log(`\n\nThe reverse of ${str} is "${reverseStr}"`)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("\nThe first ten numbers in the Fibonacci sequence:")
let old = 0, current = 1, next;
process.stdout.write(`${old} ${current} `)
for (let counter = 2; counter < 10; counter++){
    next = old + current;
    process.stdout.write(next + " ")
    old = current;
    current = next;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const arr = [34, 1, 76, 9, 3]

let filtered = []
for(const element of arr){
    if (element > 10) {
        filtered.push(element)
    }
}
console.log(`\n\nThe numbers grater than 10 in ${arr} are ${filtered}`) 