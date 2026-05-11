/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function findUser(name) {
    const users = ["Cris", "Montes", "Dev"]
    const user = users.find(u => u === name)
    if (!user) {
        console.error("Usuario no encontrado")
    }
    return user
}
console.log(`Buscando a Cristofer: ${findUser("Cristofer")}`)
console.log(`Buscando a Cris: ${findUser("Cris")}`)

// 2. Crea una función que utilice warn correctamente
function validateAge(age) {
    if (age < 0) {
        console.warn("La edad no puede ser negativa")
    }
}
console.log("Validando edad -5...")
validateAge(-5)
console.log("Validando edad 30...")
validateAge(30)

// 3. Crea una función que utilice info correctamente
function logUserInfo(user) {
    console.info("Información del usuario:")
    console.info(user)
}
logUserInfo({ name: "Cris", age: 30, alias: "cmontesdev" })


// 4. Utiliza table
function logUsersTable(users) {
    console.table(users)
}
logUsersTable([
    { name: "Cris", age: 30, alias: "cmontesdev" },
    { name: "Brais", age: 37, alias: "MoureDev" }
])

// 5. Utiliza group
function logUserGroup(user) {
    console.group("Información del usuario")
    console.info(user)
    console.groupEnd()
}
logUserGroup({ name: "Cris", age: 30, alias: "cmontesdev" })
console.log("Otra información fuera del grupo")

// 6. Utiliza time
function timeOperation(operation) {
    console.time(operation)
    // Simula una operación
    for (let i = 0; i < 1000000; i++) {
        Math.sqrt(i)
    }
    console.timeEnd(operation)
}
timeOperation("Operación de raíz cuadrada")

// 7. Valida con assert si un número es positivo
function validatePositiveNumber(num) {
    console.assert(num > 0, "El número debe ser positivo")
}
console.log("Validando número -5...")
validatePositiveNumber(-5)
console.log("Validando número 10...")
validatePositiveNumber(10)

// 8. Utiliza count
function countOperations() {
    console.count("Operación realizada")
}
function resetCount() {
    console.countReset("Operación realizada")
    console.log("Contador reiniciado")
}

countOperations()
countOperations()
resetCount()
countOperations()

// 9. Utiliza trace
function logTrace() {
    console.trace()
}
function anotherFunction() {
    logTrace()
}
anotherFunction()

// 10. Utiliza clear
function clearConsole() {
    console.log("Este mensaje se mostrará antes de limpiar la consola.")
    console.clear()
    console.log("La consola ha sido limpiada.")
}

//clearConsole()
