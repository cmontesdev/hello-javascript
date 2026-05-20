/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Este es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/*
Este es un comentario multilinea
que se extiende por varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myBoolean = true;
// Para números enteros y decimales se utiliza el mismo tipo de dato: number
let myNumber = 42;
let myFloat = 3.14;
// strings pueden ser con comillas simples, dobles o backticks
let myStringWithDoubleQuotes = "Hello, world!";
let myStringWithSingleQuotes = 'Hello, world!';
let myStringWithBackticks = `Hello, world!`;
let myNull = null;
let myUndefined;
let mySymbol = Symbol("mySymbol");

// 4. Imprime por consola el valor de todas las variables
console.log(myBoolean);
console.log(myNumber);
console.log(myFloat);
console.log(myStringWithDoubleQuotes);
console.log(myStringWithSingleQuotes);
console.log(myStringWithBackticks);
console.log(myNull);
console.log(myUndefined);
console.log(mySymbol);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myBoolean)
console.log(typeof myNumber)
console.log(typeof myFloat)
console.log(typeof myStringWithDoubleQuotes)
console.log(typeof myStringWithSingleQuotes)
console.log(typeof myStringWithBackticks)
console.log(typeof myNull) // typeof null devuelve "object", es un error histórico de JavaScript
console.log(typeof myUndefined)
console.log(typeof mySymbol)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myBoolean = false
myNumber = 100
myFloat = 2.718
myStringWithDoubleQuotes = "Goodbye, world!"
myStringWithSingleQuotes = 'Goodbye, world!'
myStringWithBackticks = `Goodbye, world!`
myNull = null // null solo puede ser null, no se puede asignar otro valor
myUndefined = undefined
mySymbol = Symbol("anotherSymbol")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myBoolean = "This is a string now"
myNumber = true
myFloat = null
myStringWithDoubleQuotes = 12345
myStringWithSingleQuotes = false
myStringWithBackticks = undefined
myNull = 'Now I\'m a string'
console.log(myNull) // Comprobando que escapé correctamente la comilla simple
myUndefined = 3.14
mySymbol = `Not a symbol anymore`

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myConstBoolean = true;
const myConstNumber = 42;
const myConstFloat = 3.14;
const myConstStringWithDoubleQuotes = "Hello, world!";
const myConstStringWithSingleQuotes = 'Hello, world!';
const myConstStringWithBackticks = `Hello, world!`;
const myConstNull = null;
const myConstUndefined = undefined;
const myConstSymbol = Symbol("myConstSymbol");

// 9. A continuación, modifica los valores de las constantes
/*
myConstBoolean = false; 
myConstNumber = 100; 
myConstFloat = 2.718; 
myConstStringWithDoubleQuotes = "Goodbye, world!"; 
myConstStringWithSingleQuotes = 'Goodbye, world!'; 
myConstStringWithBackticks = `Goodbye, world!`; 
myConstNull = {}; */
myConstUndefined = undefined; /*
myConstSymbol = Symbol("anotherConstSymbol"); 
*/
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse