/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
// agrego foreach para practicar aunque no se pidio
const prices = [100, 200, 300]

prices.forEach((item, idx, fullArray) => {
    fullArray[idx] = item * 0.9
})

console.log(prices)

//map
const discount = 0.25
const sales = prices.map((i) => i * (1 - discount))
console.log(sales)

//filter
const salesUnderOneHundredBucks = sales.filter(i => i <= 100)
console.log(salesUnderOneHundredBucks)

//reduce
const fruits = ["apple", "banana", "apple", "orange", "banana"]

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] ?? 0) + 1 // valor o 0 si no existe, luego sumo 1
    return acc
}, {})

console.log(count)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const myNumbers = [1, 2, 3, 4, 5]
const myQubicNumbersEvens = myNumbers
    .map(n => n ** 3)
    .filter(n => n % 2 === 0)
console.log(myQubicNumbersEvens)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
//flat
const myNestedArray = [6, [4, [2, [1], 3], 5], 7]
const myFlatArray = myNestedArray.flat(Infinity)
console.log(myFlatArray)

//flatmap
const mySencences = [
    "esta sentencia está en español",
    "this sentence is written in English"
]

const tokens = mySencences.flatMap(sentence => sentence.split(" "))
console.log(tokens)

const letters = mySencences.flatMap(sentence => sentence.split(""))
console.log(letters)

// 4. Ordena un array de números de mayor a menor
myFlatArray.sort((a, b) => b - a) // si retorna negativo, a va antes, 0 iguales, positivo a es mayor
console.log(myFlatArray)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const myArrOfSets = [new Set([1, 2, 3]), new Set([2, 3, 4])]
console.log("sets: ", myArrOfSets)

const union = new Set([...myArrOfSets[0], ...myArrOfSets[1]])
console.log(`union:`, union)

const [small, large] = myArrOfSets[0] <= myArrOfSets[1] 
                                        ? [myArrOfSets[0], myArrOfSets[1]] 
                                        : [myArrOfSets[1], myArrOfSets[0]] 

const interseccion = new Set()                                        
for(const number of small){
    if(large.has(number))
        interseccion.add(number)
}                                        
console.log("interseccion:", interseccion)

const diferenciaSimetrica = new Set()
for(const number of small){
    if(!large.has(number))
        diferenciaSimetrica.add(number)
}
for(const number of large){
    if(!small.has(number))
        diferenciaSimetrica.add(number)
}

console.log("diferencia simetrica:", diferenciaSimetrica)

// 6. Itera los resultados del ejercicio anterior
;[union, interseccion, diferenciaSimetrica]
    .forEach(set => {
        set.forEach(setItem => process.stdout.write(`${setItem} `))
        console.log()
    })

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
// ! -> A partir de aquí, lo hago de tres formas distintas para practicar
// 1
const usuarios = [
    new Map([
        ["nombre", "Cristofer"],
        ["edad", 24],
        ["email", "c@c.com"]
    ]),
    new Map([
        ["nombre", "Ramiro"],
        ["edad", 17],
        ["email", "a@a.com"]
    ])
]
usuarios.forEach(mapa =>
    mapa.forEach((v, k) => {
        console.log(`${k}: ${v}`)
    })
)

//2
function crearPersona(nombre, edad, email){
    return { nombre, edad, email }
}

const usuariosV2 = new Map([
    [1, crearPersona("Carlos", 20, "c@a.com")],
    [2, crearPersona("Fernando", 16, "f@a.com")]
])

usuariosV2.forEach((v, k) => {
    console.log(`${k} =>`)
    for(const prop in v){
        console.log(`${prop}: ${v[prop]}`)
    }
})

// 3
const usuariosV3 = new Map([
    [3, crearPersona("Domingo", 25, "d@a.com")],
    [4, crearPersona("Laura", 15, "l@a.com")]
])

usuariosV3.forEach((v, k) => {
    console.log(`${k} =>`)
    for (const [clave, valor] of Object.entries(v)) {
    console.log(`${clave}: ${valor}`)
}
})

// 8. Dado el mapa anterior, crea un array con los nombres
const nombres = []
usuarios.forEach(mapa => {
    nombres.push(mapa.get("nombre"))
})

console.log(nombres)

const nombresV2 = []
usuariosV2.forEach(value => {
    nombresV2.push(value["nombre"]) // value.nombre es lo mismo en este caso
})
console.log(nombresV2)

const nombresV3 = [...usuariosV3.values()].map(persona => persona.nombre)

console.log(nombresV3)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const emails = []
usuarios.forEach(mapa => {
    if(mapa.get("edad") >= 18){
        emails.push(mapa.get("email"))
    }
})
const emailsSet = new Set(emails)
console.log(emailsSet)

const emails2 = []
usuariosV2.forEach(persona => {
    if(persona.edad >= 18)
        emails2.push(persona.email)
})
const emails2Set = new Set(emails2)
console.log(emails2Set)

const emails3 = new Set(Array.from(usuariosV3).flat().filter(e => e instanceof Object && e.edad >= 18).map(e => e.email))
console.log(emails3)
const emailsUnidos = new Set([...emailsSet, ...emails2Set, ...emails3])
console.log(emailsUnidos)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
// 1
console.log(usuarios)
const usuariosObj = {}
usuarios.forEach((usuario, idx) => {
    usuariosObj[`${idx}`] = Object.fromEntries(usuario)
})

console.log(usuariosObj)
const usuariosPorEmail = new Map()
for(const prop in usuariosObj){
    usuariosPorEmail.set(usuariosObj[prop]["email"], usuariosObj[prop])
}
console.log(usuariosPorEmail)

// 2
const usuariosObjV2 = Object.fromEntries(usuariosV2)
const usuariosPorEmailV2 = new Map()

Object.values(usuariosObjV2).forEach(usuario => {
    usuariosPorEmailV2.set(usuario.email, usuario)
})
console.log(usuariosPorEmailV2)

// 3
const usuariosObjV3 = Object.fromEntries(usuariosV3)
const usuariosPorEmailV3 = new Map()

Object.entries(usuariosObjV3).forEach(([k, v]) => { // realmente no ocupo la clave pero para usar Object.entries()
    usuariosPorEmailV3.set(v["email"], v)
})
console.log(usuariosPorEmailV3)