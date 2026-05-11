// Este modulo se creo con extension .mjs para indicar que es un modulo de ES6, 
// aunque no es necesario si se especifica "type": "module" en el package.json
// Sin embargo, preferi usar .mjs porque ya hay un package.json
// el cual no tiene "type": "module" y no quiero cambiarlo para evitar posibles 
// problemas de incompatibilidad con modulos CommonJS que pueda tener el proyecto 
// y que no he visto aun (me falta explorar toda la carpeta Intermediate)

class UserAge {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

}

const users = [
    new UserAge("Cristofer", 24),
    new UserAge("Montes", 25)
]

function findUser(name) {
    return users.find(u => u.name === name)
}

export { UserAge, users, findUser }