/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
const animals = ['dog', 'cat', 'rabbit', 'hamster', 'fish'];
console.log("first array:", animals);

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift('turtle'); // Añade al principio
console.log("after adding at beginning:", animals);

animals.push('parrot'); // Añade al final
console.log("after adding at end:", animals);

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1)
console.log("after removing third one:", animals);

// 4. Crea un set que almacene cinco libros
const books = new Set();
books.add("El Quijote");
books.add("Cien años de soledad");
books.add("1984");
books.add("To Kill a Mockingbird");
books.add("The Great Gatsby");
console.log("first set:", books);

// 5. Añade dos más. Uno de ellos repetido
books.add("El Ingenioso Hidalgo Don Quijote de la Mancha");
books.add("El Quijote");
console.log("after adding more books:", books);

// 6. Elimina uno concreto a tu elección
books.delete("1984");
console.log("after deleting one book:", books);

// 7. Crea un mapa que asocie el número del mes a su nombre
const months = new Map();
months.set(1, "Enero");
months.set(2, "Febrero");
months.set(3, "Marzo");
months.set(4, "Abril");
months.set(5, "Mayo");
months.set(6, "Junio");
months.set(7, "Julio");
months.set(8, "Agosto");
months.set(9, "Septiembre");
months.set(10, "Octubre");
months.set(11, "Noviembre");
months.set(12, "Diciembre");
console.log("months map:", months);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (months.has(5)) {
    console.log("The value for month 5 is:", months.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
months.set("summer", ["Junio", "Julio", "Agosto"]);
console.log("months map with summer:", months);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
const myArray = ["A", "B", "C", "D", "E"];
const mySet = new Set(myArray);
const myMap = new Map();
myMap.set("set", mySet);
console.log("map with set from array:", myMap);