
let objetoPersona = {
    name: 'John',
    lastName: "Arevalo"
}

console.log(objetoPersona)

// funcion constructora
// version 1
// function Persona (name, lastName, birthDate) {
//     this.name = name
//     this.lastName = lastName
//     this.birthDate = birthDate
//     this.initials = `${this.name.charAt(0).toUpperCase()}. ${this.lastName.charAt(0).toUpperCase()}.` 
//     this.saludar = () => {
//         console.log(`Hola soy, ${this.name} ${this.lastName}`)
//     }
// }
// console.log(this)

function Persona (name, lastName, birthDate) {
    this.name = name
    this.lastName = lastName
    this.birthDate = birthDate
    this.initials = `${this.name.charAt(0).toUpperCase()}. ${this.lastName.charAt(0).toUpperCase()}.` 
}

// Agregar un método al prototipo Persona
Persona.prototype.saludar = function() {
    console.log(`Hola soy, ${this.name} ${this.lastName}`)
}


let persona1 = new Persona("Elias", "Herrera", "1992/07/30")
let persona2 = new Persona("Fanny", "Alvarez", "1991/11/01")

console.log(persona1)
console.log(persona2)
persona1.saludar()
persona2.saludar()

// Herencia
// koder
// Generacion
// nivel


