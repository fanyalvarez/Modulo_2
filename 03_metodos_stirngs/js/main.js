// String
// dato primitivo

let nombre = "Fany"
let apellido = 'Alvarez'
let saludo = new String("Oli")

//concatenar
let nombreCompletoconsuma = nombre + apellido
let nombreCompletoconcomillas = nombre + " "+ apellido

//template string
// acento invertido abajo de esc
let nombreCompletoconteamplatestring = `${saludo} mi nombre es ${nombre} ${apellido}`

	console.log (nombreCompletoconsuma)
	console.log(nombreCompletoconcomillas)
	console.log(nombreCompletoconteamplatestring)


//primitive wrapper object

let someString = "Hola a todos"
	console.log(someString.length)



//FUNCIONES
console.log("----FUNCIONES------")

//Metodo tradicional
let numberOne = 5  
let numberTwo = 2

let suma = numberOne+ numberTwo
	console.log(suma)

//metodo con funcion

function sumaDeDOsNumeros (numberOne, numberTwo){
	//let numberOne = 10 ya no son necesarios porq esta arriba en el parametro
 	//let numberTwo = 20

	let suma = numberOne + numberTwo //NO IMPORTA QUE SE REPITA EL NONMBRE
		//console.log (suma)
		return suma //regresa la variable para poder acceder a ella y poder usarla despues
	}

//invocar la funcion
sumaDeDOsNumeros(100,20) //solo se ejectuta si existe console dentro de function

let resultSuma = sumaDeDOsNumeros(10, 20)
	console.log(resultSuma)












/*
-pedir la frase
-regresar la palabra
-definir la palabra a buscar
*/