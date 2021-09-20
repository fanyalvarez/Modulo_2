const personObject ={
	name:fany,
	lastName : Alvarez,
	gender : Mujer,
	age : 29,
	isSingle: true,
	hobbies: [
		"ver anime",
		"escuchar musica"
	],
	socialNetwok:{
		facebook:"Estefania Alvarez",
		instagram: Pri_alv
	},
	saludar: function () {
		return "Hola koders!"
		
	}
}
console.log(personObject)



//acceder a las propiedades de objeto
console.log(personObject.name)		// por puntos
console.log(personObject["hobbies"])  // por corchetes para los arreglos
console.log(personObject.hobbies[0])
console.log(personObject.socialNetwok.instagram)

// ejecutar un método
console.log(personObject.saludar()) 

//agregar una propiedad

personObject.birtday = "01-11-91"
personObject.zodiacal = "escorpion"
personObject.hobbies.push = ("bailar")
personObject.socialNetwok.twitter = "@fany"



//let nameupper = personObject.name.toUppercase()

personObject.name = personObject.name.toUpperCase()

//destructuringassigment
//{que propiedades quiero abtener} = de que objeto las voy a obtener

let { name, lastname, age} = personObject

console.log (name)
console.log (lastname)
console.log (age)

console.log(`hola soy ${name} ${lastname} y tengo ${age}`)






//crear -- una variable y puedo acceder como una propiedad

let firstNAme = "emi"
let generation = 13
let bootcamp	= "JavaScript"

let koderobject	= {
	firstName,
	generation,
	bootcamp
}
console.log(koderObject)


// Destructuring with array
let arrayColors = ["Purple", "orange", "blue"]
let purpleColor = arrayColors[0]
console.log(purpleColor)


let [myColor1, myColor2, myColor3] = arrayColors
console.log(myColor1)
console.log(myColor2)
console.log(myColor3)
