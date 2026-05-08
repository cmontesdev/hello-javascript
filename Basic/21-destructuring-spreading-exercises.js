/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
console.log("Excercise 1: Usa desestructuración para extraer los dos primeros elementos de un array")
const arr = [1, 2, 3]
const [item1, item2] = arr
console.log(arr)
console.log(item1)
console.log(item2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("Excercise 2: Usa desestructuración en un array y asigna un valor predeterminado a una variable")
const [item3, item4, item5, item6 = 0] = arr
console.log(arr)
console.log(item3) 
console.log(item4) 
console.log(item5) 
console.log(item6) 

// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("Excercise 3: Usa desestructuración para extraer dos propiedades de un objeto")
const obj = {prop1: "hola", prop2: "mundo", prop3: 7}
const {prop1, prop3} = obj
console.log(obj)
console.log(prop1)
console.log(prop3)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
console.log("Excercise 4: Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes")
const {prop1:saludo, prop2:parte2} = obj
console.log(obj)
console.log(saludo)
console.log(parte2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("Excercise 5: Usa desestructuración para extraer dos propiedades de un objeto anidado")
const nestedObj = {
    outerProp: "outer",
    innerObj: {
        innerProp: "inner",
        somethingElse: "whatever"
    }
}
const {innerObj: {innerProp:first}, innerObj: {somethingElse: second}} = nestedObj
console.log(nestedObj)
console.log(first)
console.log(second)

// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("Excercise 6: Usa propagación para combinar dos arrays en uno nuevo")
const arr1 = [1, 2]
const arr2 = ["1", "2"]
const arr3 = [...arr1, ...arr2]
console.log(arr1)
console.log(arr2)
console.log(arr3)

// 7. Usa propagación para crear una copia de un array
console.log("Excercise 7: Usa propagación para crear una copia de un array")
const copyOfArr1 = [...arr1]
console.log(copyOfArr1)
console.log(arr1)

// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("Excercise 8: Usa propagación para combinar dos objetos en uno nuevo")
const obj1 = {prop1: 1, prop2: "2"}
const obj2 = {prop2: 2, prop3: "3"}
const obj3 = {...obj1, ...obj2} 
console.log(obj1)
console.log(obj2)
console.log(obj3) 

// Ojo: Si hay propiedades con el mismo nombre, se toma el valor del último objeto
// (se soluciona desestructurando primero la propiedad comun, propagando el resto y 
// luego combinar las partes)
const { prop2: prop2Obj1, ...rest1 } = obj1
const { prop2: prop2Obj2, ...rest2 } = obj2

const combined = {
    ...rest1,
    ...rest2,
    prop2Obj1,
    prop2Obj2
}
console.log(combined)

// 9. Usa propagación para crear una copia de un objeto
console.log("Excercise 9: Usa propagación para crear una copia de un objeto")
const copyOfObj1 = {...obj1}
console.log(obj1)
console.log(copyOfObj1)

// 10. Combina desestructuración y propagación
console.log("Excercise 10: Combina desestructuración y propagación")
const person = {
    id: 1,
    name: "Ana",
    password: "123456"
}

const { password, ...safePerson } = person
console.log(person)
console.log(safePerson)