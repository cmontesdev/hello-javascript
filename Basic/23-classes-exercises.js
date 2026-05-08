/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Pc {
    #type
    #os
    
    constructor(type, os) {
        this.#type = type
        this.#os = os
    }
    
    get type(){
        return this.#type
    }
    
    get os(){
        return this.#os
    }

    set os(os){
        this.#os = os
    }
    
    // 2. Añade un método a la clase que utilice las propiedades
    getInfo(){
        return `Type: ${this.#type}, OS: ${this.#os}`
    }

    // 4. Añade un método estático a la primera clase
    static createGeneric(){
        return new Pc("generic", "generic")
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
const pc1 = new Pc("laptop", "Windows")
console.log(pc1)
console.log(pc1.type)
console.log(pc1.os)
console.log(pc1.getInfo())


// 5. Haz uso del método estático
const pc2 = Pc.createGeneric()
console.log(pc2)
console.log(pc2.getInfo())

// 6. Crea una clase que haga uso de herencia
// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Smartphone extends Pc {
    #brand

    constructor(type, os, brand) {
        super(type, os)
        this.#brand = brand
    }

    get brand() {
        return this.#brand
    }

    set brand(brand) {
        this.#brand = brand
    }

    // 10. Sobrescribe un método de una clase que utilice herencia 
    getInfo(){
        return `Type: ${super.type}, OS: ${super.os}, Brand: ${this.#brand}`
    }
}

// 9. Utiliza los get y set y muestra sus valores
const phone1 = new Smartphone("smartphone", "Android", "Samsung")
console.log(phone1)
phone1.os = "iOS"
phone1.brand = "iPhone"


// 10 ->
console.log(phone1.getInfo())

