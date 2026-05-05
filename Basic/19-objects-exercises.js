/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
const person = {
    name: "Cristofer",
    age: 24,
    alias: "cmontes"
}
console.log("Person object: ", person, "created")

// 2. Accede y muestra su valor
console.log("\nProperties in person object:")
console.log(person.name)
console.log(person["age"])
console.log(person["alias"])

// 3. Agrega una nueva propiedad
const email = "cmontes@example.com"
console.log(`\nAdding new property "email" with value "${email}" to person object...`)
person.email = email
console.log("Updated person object: ", person)

// 4. Elimina una de las 3 primeras propiedades
console.log("\nDeleting property \"age\" from person object...")
delete person.age
console.log("Updated person object: ", person)

// 5. Agrega una función e invócala
console.log("\nAdding method \"greet\" to person object and calling it...")
person.greet = function() {
    console.log(`¡Hola, mi nombre es ${this.name} y mi alias es ${this.alias}!`)
}
person.greet()
console.log("Updated person object: ", person)

// 6. Itera las propiedades del objeto
console.log("\nIterating properties of person object:")
for(const property in person){
    console.log(`${property}: ${person[property]}`)
}

// 7. Crea un objeto anidado
console.log("\nCreating nested object \"persona\"...")
const persona = {
    nombreCompleto: {
        nombre: "Cristofer",
        apellido: "Montes"
    },
    edad: 24,
    escuela: {
        nombre: "Escuela Superior de Cómputo",
        carrera: {
            nombre: "Ingeniería en Sistemas Computacionales",
            planDeEstudios: 2020
        }
    }
}
console.log("Object created: ", persona)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("\nAccessing nested properties in persona object:")
console.log(persona.nombreCompleto.nombre)
console.log(persona.nombreCompleto.apellido)
console.log(persona.escuela.nombre)
console.log(persona.escuela.carrera.nombre)
console.log(persona.escuela.carrera.planDeEstudios)

// 9. Comprueba si los dos objetos creados son iguales
console.log("\nComparing objects with lodash isEqual:")
function Person(name, age = 0) {
    this.name = name
    this.age = age
}
const person4 = new Person("juan")
const person5 = new Person("juan")
const person6 = new Person("Juan")

import isEqual from 'lodash/isEqual.js';

console.log(`isEqual(${JSON.stringify(person4)}, ${JSON.stringify(person5)}): ${isEqual(person4, person5)}`)
console.log(`isEqual(${JSON.stringify(person4)}, ${JSON.stringify(person6)}): ${isEqual(person4, person6)}`)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log("\nComparing different properties:")
console.log(`person4.name === person4.age: ${person4.name === person4.age}`)