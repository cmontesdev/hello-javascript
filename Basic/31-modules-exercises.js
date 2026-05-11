/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
console.log("\nInicio...\n\n")
export const validateAge = (age) => age >= 18

// 2. Exporta una constante
export const API_URL = "http://localhost:3000";

// 3. Exporta una clase
class User {
    #name

    constructor(name) {
        this.#name = name
    }

    get name() {
        return this.#name
    }

    set name(name) {
        this.#name = name
    }
}

export { User }

// 4. Importa una función
import { echo } from "./my_modules/echo.js"
console.log(echo("Hello, world!"))

// 5. Importa una constante
// this will run the code in 17-functions-exercises.js and export the PI constant
import { PI } from "./my_modules/constants.js";
console.log(PI)

// 6. Importa una clase
// !IMPORTANT: this will run the code in 22-classes.js and export the Dog class
import { Dog } from "./22-classes.js"
const dog1 = new Dog("scooby")
dog1.sound()

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
// solo se puede exportar una función, una constante o una clase por defecto, 
// no se pueden exportar varias por defecto en el mismo archivo

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
// solo se puede importar una función, una constante o una clase por defecto, 
// no se pueden importar varias por defecto en el mismo archivo

// 9. Exporta una función, una constante y una clase desde una carpeta
import { sub, MULTIPLICATIVE_IDENTITY, Circle } from "./my_modules/math-utils.js"
console.log(sub(10, 5))
console.log(MULTIPLICATIVE_IDENTITY)

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { UserAge, users, findUser } from "../other-modules/others.mjs"
const userAge1 = new UserAge("Carlos", 30)
console.log(userAge1)

const user1 = findUser("Carlos")
const user2 = findUser("Cristofer")
const users2 = [user1, user2]

users2.forEach(user => {
    if (user === undefined) {
        console.log("Usuario no encontrado")
    } else {
        console.log(`Usuario encontrado: ${user.name}, ${user.age} años`)
    }
})